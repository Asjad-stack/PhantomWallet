import { Image, Keyboard, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'
import { MainContainer } from '../../../components/MainContainer'
import { styles } from './styles'
import Spacer from '../../../components/Spacer'
import { hp } from '../../../components/ResponsiveComponent'
import { Images } from '../../../Images'
import PoppinsText from '../../../components/PoppinsText'
import { CustomTextInput5 } from '../../../components/CustomTextInput'
import { colors } from '../../../constants/colors'
import { appStyles } from '../../../utilities/appStyles'
import { CustomButton } from '../../../components/CustomButton'
import { routes } from '../../../constants/routes'

const CreateUserName = (props) => {
    const [userName, setUserName] = useState('')
    return (
        <MainContainer>
            <Spacer customHeight={hp(7)} />
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.mainView}>
                    <Image source={Images.sliderThree} resizeMode='contain' style={styles.sliderThree} />
                    <Spacer customHeight={hp(3)} />
                    <PoppinsText style={styles.title}>Create a username</PoppinsText>
                    <Spacer customHeight={hp(1)} />
                    <PoppinsText style={styles.desc}>Personalize your account with a unique name
                        Usernames can be changed later on.
                    </PoppinsText>
                    <Spacer />
                    <CustomTextInput5 value={userName} onChangeText={(text) => setUserName(text)} leftImage={Images.atTheRate} placeholder={'BlessedCosmos5082'} placeholderTextColor={colors.gray91} inputStyle={styles.inputStyle} containerStyle={styles.inputContainer} />
                    <Spacer />
                    <View style={appStyles.rowBasic}>
                        <Image source={Images.tickWithGreenHalfCircle} resizeMode='contain' style={styles.tickWithGreenHalfCircle} />
                        <PoppinsText style={styles.usernameAvailable}>Username available</PoppinsText>
                    </View>
                </View>
            </TouchableWithoutFeedback>
            <View style={{ paddingBottom: hp(4) }}>
                <CustomButton
                    title="Continue"
                    onPressBtn={() => props?.navigation.navigate(routes.congratulationScreen)}
                />
            </View>
        </MainContainer>
    )
}

export default CreateUserName
