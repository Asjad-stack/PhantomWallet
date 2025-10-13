import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Chain } from '../../constants/chains';
import { createWallet, importWallet, loadWalletData, updateWalletBalances, fetchTokenData } from '../actions/walletActions';

interface TokenData {
  id: number;
  tokenLogo: any;
  tokenName: string;
  tokenSymbol: string;
  tokenPrice: string;
  dollarPrice: string;
  balance: number;
  currentPrice: number;
}

interface WalletState {
  wallets: Chain[];
  tokenData: TokenData[];
  isLoading: boolean;
  error: string | null;
  selectedWallet: Chain | null;
}

const initialState: WalletState = {
  wallets: [],
  tokenData: [],
  isLoading: false,
  error: null,
  selectedWallet: null,
};

const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    setWallets: (state, action: PayloadAction<Chain[]>) => {
      state.wallets = action.payload;
    },
    addWallet: (state, action: PayloadAction<Chain>) => {
      state.wallets.push(action.payload);
    },
    removeWallet: (state, action: PayloadAction<string>) => {
      state.wallets = state.wallets.filter(wallet => wallet.symbol !== action.payload);
    },
    setSelectedWallet: (state, action: PayloadAction<Chain | null>) => {
      state.selectedWallet = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
    setTokenData: (state, action: PayloadAction<TokenData[]>) => {
      state.tokenData = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Create wallet
    builder
      .addCase(createWallet.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createWallet.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        // Wallet creation success - chains will be loaded separately
      })
      .addCase(createWallet.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });

    // Import wallet
    builder
      .addCase(importWallet.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(importWallet.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(importWallet.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });

    // Load wallet data
    builder
      .addCase(loadWalletData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loadWalletData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.wallets = action.payload.chains;
        state.error = null;
      })
      .addCase(loadWalletData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });

    // Update wallet balances
    builder
      .addCase(updateWalletBalances.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateWalletBalances.fulfilled, (state, action) => {
        state.isLoading = false;
        state.wallets = action.payload;
        state.error = null;
      })
      .addCase(updateWalletBalances.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });

    // Fetch token data
    builder
      .addCase(fetchTokenData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchTokenData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tokenData = action.payload;
        state.error = null;
      })
      .addCase(fetchTokenData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const {
  setWallets,
  addWallet,
  removeWallet,
  setSelectedWallet,
  setLoading,
  setError,
  clearError,
  setTokenData,
} = walletSlice.actions;

export default walletSlice.reducer;
