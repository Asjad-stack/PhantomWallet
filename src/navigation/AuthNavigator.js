import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { BiometricPopup, CongratulationScreen, ImportWalletScreen, OnboardingScreen, FaceIdEnable, PinScreen, PinVerificationScreen, SeedPhrase, SplashScreen, ConfirmSeedPhrase } from '../screens/Auth';
import { routes } from '../constants/routes';

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={routes.splashScreen}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={routes.splashScreen} component={SplashScreen} />
      <Stack.Screen name={routes.onBoarding} component={OnboardingScreen} />
      <Stack.Screen name={routes.pinScreen} component={PinScreen} />
      <Stack.Screen name={routes.pinVerificationScreen} component={PinVerificationScreen} />
      <Stack.Screen name={routes.importWallet} component={ImportWalletScreen} />
      <Stack.Screen name={routes.biometricPopup} component={BiometricPopup} />
      <Stack.Screen name={routes.congratulationScreen} component={CongratulationScreen} />
      <Stack.Screen name={routes.seedPhrase} component={SeedPhrase} />
      <Stack.Screen name={routes.confirmSeedPhrase} component={ConfirmSeedPhrase} />
      <Stack.Screen name={routes.faceIdEnable} component={FaceIdEnable} />
      {/* <Stack.Screen name={routes.MainTabs} component={BottomTabNavigator} /> */}
    </Stack.Navigator>
  );
};

export default AuthNavigator;
