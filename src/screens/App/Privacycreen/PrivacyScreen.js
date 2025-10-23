import { Keyboard, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import { AppContainer } from '../../../components/MainContainer'
import { styles } from './styles'
import { AppHeader } from '../../../components/AppHeader'
import { Images } from '../../../Images'
import Spacer from '../../../components/Spacer'
import { PrivacyCard } from './Components'
import usePrivacyScreen from './Hooks'
import { CustomTextInput, CustomTextInput2, CustomTextInput3, CustomTextInput4, CustomTextInput5 } from '../../../components/CustomTextInput'
import { wp } from '../../../components/ResponsiveComponent'
import { colors } from '../../../constants/colors'

const PrivacyScreen = (props) => {

    const { isPublic, setIsPublic, isPrivate, setIsPrivate, isInvisible, setIsInvisible } = usePrivacyScreen()
    return (
        <AppContainer>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.mainView}>
                    <AppHeader leftImage={Images.backArrow} title={'Privacy'} onPressBack={() => props?.navigation.goBack()} />
                    <Spacer />
                    <PrivacyCard
                        isPublic={isPublic} setIsPublic={setIsPublic} isPrivate={isPrivate} setIsPrivate={setIsPrivate} isInvisible={isInvisible} setIsInvisible={setIsInvisible}
                        leftImage1={Images.worldPurple} leftImage2={Images.lockPurple} leftImage3={Images.eyeSlashPurple} title1={'Public'} title2={'Private'} title3={'Invisible'}
                        desc1={'Your profile and public addresses are visible and searchable by anyone'}
                        desc2={'Your profile is searchable by anyone but others must request permission to follow you'}
                        desc3={'Your profile and public addresses are hidden and undiscoverable everywhere'}
                    />
                    <Spacer />
                    <CustomTextInput5 placeholder={'Public Addresses'} leftImage={Images.seacrhUnActiveBtn} tintColor={colors.lightPurple3} inputStyle={{ width: wp(72), alignSelf: 'center', textAlign: 'left', paddingHorizontal: wp(3) }} rightImage={Images.arrowRight} />
                </View>
            </TouchableWithoutFeedback>
        </AppContainer>
    )
}

export default PrivacyScreen
