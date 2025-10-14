import React from 'react';
import { MainContainer } from '../../../components/MainContainer';
import usePinScreen from './Hooks';
import { View } from 'react-native';
import { styles } from './styles';
import Spacer from '../../../components/Spacer';
import { hp } from '../../../components/ResponsiveComponent';
import { MainHeader } from '../../../components/MainHeader';
import { Images } from '../../../Images';
import PoppinsText from '../../../components/PoppinsText';
import { CustomButton } from '../../../components/CustomButton';
import { CustomTextInput } from '../../../components/CustomTextInput';
import { colors } from '../../../constants/colors';


const PinScreen = (props) => {

  const { confirm, errorTitle, newPin, setNewPin, handleRemove, HandleKeyPress } = usePinScreen(props)

  return (
    <MainContainer>
      <Spacer customHeight={hp(6)} />
      <View style={styles.mainView}>
        <MainHeader leftImage={Images.goBackArrow} centerImage={Images.slider2} onPressLeftImage={() => props?.navigation.goBack()} />
        <Spacer customHeight={hp(3)} />
        <PoppinsText style={styles.pinTitle}>Create a PIN</PoppinsText>
        <Spacer customHeight={hp(0.5)} />
        <PoppinsText style={styles.pinDesc}>This is used to secure your wallet on all your devices.
          <PoppinsText style={styles.pinDesc1}>This cannot be recovered.</PoppinsText>
        </PoppinsText>
        <Spacer />
        <CustomTextInput placeholder={'....'} value={newPin} onChangeText={(text) => setNewPin(text)} />
      </View>
      <View style={styles.btnView}>
        {errorTitle && (
          <>
            <Spacer customHeight={hp(2)} />
            <PoppinsText style={styles.errorText}>{errorTitle}</PoppinsText>
          </>
        )}
        <CustomButton
          title={'Create PIN'}
          titleStyles={styles.btnTitleStyles}
          onPressBtn={() => { }}
          disabled={newPin.length == 0} btnSyles={{
            ...styles.btnSyles,
            backgroundColor: newPin.length == 0 ? colors.lightPurple : colors.btnColor
          }}
        />

      </View>
    </MainContainer>
  );
};

export default PinScreen;


