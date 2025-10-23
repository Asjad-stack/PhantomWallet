import { Keyboard, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import { AppContainer } from '../../../components/MainContainer'
import { styles } from './styles'
import { AppHeader } from '../../../components/AppHeader'
import { Images } from '../../../Images'
import Spacer from '../../../components/Spacer'
import { hp } from '../../../components/ResponsiveComponent'
import { CustomTextInput5 } from '../../../components/CustomTextInput'
import { CustomButton } from '../../../components/CustomButton'

const CreateAccount = (props) => {
    return (
        <AppContainer>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.mainView}>
                    <AppHeader leftImage={Images.backArrow} title={'Create Account'} onPressBack={() => props?.navigation.goBack()} />
                    <Spacer customHeight={hp(3)} />
                    <CustomTextInput5 placeholder={'Account Name'} inputStyle={styles.textInputStyle} rightImage={Images.crossWithBox} rightImageStyle={styles.crossWithBox} />
                </View>
            </TouchableWithoutFeedback>

            <View style={{ paddingBottom: hp(4) }}>
                <CustomButton title={'Create'} onPressBtn={() => { }} />
            </View>
        </AppContainer>
    )
}


export default CreateAccount