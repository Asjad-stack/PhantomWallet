import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { saveAuthSettings, loadAuthSettings, verifyPin, savePinToRedux, setupPin, logout } from '../actions/authActions';

interface AuthState {
  isAuthenticated: boolean;
  pin: string | null;
  isFaceIdEnabled: boolean;
  isWalletCreated: boolean;
  tempSeedPhrase?: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  pin: null,
  isFaceIdEnabled: false,
  isWalletCreated: false,
  tempSeedPhrase: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setPin: (state, action: PayloadAction<string>) => {
      state.pin = action.payload;
    },
    setTempSeedPhrase: (state, action: PayloadAction<string | null>) => {
      state.tempSeedPhrase = action.payload;
    },
    setFaceIdEnabled: (state, action: PayloadAction<boolean>) => {
      state.isFaceIdEnabled = action.payload;
    },
    setAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
    setWalletCreated: (state, action: PayloadAction<boolean>) => {
      state.isWalletCreated = action.payload;
    },
    resetAuth: (state) => {
      state.isAuthenticated = false;
      state.pin = null;
      state.isFaceIdEnabled = false;
      state.isWalletCreated = false;
      state.tempSeedPhrase = null;
    },
  },
  extraReducers: (builder) => {
    // Save auth settings
    builder
      .addCase(saveAuthSettings.fulfilled, (state, action) => {
        state.pin = action.payload.pin;
        state.isFaceIdEnabled = action.payload.isFaceIdEnabled;
        state.isWalletCreated = action.payload.isWalletCreated;
      });

    // Load auth settings
    builder
      .addCase(loadAuthSettings.fulfilled, (state, action) => {
        if (action.payload) {
          state.pin = action.payload.pin;
          state.isFaceIdEnabled = action.payload.isFaceIdEnabled;
          state.isWalletCreated = action.payload.isWalletCreated;
        }
      });

    // Save PIN to Redux only
    builder
      .addCase(savePinToRedux.fulfilled, (state, action) => {
        state.pin = action.payload.pin;
      });

    // Setup PIN
    builder
      .addCase(setupPin.fulfilled, (state, action) => {
        // Only update wallet created flag, PIN stays in Redux from savePinToRedux
        state.isWalletCreated = true;
      });

    // Verify PIN
    builder
      .addCase(verifyPin.fulfilled, (state, action) => {
        state.isAuthenticated = action.payload;
      });

    // Logout
    builder
      .addCase(logout.fulfilled, (state) => {
        state.isAuthenticated = false;
      });
  },
});

export const {
  setPin,
  setTempSeedPhrase,
  setFaceIdEnabled,
  setAuthenticated,
  setWalletCreated,
  resetAuth,
} = authSlice.actions;

export default authSlice.reducer;
