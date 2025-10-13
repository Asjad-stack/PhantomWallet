import 'react-native-get-random-values';
import { Buffer } from 'buffer';
import * as bip39 from 'bip39';
import { ethers } from 'ethers';
import { Chain } from '../constants/chains';
import { chainsArray } from '../../dummy';

interface WalletCreationResult {
  address: string;
  privateKey: string;
}

interface WalletImportResult {
  address: string;
  privateKey: string;
}

class EVMService {
  private provider: ethers.JsonRpcProvider;

  constructor() {
    // Use Ethereum mainnet as default
    this.provider = new ethers.JsonRpcProvider(
      'https://restless-wandering-paper.quiknode.pro/fb4c4ed77bcf896cb65e2f7dd33a6d2f5e41c5cd/'
    );
  }

  /**
   * Create a new EVM wallet from seed phrase (same as Solana)
   * This uses BIP39 to derive the wallet from the same seed phrase
   */
  async createWalletFromSeed(seedPhrase: string): Promise<WalletCreationResult> {
    try {
      console.log('Starting EVM wallet creation from seed...');
      
      // Validate the mnemonic
      if (!bip39.validateMnemonic(seedPhrase)) {
        throw new Error('Invalid mnemonic provided');
      }
      
      // Create wallet from mnemonic (ethers handles BIP39/BIP44 derivation)
      // Using standard Ethereum derivation path: m/44'/60'/0'/0/0
      const wallet = ethers.Wallet.fromPhrase(seedPhrase);
      
      const address = wallet.address;
      const privateKey = wallet.privateKey;

      console.log('EVM wallet created successfully:', { 
        address, 
        privateKey: privateKey.substring(0, 20) + '...' // Only show first 20 chars for security
      });

      return {
        address,
        privateKey,
      };
    } catch (error) {
      console.error('Error creating EVM wallet:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      console.error('Error details:', errorMessage);
      throw new Error(`Failed to create EVM wallet: ${errorMessage}`);
    }
  }

  /**
   * Import wallet from seed phrase using BIP39
   */
  async importWallet(seedPhrase: string): Promise<WalletImportResult> {
    try {
      console.log('Starting EVM wallet import...');
      
      // Validate the mnemonic
      if (!bip39.validateMnemonic(seedPhrase)) {
        throw new Error('Invalid mnemonic provided');
      }
      
      // Create wallet from mnemonic
      const wallet = ethers.Wallet.fromPhrase(seedPhrase);
      
      const address = wallet.address;
      const privateKey = wallet.privateKey;

      console.log('EVM wallet imported successfully:', { 
        address, 
        privateKey: privateKey.substring(0, 20) + '...' // Only show first 20 chars for security
      });

      return {
        address,
        privateKey,
      };
    } catch (error) {
      console.error('Error importing EVM wallet:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      console.error('Error details:', errorMessage);
      throw new Error(`Failed to import EVM wallet: ${errorMessage}`);
    }
  }

  /**
   * Get ETH balance for a wallet address
   */
  async getBalance(address: string): Promise<number> {
    try {
      const balance = await this.provider.getBalance(address);
      return parseFloat(ethers.formatEther(balance));
    } catch (error) {
      console.error('Error getting ETH balance:', error);
      return 0;
    }
  }

  /**
   * Get ERC20 token balance for a specific token address
   */
  async getTokenBalance(walletAddress: string, tokenAddress: string): Promise<number> {
    try {
      // ERC20 ABI for balanceOf function
      const erc20ABI = [
        'function balanceOf(address owner) view returns (uint256)',
        'function decimals() view returns (uint8)',
      ];

      const contract = new ethers.Contract(tokenAddress, erc20ABI, this.provider);
      
      const balance = await contract.balanceOf(walletAddress);
      const decimals = await contract.decimals();

      return parseFloat(ethers.formatUnits(balance, decimals));
    } catch (error) {
      console.error('Error getting token balance:', error);
      return 0;
    }
  }

  /**
   * Generate EVM chains data for the wallet
   * This uses the chains from dummy.js
   */
  async generateWalletChains(walletAddress: string): Promise<Chain[]> {
    try {
      console.log('Generating EVM wallet chains for address:', walletAddress);
      const chains: Chain[] = [];

      // Get ETH balance
      console.log('Getting ETH balance...');
      const ethBalance = await this.getBalance(walletAddress);
      console.log('ETH balance:', ethBalance);

      // Add ETH chain (main chain)
      const ethChain = chainsArray.find((chain: Chain) => chain.symbol === 'ETH' && chain.type === 'chain');
      if (ethChain) {
        chains.push(ethChain);
      }

      // Add ERC20 tokens from dummy.js
      const tokens = chainsArray.filter((chain: Chain) => chain.type === 'token');
      for (const token of tokens) {
        try {
          console.log(`Checking ${token.symbol} token balance...`);
          const tokenBalance = await this.getTokenBalance(
            walletAddress,
            token.tokenAddress.toString()
          );
          console.log(`${token.symbol} balance:`, tokenBalance);

          // Add token to chains array
          chains.push(token);
        } catch (error) {
          const errorMessage = error instanceof Error ? error.message : 'Unknown error';
          console.log(`${token.symbol} token not available on this wallet:`, errorMessage);
        }
      }

      console.log('Generated EVM chains:', chains.length);
      return chains;
    } catch (error) {
      console.error('Error generating EVM wallet chains:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      const errorStack = error instanceof Error ? error.stack : '';
      console.error('Error details:', errorMessage);
      console.error('Error stack:', errorStack);
      throw new Error(`Failed to generate EVM wallet chains: ${errorMessage}`);
    }
  }

  /**
   * Change RPC provider
   */
  setProvider(rpcUrl: string): void {
    this.provider = new ethers.JsonRpcProvider(rpcUrl);
  }
}

export default new EVMService();

