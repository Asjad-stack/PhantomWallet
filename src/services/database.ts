import SQLite from 'react-native-sqlite-storage';
import { Chain } from '../constants/chains';

// Enable promise
SQLite.enablePromise(true);

interface WalletData {
  id: number;
  solanaAddress: string;
  evmAddress: string;
  seedPhrase: string;
  createdAt: string;
  updatedAt: string;
}

interface ChainData {
  id: number;
  tokenName: string;
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
  walletAddress: string;
  createdAt: string;
}

class DatabaseService {
  private db: SQLite.SQLiteDatabase | null = null;

  async initDatabase(): Promise<void> {
    try {
      this.db = await SQLite.openDatabase({
        name: 'CoreWallet.db',
        location: 'default',
      });

      await this.createTables();
      console.log('Database initialized successfully');
    } catch (error) {
      console.error('Error initializing database:', error);
      throw error;
    }
  }

  private async createTables(): Promise<void> {
    if (!this.db) throw new Error('Database not initialized');

    // Create wallets table
    await this.db.executeSql(`
      CREATE TABLE IF NOT EXISTS wallets (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        solanaAddress TEXT UNIQUE NOT NULL,
        evmAddress TEXT UNIQUE NOT NULL,
        seedPhrase TEXT NOT NULL,
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
        updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
      );
    `);

    // Create chains table
    await this.db.executeSql(`
      CREATE TABLE IF NOT EXISTS chains (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        tokenName TEXT NOT NULL,
        symbol TEXT NOT NULL,
        decimals INTEGER NOT NULL,
        chainName TEXT NOT NULL,
        rpcUrl TEXT NOT NULL,
        rpcUrlname TEXT NOT NULL,
        isEvm INTEGER NOT NULL,
        orderno INTEGER NOT NULL,
        isactive INTEGER NOT NULL,
        type TEXT NOT NULL,
        tokenAddress TEXT NOT NULL,
        tokenImage TEXT NOT NULL,
        chainId INTEGER NOT NULL,
        walletAddress TEXT NOT NULL,
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (walletAddress) REFERENCES wallets (address)
      );
    `);

    // Create auth_settings table
    await this.db.executeSql(`
      CREATE TABLE IF NOT EXISTS auth_settings (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        pin TEXT NOT NULL,
        isFaceIdEnabled INTEGER DEFAULT 0,
        isWalletCreated INTEGER DEFAULT 0,
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
        updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
      );
    `);
  }

  // Wallet operations
  async saveWallet(solanaAddress: string, evmAddress: string, seedPhrase: string): Promise<void> {
    if (!this.db) throw new Error('Database not initialized');

    await this.db.executeSql(
      'INSERT OR REPLACE INTO wallets (solanaAddress, evmAddress, seedPhrase, updatedAt) VALUES (?, ?, ?, CURRENT_TIMESTAMP)',
      [solanaAddress, evmAddress, seedPhrase]
    );
  }

  async getWallet(address?: string): Promise<WalletData | null> {
    if (!this.db) throw new Error('Database not initialized');

    let query = 'SELECT * FROM wallets';
    let params: string[] = [];

    if (address) {
      query += ' WHERE solanaAddress = ? OR evmAddress = ?';
      params.push(address, address);
    }

    query += ' ORDER BY createdAt DESC LIMIT 1';

    const [results] = await this.db.executeSql(query, params);

    if (results.rows.length > 0) {
      return results.rows.item(0);
    }

    return null;
  }

  // Chain operations
  async saveChains(chains: Chain[], solanaAddress: string, evmAddress: string): Promise<void> {
    if (!this.db) throw new Error('Database not initialized');

    // First, remove existing chains for both wallets
    await this.db.executeSql(
      'DELETE FROM chains WHERE walletAddress = ? OR walletAddress = ?',
      [solanaAddress, evmAddress]
    );

    // Insert new chains with appropriate wallet address
    for (const chain of chains) {
      // Use Solana address for Solana chains, EVM address for EVM chains
      const walletAddress = chain.isEvm === 1 ? evmAddress : solanaAddress;
      
      await this.db.executeSql(
        `INSERT INTO chains (
          tokenName, symbol, decimals, chainName, rpcUrl, rpcUrlname,
          isEvm, orderno, isactive, type, tokenAddress, tokenImage,
          chainId, walletAddress
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          chain.tokenName,
          chain.symbol,
          chain.decimals,
          chain.chainName,
          chain.rpcUrl,
          chain.rpcUrlname,
          chain.isEvm,
          chain.orderno,
          chain.isactive,
          chain.type,
          chain.tokenAddress.toString(),
          chain.tokenImage,
          chain.chainId,
          walletAddress,
        ]
      );
    }
  }

  async getChains(walletAddress?: string): Promise<ChainData[]> {
    if (!this.db) throw new Error('Database not initialized');

    let query = 'SELECT * FROM chains';
    let params: string[] = [];

    if (walletAddress) {
      // Get chains for both Solana and EVM addresses
      query += ' WHERE walletAddress = ?';
      params.push(walletAddress);
    }

    query += ' ORDER BY orderno ASC';

    const [results] = await this.db.executeSql(query, params);
    const chains: ChainData[] = [];

    for (let i = 0; i < results.rows.length; i++) {
      chains.push(results.rows.item(i));
    }

    return chains;
  }

  // Get all chains for both Solana and EVM wallets
  async getAllChains(): Promise<ChainData[]> {
    if (!this.db) throw new Error('Database not initialized');

    const [results] = await this.db.executeSql('SELECT * FROM chains ORDER BY orderno ASC');
    const chains: ChainData[] = [];

    for (let i = 0; i < results.rows.length; i++) {
      chains.push(results.rows.item(i));
    }

    return chains;
  }

  // Auth settings operations
  async saveAuthSettings(pin: string, isFaceIdEnabled: boolean, isWalletCreated: boolean): Promise<void> {
    if (!this.db) throw new Error('Database not initialized');

    // Clear existing settings
    await this.db.executeSql('DELETE FROM auth_settings');

    // Insert new settings
    await this.db.executeSql(
      'INSERT INTO auth_settings (pin, isFaceIdEnabled, isWalletCreated) VALUES (?, ?, ?)',
      [pin, isFaceIdEnabled ? 1 : 0, isWalletCreated ? 1 : 0]
    );
  }

  async getAuthSettings(): Promise<{ pin: string; isFaceIdEnabled: boolean; isWalletCreated: boolean } | null> {
    if (!this.db) throw new Error('Database not initialized');

    const [results] = await this.db.executeSql('SELECT * FROM auth_settings ORDER BY id DESC LIMIT 1');

    if (results.rows.length > 0) {
      const row = results.rows.item(0);
      return {
        pin: row.pin,
        isFaceIdEnabled: Boolean(row.isFaceIdEnabled),
        isWalletCreated: Boolean(row.isWalletCreated),
      };
    }

    return null;
  }

  // Utility methods
  async clearAllData(): Promise<void> {
    if (!this.db) throw new Error('Database not initialized');

    await this.db.executeSql('DELETE FROM chains');
    await this.db.executeSql('DELETE FROM wallets');
    await this.db.executeSql('DELETE FROM auth_settings');
  }

  async closeDatabase(): Promise<void> {
    if (this.db) {
      await this.db.close();
      this.db = null;
    }
  }

  // Debug method to check all wallets
  async getAllWallets(): Promise<WalletData[]> {
    if (!this.db) throw new Error('Database not initialized');

    const [results] = await this.db.executeSql('SELECT * FROM wallets ORDER BY createdAt DESC');
    const wallets: WalletData[] = [];

    for (let i = 0; i < results.rows.length; i++) {
      wallets.push(results.rows.item(i));
    }

    return wallets;
  }

  // Debug method to check all auth settings
  async getAllAuthSettings(): Promise<any[]> {
    if (!this.db) throw new Error('Database not initialized');

    const [results] = await this.db.executeSql('SELECT * FROM auth_settings ORDER BY createdAt DESC');
    const settings: any[] = [];

    for (let i = 0; i < results.rows.length; i++) {
      settings.push(results.rows.item(i));
    }

    return settings;
  }
}

export default new DatabaseService();
