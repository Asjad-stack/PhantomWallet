/**
 * CoreWallet App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import { StatusBar, ActivityIndicator, View, LogBox } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Navigation from './src/navigation/index';
import { store, persistor } from './src/redux/store';
import database from './src/services/database';

function App() {
  const [isDbReady, setIsDbReady] = useState(false);

  useEffect(() => {
    // Initialize database on app start
    LogBox.ignoreAllLogs();
    const initDb = async () => {
      try {
        await database.initDatabase();
        console.log('Database initialized successfully in App');
        setIsDbReady(true);
      } catch (error) {
        console.error('Failed to initialize database:', error);
        setIsDbReady(true); // Continue anyway to show error screen
      }
    };

    initDb();
  }, []);

  if (!isDbReady) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' }}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <SafeAreaProvider>
            <StatusBar barStyle={'light-content'} />
            <Navigation />
          </SafeAreaProvider>
        </GestureHandlerRootView>
      </PersistGate>
    </Provider>
  );
}

export default App;
