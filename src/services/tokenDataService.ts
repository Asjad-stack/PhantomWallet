import database from './database';
import solanaService from './solanaService';
import evmService from './evmService';
import { Images } from '../Images';

interface TokenData {
  id: number;
  tokenLogo: any;
  tokenName: string;
  tokenSymbol: string;
  tokenPrice: string;
  dollarPrice: string;
  balance: number;
  currentPrice: number;
  // Original chain data
  symbol: string;
  decimals: number;
  chainName: string;
  rpcUrl: string;
  rpcUrlname: string;
  isEvm: number;
  orderno: number;
  isactive: number;
  type: string;
  tokenAddress: string;
  tokenImage: string;
  chainId: number;
}

class TokenDataService {
  /**
   * Get real-time price for SOL and ETH tokens/coins
   */
  private async getTokenPrice(symbol: string): Promise<number> {
    try {
      // Only support SOL and ETH chains
      const coinGeckoIds: Record<string, string> = {
        'SOL': 'solana',
        'USDT': 'tether', // USDT on Solana
        'ETH': 'ethereum',
        'USDC': 'usd-coin', // USDC on Ethereum
      };

      const coinId = coinGeckoIds[symbol.toUpperCase()];
      
      if (!coinId) {
        console.log(`Price not supported for ${symbol}, using default price 0`);
        return 0;
      }

      const response = await fetch(
        `https://api.coingecko.com/api/v3/simple/price?ids=${coinId}&vs_currencies=usd&include_24hr_change=true`,
        {
          headers: {
            'x-cg-demo-api-key': 'CG-cr1x1mH6z2RMLA561uu1x5SA',
            'Accept': 'application/json',
          },
        }
      );
      
      if (!response.ok) {
        throw new Error(`CoinGecko API error: ${response.status}`);
      }

      const data = await response.json() as Record<string, { usd: number; usd_24h_change?: number }>;
      const priceData = data[coinId];
      
      if (!priceData) {
        console.log(`No price data found for ${symbol} (${coinId})`);
        return 0;
      }

      const price = priceData.usd || 0;
      const change24h = priceData.usd_24h_change || 0;
      
      console.log(`Real-time price for ${symbol}: $${price} (24h: ${change24h > 0 ? '+' : ''}${change24h.toFixed(2)}%)`);
      
      return price;
    } catch (error) {
      console.error(`Error fetching real-time price for ${symbol}:`, error);
      return 0;
    }
  }

  /**
   * Format token balance for display
   */
  private formatTokenBalance(balance: number): string {
    const formatted = balance.toFixed(6);
    return parseFloat(formatted).toLocaleString();
  }

  /**
   * Format dollar value for display
   */
  private formatDollarValue(value: number): string {
    return `$${value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }

  /**
   * Get token image based on symbol
   */
  private getTokenImage(symbol: string, tokenImageUrl: string): any {
    console.log(`Getting image for ${symbol}:`, tokenImageUrl);
    
    // Map symbols to available images
    const imageMap: Record<string, any> = {
      'SOL': Images.solana,
      'USDT': Images.solana, // Using Solana image for USDT since we don't have USDT image
      'USDC': Images.solana, // Using Solana image for USDC since we don't have USDC image
      'ETH': Images.solana,  // Using Solana image for ETH since we don't have ETH image
      'BTC': Images.solana,  // Using Solana image for BTC since we don't have BTC image
    };
    
    // Return mapped image or default to Solana
    const image = imageMap[symbol] || Images.solana;
    console.log(`Selected image for ${symbol}:`, image);
    return image;
  }

  /**
   * Remove duplicates based on symbol + chain combination
   * This prevents ETH and SOL from being treated as duplicates (both have tokenAddress "0")
   */
  private removeDuplicates(chains: any[]): any[] {
    return chains.reduce((acc: any[], current: any) => {
      // Create unique key combining symbol and chain type (isEvm)
      const uniqueKey = `${current.symbol}_${current.isEvm}`;
      const existingIndex = acc.findIndex(chain => {
        const existingKey = `${chain.symbol}_${chain.isEvm}`;
        return existingKey === uniqueKey;
      });
      
      if (existingIndex === -1) {
        acc.push(current);
      } else {
        console.log(`Duplicate found for ${current.symbol} on ${current.isEvm === 1 ? 'EVM' : 'Solana'} chain, keeping first one`);
      }
      return acc;
    }, []);
  }

  /**
   * Fetch token data with balances and prices for home screen
   * This method automatically works with any tokens added to the database
   */
  async fetchTokenData(): Promise<{ tokenData: TokenData[]; totalBalance: number; error?: string }> {
    try {
      console.log('Starting token data fetch...');

      // Get wallet from database
      const wallet = await database.getWallet();
      if (!wallet) {
        return { tokenData: [], totalBalance: 0, error: 'No wallet found' };
      }

      console.log('Wallet found:', wallet.solanaAddress, wallet.evmAddress);

      // Get chains from database (will get all chains for both wallets)
      const chainsData = await database.getAllChains();
      console.log('Chains from database:', chainsData.length, chainsData);
      
      if (!chainsData || chainsData.length === 0) {
        console.log('No chains found in database');
        return { tokenData: [], totalBalance: 0, error: 'No tokens found' };
      }

      // Remove duplicates based on tokenAddress (contract address)
      const uniqueChains = this.removeDuplicates(chainsData);
      console.log('Unique chains after deduplication:', uniqueChains.length, uniqueChains);

      const tokenDataArray: TokenData[] = [];

      for (const chain of uniqueChains) {
        try {
          console.log(`Processing chain: ${chain.symbol} (${chain.tokenName})`);
          console.log('Chain data:', {
            symbol: chain.symbol,
            tokenName: chain.tokenName,
            type: chain.type,
            tokenImage: chain.tokenImage,
            tokenImageType: typeof chain.tokenImage,
            tokenAddress: chain.tokenAddress
          });

          let balance = 0;
          
          if (chain.type === 'chain' && chain.symbol === 'SOL') {
            // Get SOL balance using Solana address
            balance = await solanaService.getBalance(wallet.solanaAddress);
            console.log(`SOL balance: ${balance}`);
          } else if (chain.type === 'chain' && chain.symbol === 'ETH') {
            // Get ETH balance using EVM address
            balance = await evmService.getBalance(wallet.evmAddress);
            console.log(`ETH balance: ${balance}`);
          } else if (chain.type === 'token') {
            // Validate token address before getting balance
            const tokenAddress = chain.tokenAddress.toString();
            console.log(`Token address for ${chain.symbol}: ${tokenAddress}`);
            
            // Check if token address is valid (not "0" or empty)
            if (tokenAddress && tokenAddress !== "0" && tokenAddress.length > 20) {
              try {
                // Use appropriate service and wallet address based on chain type
                if (chain.isEvm === 1) {
                  // EVM token (USDC, USDT on Ethereum)
                  balance = await evmService.getTokenBalance(wallet.evmAddress, tokenAddress);
                } else {
                  // Solana token (USDT on Solana)
                  balance = await solanaService.getTokenBalance(wallet.solanaAddress, tokenAddress);
                }
                console.log(`${chain.symbol} balance: ${balance}`);
              } catch (error) {
                console.error(`Error getting balance for ${chain.symbol}:`, error);
                balance = 0; // Set to 0 if there's an error
              }
            } else {
              console.log(`Invalid or native token address for ${chain.symbol}: ${tokenAddress}, setting balance to 0`);
              balance = 0;
            }
          }

          // Get current price from market
          const currentPrice = await this.getTokenPrice(chain.symbol);
          console.log(`${chain.symbol} current price: $${currentPrice}`);
          
          // Calculate dollar value
          const dollarValue = balance * currentPrice;
          console.log(`${chain.symbol} calculation: ${balance} tokens × $${currentPrice} = $${dollarValue.toFixed(2)}`);
          
          // Format balance for display
          const formattedBalance = this.formatTokenBalance(balance);
          const formattedDollarValue = this.formatDollarValue(dollarValue);
          console.log(`${chain.symbol} formatted: Balance=${formattedBalance}, Dollar Value=${formattedDollarValue}`);

          const tokenData: TokenData = {
            id: chain.orderno,
            tokenLogo: String(chain.tokenImage), // Convert to string to ensure it's a URL
            tokenName: chain.tokenName,
            tokenSymbol: chain.symbol,
            tokenPrice: formattedBalance,
            dollarPrice: formattedDollarValue,
            balance: balance,
            currentPrice: currentPrice,
            // Original chain data
            symbol: chain.symbol,
            decimals: chain.decimals,
            chainName: chain.chainName,
            rpcUrl: chain.rpcUrl,
            rpcUrlname: chain.rpcUrlname,
            isEvm: chain.isEvm,
            orderno: chain.orderno,
            isactive: chain.isactive,
            type: chain.type,
            tokenAddress: chain.tokenAddress,
            tokenImage: chain.tokenImage,
            chainId: chain.chainId,
          };

          console.log('Final token data:', {
            ...tokenData,
            tokenLogo: chain.tokenImage // Show actual image URL from database
          });
          tokenDataArray.push(tokenData);
        } catch (error) {
          console.error(`Error fetching data for ${chain.symbol}:`, error);
          // Add token with zero balance if fetch fails
          tokenDataArray.push({
            id: chain.orderno,
            tokenLogo: String(chain.tokenImage), // Convert to string to ensure it's a URL
            tokenName: chain.tokenName,
            tokenSymbol: chain.symbol,
            tokenPrice: '0',
            dollarPrice: '$0.00',
            balance: 0,
            currentPrice: 0,
            // Original chain data
            symbol: chain.symbol,
            decimals: chain.decimals,
            chainName: chain.chainName,
            rpcUrl: chain.rpcUrl,
            rpcUrlname: chain.rpcUrlname,
            isEvm: chain.isEvm,
            orderno: chain.orderno,
            isactive: chain.isactive,
            type: chain.type,
            tokenAddress: chain.tokenAddress,
            tokenImage: chain.tokenImage,
            chainId: chain.chainId,
          });
        }
      }

      // Calculate total balance
      const totalBalance = tokenDataArray.reduce((total, token) => {
        return total + (token.balance * token.currentPrice);
      }, 0);

      console.log('Final token data array:', tokenDataArray);
      console.log('Total balance:', totalBalance);

      return { 
        tokenData: tokenDataArray.sort((a, b) => a.id - b.id), 
        totalBalance 
      };
    } catch (error) {
      console.error('Error fetching token data:', error);
      return { 
        tokenData: [], 
        totalBalance: 0, 
        error: 'Failed to fetch token data' 
      };
    }
  }
}

export default new TokenDataService();
