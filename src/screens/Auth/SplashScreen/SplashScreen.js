import React, { useEffect } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { MainContainer } from '../../../components/MainContainer';
import { colors } from '../../../constants/colors';
import { routes } from '../../../constants/routes';
import { loadAuthSettings } from '../../../store/actions/authActions';
import { SavePin, SaveFingerPrint } from '../../../redux/actions/WalletActions';
import database from '../../../services/database';
import { hp, wp } from '../../../components/ResponsiveComponent';

const SplashScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        // Check if wallet exists in SQLite
        const wallet = await database.getWallet();

        // Load authentication settings (PIN) from database
        const authSettings = await dispatch(loadAuthSettings()).unwrap();

        // If auth settings exist, also save to old Redux for compatibility
        if (authSettings && authSettings.pin) {
          dispatch(SavePin(authSettings.pin));
          dispatch(SaveFingerPrint(authSettings.isFaceIdEnabled));
        }

        // Wait for minimum splash time
        await new Promise(resolve => setTimeout(resolve, 3000));

        // Check if BOTH wallet address AND PIN exist
        if (wallet && wallet.solanaAddress && authSettings && authSettings.pin && authSettings.isWalletCreated) {
          console.log('Existing user found - wallet and PIN exist');
          // User exists with wallet and PIN, navigate to PIN verification screen
          // navigation.replace(routes.pinVerificationScreen);
          navigation.replace(routes.authStack);
        } else {
          console.log('New user - wallet or PIN missing');
          // New user, navigate to onboarding
          navigation.replace(routes.authStack);
        }
      } catch (error) {
        // No wallet or auth settings found, treat as new user
        console.log('No existing user found:', error);

        // Wait for minimum splash time
        await new Promise(resolve => setTimeout(resolve, 3000));
        navigation.replace(routes.authStack);
      }
    };

    checkAuthStatus();
  }, [navigation, dispatch]);

  return (
    <MainContainer>
      <View style={{ flex: 1, justifyContent: "center" }}>
        {/* <Image source={Images.splashScreensLogo} resizeMode='contain' style={styles.splashScreensLogo} /> */}
      </View>
    </MainContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgColor,
  },
  splashScreensLogo: {
    width: wp(100),
    height: hp(37),
    alignSelf: 'center'
  }
});

export default SplashScreen;


