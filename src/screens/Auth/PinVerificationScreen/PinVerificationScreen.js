import React from 'react';
import { View, Image, ActivityIndicator } from 'react-native';
import { styles } from './styles';
import { MainContainer } from '../../../components/MainContainer';
import { MainHeader } from '../../../components/MainHeader';
import { Images } from '../../../Images';
import Spacer from '../../../components/Spacer';
import { hp, wp } from '../../../components/ResponsiveComponent';
import PoppinsText from '../../../components/PoppinsText';
import CustomKeyboard from '../../../components/CustomKeyBoard';
import usePinVerificationScreen from './Hooks';
import { colors } from '../../../constants/colors';
import { Fonts } from '../../../constants/fonts';

const PinVerificationScreen = (props) => {

  const {
    newPin,
    handleRemove,
    HandleKeyPress,
    error,
    isLoading,
    isFaceIdEnabled,
    handleBiometricAuth
  } = usePinVerificationScreen(props);

  return (
    <MainContainer>
      <View style={styles.mainView}>
        <Spacer customHeight={hp(6)} />
        <MainHeader title={'Welcome Back'} />
        <Spacer />
        <PoppinsText style={styles.pinTitle}>
          Enter Your PIN
        </PoppinsText>
        <Spacer customHeight={hp(1)} />
        <PoppinsText style={styles.pinDesc}>
          Enter your PIN to access your wallet.
        </PoppinsText>
        <Spacer />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          {[0, 1, 2, 3, 4, 5].map((_, index) => {
            const isFilled = newPin.length > index;
            // Always show asterisk, never show the actual digit
            const char = isFilled ? '＊' : '';

            return (
              <View
                key={index}
                style={{
                  width: wp(10),
                  height: wp(10),
                  borderRadius: wp(5),
                  marginHorizontal: wp(2),
                  borderWidth: 1,
                  borderColor: error ? colors.red : colors.white + '60',
                  backgroundColor: isFilled
                    ? colors.textInputBgColor
                    : 'transparent',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <PoppinsText
                  style={{
                    fontSize: 14,
                    fontFamily: Fonts.Poppins.Regular,
                    color: colors.white,
                    marginTop: hp(0.3),
                  }}
                >
                  {char}
                </PoppinsText>
              </View>
            );
          })}
        </View>

        {error && (
          <>
            <Spacer customHeight={hp(2)} />
            <PoppinsText style={styles.errorText}>{error}</PoppinsText>
          </>
        )}

        {isLoading && (
          <>
            <Spacer customHeight={hp(2)} />
            <ActivityIndicator size="large" color={colors.white} />
          </>
        )}

        {isFaceIdEnabled && (
          <>
            <Spacer customHeight={hp(3)} />
            <PoppinsText
              style={styles.biometricText}
              onPress={handleBiometricAuth}
            >
              Use Face ID / Touch ID
            </PoppinsText>
          </>
        )}
      </View>

      <View style={{}}>
        <Spacer />
        <CustomKeyboard
          isPinCode
          handleRemove={() => handleRemove()}
          HandleKeyPress={(text) => HandleKeyPress(text)}
        />
      </View>
    </MainContainer>
  );
};

export default PinVerificationScreen;

