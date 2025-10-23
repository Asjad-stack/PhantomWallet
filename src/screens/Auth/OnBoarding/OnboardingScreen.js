import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import PoppinsText from '../../../components/PoppinsText';
import { MainContainer } from '../../../components/MainContainer';
import { styles } from './styles';
import { Images } from '../../../Images';
import Spacer from '../../../components/Spacer';
import { hp } from '../../../components/ResponsiveComponent';
import { routes } from '../../../constants/routes';
import { CustomButton } from '../../../components/CustomButton';
import { appStyles } from '../../../utilities/appStyles';
import useOnBoarding from './Hooks';
import { colors } from '../../../constants/colors';

const OnboardingScreen = (props) => {
  const { isTermsAccepted, setIsTermsAccepted } = useOnBoarding();
  return (
    <MainContainer>
      <View style={styles.mainView}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Image source={Images.questionMark} resizeMode='contain' style={styles.questionMark} />
          <Image source={Images.ethRoundWithStars} resizeMode='contain' style={styles.ethRoundWithStars} />
          <Image source={Images.splashScreensLogo} resizeMode='contain' style={styles.splashScreensLogo} />
          <Spacer customHeight={hp(3)} />
          <PoppinsText style={styles.welcomeText}>Welcome to Phantom</PoppinsText>
          <Spacer customHeight={hp(1)} />
          <PoppinsText style={styles.startedDesc}>To get started, create a new wallet or import an{"\n"}existing one.</PoppinsText>
          <Spacer />
          <Image source={Images.slider1} resizeMode='contain' style={styles.slider1} />
        </View>
      </View>
      <View style={styles.btnView}>
        <TouchableOpacity activeOpacity={0.8} style={{ ...appStyles.rowBasic, alignSelf: 'center' }} onPress={() => setIsTermsAccepted(!isTermsAccepted)}>
          <Image source={isTermsAccepted ? Images.radioCheckRound : Images.radioUnFill} resizeMode='contain' style={styles.radioBtn} />
          <PoppinsText style={styles.termsText}>I agree to the{' '}
            <PoppinsText style={styles.termsText1}>Terms and Privacy Policy.</PoppinsText>
          </PoppinsText>
        </TouchableOpacity>
        <Spacer />
        <CustomButton
          title="Create a new wallet"
          disabled={isTermsAccepted == false}
          titleStyles={{ ...styles.btnTitleStyles, color: isTermsAccepted == false ? colors.white : colors.gray2 }}
          btnSyles={{ ...styles.btnSyles }}
          onPressBtn={() => props?.navigation.navigate(routes.createWallet)}
        />
        <Spacer />
        <TouchableOpacity activeOpacity={0.8} style={{ alignSelf: 'center' }} onPress={() => props?.navigation.navigate(routes.createWallet, { isImportFlow: true })}>
          <PoppinsText style={styles.bottomText}>I already have a wallet</PoppinsText>
        </TouchableOpacity>
      </View>
    </MainContainer>
  );
};

export default OnboardingScreen;


