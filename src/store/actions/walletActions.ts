import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from '../index';
import solanaService from '../../services/solanaService';
import evmService from '../../services/evmService';
import database from '../../services/database';
import { chainsArray } from '../../constants/chains';
import { Chain } from '../../constants/chains';

// Create new wallet
export const createWallet = createAsyncThunk<
  { address: string; seedPhrase: string; evmAddress: string },
  void,
  { dispatch: AppDispatch; state: RootState }
>(
  'wallet/createWallet',
  async (_, { rejectWithValue }) => {
    try {
      console.log('Starting wallet creation in action...');
      
      // 1. Create Solana wallet (this generates the seed phrase)
      const solanaWalletResult = await solanaService.createWallet();
      console.log('Solana wallet created:', solanaWalletResult.address);
      
      // 2. Create EVM wallet from the SAME seed phrase
      const evmWalletResult = await evmService.createWalletFromSeed(solanaWalletResult.seedPhrase);
      console.log('EVM wallet created:', evmWalletResult.address);
      
      // 3. Generate Solana chains data
      const solanaChains = await solanaService.generateWalletChains(solanaWalletResult.address);
      console.log('Generated Solana chains:', solanaChains.length, 'chains');
      
      // 4. Generate EVM chains data
      const evmChains = await evmService.generateWalletChains(evmWalletResult.address);
      console.log('Generated EVM chains:', evmChains.length, 'chains');
      
      // 5. Combine both chain arrays
      const allChains: Chain[] = [...solanaChains, ...evmChains];
      console.log('Total chains to save:', allChains.length);
      
      // 6. Save both Solana and EVM wallets to database
      await database.saveWallet(solanaWalletResult.address, evmWalletResult.address, solanaWalletResult.seedPhrase);
      console.log('Both wallets saved to database');
      
      // 7. Save all chains (SOL + EVM) to database with correct wallet addresses
      await database.saveChains(allChains, solanaWalletResult.address, evmWalletResult.address);
      console.log('All chains saved to database');
      
      return {
        address: solanaWalletResult.address,
        seedPhrase: solanaWalletResult.seedPhrase,
        evmAddress: evmWalletResult.address,
      };
    } catch (error) {
      console.error('Error creating wallet in action:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      const errorStack = error instanceof Error ? error.stack : '';
      console.error('Error details:', errorMessage);
      console.error('Error stack:', errorStack);
      return rejectWithValue(`Failed to create wallet: ${errorMessage}`);
    }
  }
);

// Import wallet from seed phrase
export const importWallet = createAsyncThunk<
  { address: string; evmAddress: string },
  string,
  { dispatch: AppDispatch; state: RootState }
>(
  'wallet/importWallet',
  async (seedPhrase, { rejectWithValue }) => {
    try {
      console.log('Starting wallet import in action...');
      
      // 1. Import Solana wallet from seed phrase
      const solanaWalletResult = await solanaService.importWallet(seedPhrase);
      console.log('Solana wallet imported:', solanaWalletResult.address);
      
      // 2. Import EVM wallet from the SAME seed phrase
      const evmWalletResult = await evmService.importWallet(seedPhrase);
      console.log('EVM wallet imported:', evmWalletResult.address);
      
      // 3. Generate Solana chains data
      const solanaChains = await solanaService.generateWalletChains(solanaWalletResult.address);
      console.log('Generated Solana chains:', solanaChains.length, 'chains');
      
      // 4. Generate EVM chains data
      const evmChains = await evmService.generateWalletChains(evmWalletResult.address);
      console.log('Generated EVM chains:', evmChains.length, 'chains');
      
      // 5. Combine both chain arrays
      const allChains: Chain[] = [...solanaChains, ...evmChains];
      console.log('Total chains to save:', allChains.length);
      
      // 6. Save both Solana and EVM wallets to database
      await database.saveWallet(solanaWalletResult.address, evmWalletResult.address, seedPhrase);
      console.log('Both wallets saved to database');
      
      // 7. Save all chains (SOL + EVM) to database with correct wallet addresses
      await database.saveChains(allChains, solanaWalletResult.address, evmWalletResult.address);
      console.log('All chains saved to database');
      
      return {
        address: solanaWalletResult.address,
        evmAddress: evmWalletResult.address,
      };
    } catch (error) {
      console.error('Error importing wallet:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      return rejectWithValue(`Failed to import wallet: ${errorMessage}`);
    }
  }
);

// Load wallet data from database
export const loadWalletData = createAsyncThunk<
  { chains: Chain[]; walletAddress: string },
  void,
  { dispatch: AppDispatch; state: RootState }
>(
  'wallet/loadWalletData',
  async (_, { rejectWithValue }) => {
    try {
      // Get wallet from database
      const wallet = await database.getWallet();
      
      if (!wallet) {
        return rejectWithValue('No wallet found');
      }

      // Get chains from database (will get all chains for both wallets)
      const chainsData = await database.getAllChains();
      
      // Convert database chains to Chain interface
      const chains: Chain[] = chainsData.map(chain => ({
        tokenName: chain.tokenName,
        symbol: chain.symbol,
        decimals: chain.decimals,
        chainName: chain.chainName,
        rpcUrl: chain.rpcUrl,
        rpcUrlname: chain.rpcUrlname,
        isEvm: chain.isEvm,
        orderno: chain.orderno,
        isactive: chain.isactive,
        type: chain.type as "chain" | "token",
        tokenAddress: chain.tokenAddress,
        tokenImage: chain.tokenImage,
        chainId: chain.chainId,
      }));

      return {
        chains,
        walletAddress: wallet.solanaAddress,
      };
    } catch (error) {
      console.error('Error loading wallet data:', error);
      return rejectWithValue('Failed to load wallet data');
    }
  }
);

// Update wallet balances
export const updateWalletBalances = createAsyncThunk<
  Chain[],
  void,
  { dispatch: AppDispatch; state: RootState }
>(
  'wallet/updateWalletBalances',
  async (_, { getState, rejectWithValue }) => {
    try {
      const { wallet } = getState();
      
      if (!wallet.wallets.length) {
        return rejectWithValue('No wallets to update');
      }

      const updatedChains: Chain[] = [];

      for (const chain of wallet.wallets) {
        try {
          if (chain.type === 'chain') {
            // Update SOL balance
            const balance = await solanaService.getBalance(chain.symbol === 'SOL' ? 'wallet_address' : '');
            // Update chain with balance info if needed
            updatedChains.push(chain);
          } else if (chain.type === 'token') {
            // Update token balance
            const balance = await solanaService.getTokenBalance('wallet_address', chain.tokenAddress.toString());
            // Update chain with balance info if needed
            updatedChains.push(chain);
          }
        } catch (error) {
          console.error(`Error updating balance for ${chain.symbol}:`, error);
          updatedChains.push(chain); // Keep original chain if update fails
        }
      }

      return updatedChains;
    } catch (error) {
      console.error('Error updating wallet balances:', error);
      return rejectWithValue('Failed to update wallet balances');
    }
  }
);

// Request airdrop for development
export const requestAirdrop = createAsyncThunk<
  string,
  void,
  { dispatch: AppDispatch; state: RootState }
>(
  'wallet/requestAirdrop',
  async (_, { getState, rejectWithValue }) => {
    try {
      const { wallet } = getState();
      
      if (!wallet.wallets.length) {
        return rejectWithValue('No wallet found');
      }

      // Find SOL chain to get wallet address
      const solChain = wallet.wallets.find(chain => chain.symbol === 'SOL');
      
      if (!solChain) {
        return rejectWithValue('SOL wallet not found');
      }

      // Request airdrop
      const signature = await solanaService.requestAirdrop('wallet_address', 1);
      
      return signature;
    } catch (error) {
      console.error('Error requesting airdrop:', error);
      return rejectWithValue('Failed to request airdrop');
    }
  }
);

// Fetch token data with balances and prices for home screen
export const fetchTokenData = createAsyncThunk<
  Array<{
    id: number;
    tokenLogo: any;
    tokenName: string;
    tokenSymbol: string;
    tokenPrice: string;
    dollarPrice: string;
    balance: number;
    currentPrice: number;
  }>,
  void,
  { dispatch: AppDispatch; state: RootState }
>(
  'wallet/fetchTokenData',
  async (_, { getState, rejectWithValue }) => {
    try {
      const { wallet } = getState();
      
      if (!wallet.wallets.length) {
        return rejectWithValue('No wallet found');
      }

      // Get wallet address from the first chain (should be SOL)
      const walletAddress = wallet.wallets[0]?.chainName === 'Solana' ? 
        await database.getWallet() : null;
      
      if (!walletAddress) {
        return rejectWithValue('Wallet address not found');
      }

      const tokenData = [];

      for (const chain of wallet.wallets) {
        try {
          let balance = 0;
          
          if (chain.type === 'chain' && chain.symbol === 'SOL') {
            // Get SOL balance (already in SOL units)
            balance = await solanaService.getBalance(walletAddress.solanaAddress);
          } else if (chain.type === 'token') {
            // Get token balance (already in token units)
            balance = await solanaService.getTokenBalance(
              walletAddress.solanaAddress, 
              chain.tokenAddress.toString()
            );
          }

          // Get current price from market
          const currentPrice = await getTokenPrice(chain.symbol);
          
          // Calculate dollar value
          const dollarValue = balance * currentPrice;
          
          // Format balance for display (balance is already in proper units)
          const formattedBalance = formatTokenBalance(balance, 0); // No need to divide by decimals again
          const formattedDollarValue = formatDollarValue(dollarValue);

          tokenData.push({
            id: chain.orderno,
            tokenLogo: getTokenImage(chain.symbol),
            tokenName: chain.tokenName,
            tokenSymbol: chain.symbol,
            tokenPrice: formattedBalance,
            dollarPrice: formattedDollarValue,
            balance: balance,
            currentPrice: currentPrice,
          });
        } catch (error) {
          console.error(`Error fetching data for ${chain.symbol}:`, error);
          // Add token with zero balance if fetch fails
          tokenData.push({
            id: chain.orderno,
            tokenLogo: getTokenImage(chain.symbol),
            tokenName: chain.tokenName,
            tokenSymbol: chain.symbol,
            tokenPrice: '0',
            dollarPrice: '$0.00',
            balance: 0,
            currentPrice: 0,
          });
        }
      }

      return tokenData.sort((a, b) => a.id - b.id);
    } catch (error) {
      console.error('Error fetching token data:', error);
      return rejectWithValue('Failed to fetch token data');
    }
  }
);

// Helper function to get token price
async function getTokenPrice(symbol: string): Promise<number> {
  try {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${symbol === 'SOL' ? 'solana' : 'tether'}&vs_currencies=usd`,
      {
        headers: {
          'x-cg-demo-api-key': 'CG-cr1x1mH6z2RMLA561uu1x5SA',
        },
      }
    );
    
    const data = await response.json() as Record<string, { usd: number }>;
    const coinId = symbol === 'SOL' ? 'solana' : 'tether';
    return data[coinId]?.usd || 0;
  } catch (error) {
    console.error('Error fetching price:', error);
    return 0;
  }
}

// Helper function to format token balance
function formatTokenBalance(balance: number, decimals: number): string {
  // Balance is already in proper units from the service
  const formatted = balance.toFixed(6);
  return parseFloat(formatted).toLocaleString();
}

// Helper function to format dollar value
function formatDollarValue(value: number): string {
  return `$${value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

// Helper function to get token image
function getTokenImage(symbol: string): any {
  // Import Images dynamically to avoid circular dependency
  const { Images } = require('../../Images');
  // For now, use Solana image for all tokens. In production, you'd have specific images for each token
  return Images.solana;
}
