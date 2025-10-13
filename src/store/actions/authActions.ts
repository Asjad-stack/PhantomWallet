import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from '../index';
import database from '../../services/database';

// Save PIN and authentication settings
export const saveAuthSettings = createAsyncThunk<
  { pin: string; isFaceIdEnabled: boolean; isWalletCreated: boolean },
  { pin: string; isFaceIdEnabled: boolean; isWalletCreated: boolean },
  { dispatch: AppDispatch; state: RootState }
>(
  'auth/saveAuthSettings',
  async ({ pin, isFaceIdEnabled, isWalletCreated }, { rejectWithValue }) => {
    try {
      // Save to database
      await database.saveAuthSettings(pin, isFaceIdEnabled, isWalletCreated);
      
      return { pin, isFaceIdEnabled, isWalletCreated };
    } catch (error) {
      console.error('Error saving auth settings:', error);
      return rejectWithValue('Failed to save authentication settings');
    }
  }
);

// Load authentication settings from database
export const loadAuthSettings = createAsyncThunk<
  { pin: string; isFaceIdEnabled: boolean; isWalletCreated: boolean } | null,
  void,
  { dispatch: AppDispatch; state: RootState }
>(
  'auth/loadAuthSettings',
  async (_, { rejectWithValue }) => {
    try {
      const settings = await database.getAuthSettings();
      return settings;
    } catch (error) {
      console.error('Error loading auth settings:', error);
      return rejectWithValue('Failed to load authentication settings');
    }
  }
);

// Verify PIN
export const verifyPin = createAsyncThunk<
  boolean,
  string,
  { dispatch: AppDispatch; state: RootState }
>(
  'auth/verifyPin',
  async (inputPin, { getState, rejectWithValue }) => {
    try {
      console.log('Verifying PIN...');
      
      // First check Redux state
      const { auth } = getState();
      
      if (auth.pin) {
        console.log('PIN found in Redux state');
        const isValid = inputPin === auth.pin;
        
        if (isValid) {
          console.log('PIN verified successfully from Redux');
          return true;
        } else {
          console.log('Invalid PIN from Redux');
          return rejectWithValue('Invalid PIN');
        }
      }
      
      // If not in Redux, check database
      console.log('PIN not in Redux, checking database...');
      const authSettings = await database.getAuthSettings();
      
      if (!authSettings || !authSettings.pin) {
        console.log('No PIN found in database');
        return rejectWithValue('No PIN set');
      }

      const isValid = inputPin === authSettings.pin;
      
      if (isValid) {
        console.log('PIN verified successfully from database');
        // Load the PIN into Redux for future use
        return true;
      } else {
        console.log('Invalid PIN from database');
        return rejectWithValue('Invalid PIN');
      }
    } catch (error) {
      console.error('Error verifying PIN:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      return rejectWithValue(`Failed to verify PIN: ${errorMessage}`);
    }
  }
);

// Save PIN to Redux only (no database)
export const savePinToRedux = createAsyncThunk<
  { pin: string },
  string,
  { dispatch: AppDispatch; state: RootState }
>(
  'auth/savePinToRedux',
  async (pin, { rejectWithValue }) => {
    try {
      // PIN is saved to Redux only, no database interaction
      return { pin };
    } catch (error) {
      console.error('Error saving PIN to Redux:', error);
      return rejectWithValue('Failed to save PIN');
    }
  }
);

// Setup PIN (for new wallet creation) - PIN saved in Redux only
export const setupPin = createAsyncThunk<
  { pin: string },
  { pin: string; isFaceIdEnabled: boolean },
  { dispatch: AppDispatch; state: RootState }
>(
  'auth/setupPin',
  async ({ pin, isFaceIdEnabled }, { rejectWithValue }) => {
    try {
      // Save PIN and wallet created flag to database for existing user verification
      await database.saveAuthSettings(pin, isFaceIdEnabled, true);
      
      return { pin };
    } catch (error) {
      console.error('Error setting up PIN:', error);
      return rejectWithValue('Failed to setup PIN');
    }
  }
);

// Logout user
export const logout = createAsyncThunk<
  void,
  void,
  { dispatch: AppDispatch; state: RootState }
>(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      // Clear authentication state
      // Note: We don't clear the database, just the Redux state
      return;
    } catch (error) {
      console.error('Error logging out:', error);
      return rejectWithValue('Failed to logout');
    }
  }
);
