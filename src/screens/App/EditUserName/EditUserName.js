import { Image, Keyboard, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import { AppContainer } from '../../../components/MainContainer'
import { styles } from './styles'
import { Images } from '../../../Images'
import { appStyles } from '../../../utilities/appStyles'
import PoppinsText from '../../../components/PoppinsText'
import Spacer from '../../../components/Spacer'
import { CustomTextInput1 } from '../../../components/CustomTextInput'
import { CustomButton } from '../../../components/CustomButton'
import { hp, wp } from '../../../components/ResponsiveComponent'
import useEditUserName from './Hooks'

const EditUserName = (props) => {
    const { isBio } = useEditUserName(props)
    return (
        <AppContainer>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.mainView}>
                    <Spacer />
                    <View style={appStyles.rowBasic}>
                        <TouchableOpacity activeOpacity={0.8} onPress={() => props?.navigation.goBack()}>
                            <Image source={Images.backArrow} resizeMode='contain' style={styles.backArrow} />
                        </TouchableOpacity>
                        <PoppinsText style={styles.userName}>{isBio ? 'Edit Bio' : 'Edit Username'}</PoppinsText>
                    </View>
                    <Spacer />
                    <CustomTextInput1 placeholder={isBio ? 'Add a short bio to your profile' : '@loremipsum123'} containerStyle={styles.inputContainer} />
                </View>
            </TouchableWithoutFeedback>

            <View style={{ marginBottom: hp(4) }}>
                <CustomButton title='Save' onPress={() => { }} />
            </View>
        </AppContainer>
    )
}

export default EditUserName
