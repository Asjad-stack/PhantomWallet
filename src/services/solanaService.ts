import 'react-native-get-random-values';
import { Buffer } from 'buffer';
import * as bip39 from 'bip39';
import {
  Connection,
  Keypair,
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
  sendAndConfirmTransaction,
} from '@solana/web3.js';
import {
  createMint,
  createAccount,
  mintTo,
  getAccount,
  getMint,
  TOKEN_PROGRAM_ID,
  MINT_SIZE,
  getMinimumBalanceForRentExemptMint,
} from '@solana/spl-token';
import { Chain } from '../constants/chains';

interface WalletCreationResult {
  address: string;
  seedPhrase: string;
  privateKey: string;
}

interface WalletImportResult {
  address: string;
  privateKey: string;
}

class SolanaService {
  private connection: Connection;

  constructor() {
    // Use mainnet-beta to match mainnet SPL token mints configured in the app
    this.connection = new Connection('https://api.mainnet-beta.solana.com', 'confirmed');
  }

  /**
   * Create a new Solana wallet using BIP39
   */
  async createWallet(): Promise<WalletCreationResult> {
    try {
      console.log('Starting wallet creation...');
      
      // Generate a proper BIP39 mnemonic
      const seedPhrase = bip39.generateMnemonic();
      console.log('Generated BIP39 mnemonic:', seedPhrase);
      
      // Validate the mnemonic
      if (!bip39.validateMnemonic(seedPhrase)) {
        throw new Error('Invalid mnemonic generated');
      }
      
      // Convert mnemonic to seed
      const seed = await bip39.mnemonicToSeed(seedPhrase);
      console.log('Converted mnemonic to seed');
      
      // Create keypair from seed (using first 32 bytes)
      const keypair = Keypair.fromSeed(seed.slice(0, 32));
      console.log('Created keypair from seed');
      
      // Convert private key to base64 string
      const privateKey = Buffer.from(keypair.secretKey).toString('base64');
      
      const address = keypair.publicKey.toString();

      console.log('Wallet created successfully:', { 
        address, 
        seedPhrase: seedPhrase.substring(0, 20) + '...', // Only show first 20 chars for security
        privateKey: privateKey.substring(0, 20) + '...' // Only show first 20 chars for security
      });

      return {
        address,
        seedPhrase,
        privateKey,
      };
    } catch (error) {
      console.error('Error creating wallet:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      const errorStack = error instanceof Error ? error.stack : '';
      console.error('Error details:', errorMessage);
      console.error('Error stack:', errorStack);
      throw new Error(`Failed to create wallet: ${errorMessage}`);
    }
  }

  /**
   * Import wallet from seed phrase using BIP39
   */
  async importWallet(seedPhrase: string): Promise<WalletImportResult> {
    try {
      console.log('Starting wallet import...');
      
      // Validate the mnemonic
      if (!bip39.validateMnemonic(seedPhrase)) {
        throw new Error('Invalid mnemonic provided');
      }
      
      // Convert mnemonic to seed
      const seed = await bip39.mnemonicToSeed(seedPhrase);
      console.log('Converted mnemonic to seed');
      
      // Create keypair from seed (using first 32 bytes)
      const keypair = Keypair.fromSeed(seed.slice(0, 32));
      console.log('Created keypair from seed');
      
      const privateKey = Buffer.from(keypair.secretKey).toString('base64');
      const address = keypair.publicKey.toString();

      console.log('Wallet imported successfully:', { 
        address, 
        privateKey: privateKey.substring(0, 20) + '...' // Only show first 20 chars for security
      });

      return {
        address,
        privateKey,
      };
    } catch (error) {
      console.error('Error importing wallet:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      console.error('Error details:', errorMessage);
      throw new Error(`Failed to import wallet: ${errorMessage}`);
    }
  }

  /**
   * Get wallet balance
   */
  async getBalance(address: string): Promise<number> {
    try {
      const publicKey = new PublicKey(address);
      const balance = await this.connection.getBalance(publicKey);
      return balance / LAMPORTS_PER_SOL;
    } catch (error) {
      console.error('Error getting balance:', error);
      return 0;
    }
  }

  /**
   * Get token balance for a specific mint
   */
  async getTokenBalance(walletAddress: string, mintAddress: string): Promise<number> {
    try {
      const walletPublicKey = new PublicKey(walletAddress);
      const mintPublicKey = new PublicKey(mintAddress);
      
      const tokenAccounts = await this.connection.getTokenAccountsByOwner(
        walletPublicKey,
        { mint: mintPublicKey }
      );

      if (tokenAccounts.value.length === 0) {
        return 0;
      }

      const tokenAccount = tokenAccounts.value[0];
      const accountInfo = await getAccount(this.connection, tokenAccount.pubkey);
      const mintInfo = await getMint(this.connection, mintPublicKey);

      return Number(accountInfo.amount) / Math.pow(10, mintInfo.decimals);
    } catch (error) {
      console.error('Error getting token balance:', error);
      return 0;
    }
  }

  /**
   * Request airdrop for development (devnet only)
   */
  async requestAirdrop(address: string, amount: number = 1): Promise<string> {
    try {
      const publicKey = new PublicKey(address);
      const signature = await this.connection.requestAirdrop(
        publicKey,
        amount * LAMPORTS_PER_SOL
      );
      
      // Wait for confirmation
      await this.connection.confirmTransaction(signature);
      return signature;
    } catch (error) {
      console.error('Error requesting airdrop:', error);
      throw new Error('Failed to request airdrop');
    }
  }

  /**
   * Generate chains data for the wallet
   */
  async generateWalletChains(walletAddress: string): Promise<Chain[]> {
    try {
      console.log('Generating wallet chains for address:', walletAddress);
      const chains: Chain[] = [];

      // Get SOL balance
      console.log('Getting SOL balance...');
      const solBalance = await this.getBalance(walletAddress);
      console.log('SOL balance:', solBalance);

      // Add SOL chain
      chains.push({
        tokenName: "Solana",
        symbol: "SOL",
        decimals: 9,
        chainName: "Solana",
        rpcUrl: "https://api.mainnet-beta.solana.com",
        rpcUrlname: "solana-mainnet",
        isEvm: 0,
        orderno: 14,
        isactive: 1,
        type: "chain",
        tokenAddress: "0", // Changed from 0 to "0" for string consistency
        tokenImage: "https://assets.coingecko.com/coins/images/4128/standard/solana.png?1696504757",
        chainId: 101,
      });

      // Add USDT token (if available)
      try {
        console.log('Checking USDT token balance...');
        const usdtBalance = await this.getTokenBalance(
          walletAddress,
          "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB"
        );
        console.log('USDT balance:', usdtBalance);

        chains.push({
          tokenName: "Tether USD",
          symbol: "USDT",
          decimals: 6,
          chainName: "Solana",
          rpcUrl: "https://api.mainnet-beta.solana.com",
          rpcUrlname: "solana-mainnet",
          isEvm: 0,
          orderno: 15,
          isactive: 1,
          type: "token",
          tokenAddress: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
          tokenImage: "https://assets.coingecko.com/coins/images/325/standard/Tether.png?1696501661",
          chainId: 101,
        });
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        console.log('USDT token not available on this wallet:', errorMessage);
      }

      console.log('Generated chains:', chains.length);
      return chains;
    } catch (error) {
      console.error('Error generating wallet chains:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      const errorStack = error instanceof Error ? error.stack : '';
      console.error('Error details:', errorMessage);
      console.error('Error stack:', errorStack);
      throw new Error(`Failed to generate wallet chains: ${errorMessage}`);
    }
  }

}

export default new SolanaService();





