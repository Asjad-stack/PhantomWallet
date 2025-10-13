import React from 'react';
import { View, TouchableOpacity, Image, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PoppinsText from '../../../components/PoppinsText';
import { MainContainer } from '../../../components/MainContainer';
import { MainHeader } from '../../../components/MainHeader';
import { Images } from '../../../Images';
import { styles } from './styles';
import Spacer from '../../../components/Spacer';
import { hp, wp } from '../../../components/ResponsiveComponent';
import { CustomTextInput } from '../../../components/CustomTextInput';
import { appStyles } from '../../../utilities/appStyles';
import useImportWalletScreen from './Hooks';
import { RoundLightButton } from '../../../components/RoundLightButton';
import { routes } from '../../../constants/routes';
import { colors } from '../../../constants/colors';

const ImportWalletScreen = (props) => {

  const {
    pinCreation,
    pin, setPin,
    seedPhrase,
    handleSeedPhraseChange,
    isFaceIdEnabled, setIsFaceIdEnabled,
    isTermsAccepted,
    toggleTermsAccepted,
    isPinSheetVisible, setIsPinSheetVisible,
    handleContinue,
    handlePinCreated,
    isLoading,
    isSeedPhraseVisible,
    toggleSeedPhraseVisibility
  } = useImportWalletScreen(props);

  return (
    <MainContainer>
      <View style={styles.mainView}>
        <Spacer customHeight={hp(6)} />
        <MainHeader leftImage={Images.backArrow} title={'Import From Seed'} onPressLeftImage={() => props?.navigation.goBack()} />

        <Spacer customHeight={hp(4)} />
        <View style={{ position: 'relative' }}>
          <CustomTextInput
            title={'Seed Phrase'}
            placeholder="Enter Your 12 words seed phrase"
            value={!isSeedPhraseVisible ? seedPhrase : '**********************************'}
            onChangeText={handleSeedPhraseChange}
            multiline
            numberOfLines={4}
            secureTextEntry={!isSeedPhraseVisible}
            editable={!isLoading}
          />
          <TouchableOpacity
            onPress={toggleSeedPhraseVisibility}
            style={{ position: 'absolute', right: wp(4), top: hp(5) }}
            disabled={isLoading}
          >
            <Icon
              name={!isSeedPhraseVisible ? 'eye-outline' : 'eye-off-outline'}
              size={20}
              color={colors.white}
            />
          </TouchableOpacity>
        </View>

        <Spacer />
        <ImageBackground source={Images.authMainRoundBox} resizeMode='contain' style={[styles.authMainRoundBox]}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => props?.navigation.navigate(routes.pinScreen)}
            style={{ ...appStyles.row }}
            disabled={isLoading}
          >
            <PoppinsText style={styles.pinText}>Create PIN code</PoppinsText>
            {pinCreation == true ?
              <Image source={Images.tickGreen} resizeMode='contain' style={styles.tickGreen} />
              :
              <Image source={Images.rightArrow} resizeMode='contain' style={styles.rightArrow} />
            }
          </TouchableOpacity>
        </ImageBackground>

        <Spacer />
        <ImageBackground source={Images.authMainRoundBox} resizeMode='contain' style={[styles.authMainRoundBox]}>
          <View style={{ ...appStyles.row }}>
            <PoppinsText style={styles.pinText}>Enable Face ID</PoppinsText>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setIsFaceIdEnabled(!isFaceIdEnabled)}
              disabled={isLoading}
            >
              <Image source={isFaceIdEnabled ? Images.toggleOn : Images.toggleOff} resizeMode='contain' style={styles.toggleOff} />
            </TouchableOpacity>
          </View>
        </ImageBackground>

        <Spacer />
        <TouchableOpacity
          activeOpacity={0.8}
          style={appStyles.rowBasic}
          onPress={toggleTermsAccepted}
          disabled={isLoading}
        >
          <Image source={isTermsAccepted ? Images.checkBox : Images.unCheckBox} resizeMode='contain' style={styles.checkBox} />
          <PoppinsText style={styles.pinText}>I agree to the Terms and Privacy Policy.</PoppinsText>
        </TouchableOpacity>
      </View>

      <View style={{ paddingBottom: hp(3) }}>
        <RoundLightButton
          title={"Continue"}
          onPressBtn={handleContinue}
          disabled={isLoading}
          loading={isLoading}
        />
      </View>

    </MainContainer>

  );
};

export default ImportWalletScreen;


