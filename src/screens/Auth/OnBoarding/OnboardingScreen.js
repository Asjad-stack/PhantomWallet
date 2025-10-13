import React from 'react';
import { View, Image } from 'react-native';
import PoppinsText from '../../../components/PoppinsText';
import { MainContainer } from '../../../components/MainContainer';
import { styles } from './styles';
import { Images } from '../../../Images';
import Spacer from '../../../components/Spacer';
import { hp } from '../../../components/ResponsiveComponent';
import { routes } from '../../../constants/routes';
import { RoundLightButton } from '../../../components/RoundLightButton';
import { RoundDarkButton } from '../../../components/RoundDarkButton';

const OnboardingScreen = (props) => {
  return (
    <MainContainer>
      <View style={styles.mainView}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Image source={Images.walletSetup} resizeMode='contain' style={styles.walletSetup} />
          <PoppinsText style={styles.setUpText}>Set up your wallet</PoppinsText>
          <Spacer customHeight={hp(1)} />
          <PoppinsText style={styles.startedDesc}>To get started, create a new{"\n"} wallet or import an existing one.</PoppinsText>
        </View>
      </View>
      <View style={styles.btnView}>
        <RoundLightButton title="Import using Seed Phrase" onPressBtn={() => props?.navigation.navigate(routes.importWallet)} />
        <Spacer customHeight={hp(1)} />
        <RoundDarkButton title="Create a New Wallet" onPressBtn={() => props?.navigation.navigate(routes.seedPhrase)} />
      </View>
    </MainContainer>
  );
};

export default OnboardingScreen;


