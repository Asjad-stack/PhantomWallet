import { Image, ScrollView, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AppContainer } from '../../../components/MainContainer'
import { styles } from './styles'
import { appStyles } from '../../../utilities/appStyles'
import { Images } from '../../../Images'
import PoppinsText from '../../../components/PoppinsText'
import Spacer from '../../../components/Spacer'
import { CustomTextInput5 } from '../../../components/CustomTextInput'
import useAccountSettings from './Hooks'
import { AccountCard, AccountSettingCard } from './Components'
import { hp, wp } from '../../../components/ResponsiveComponent'
import { routes } from '../../../constants/routes'

const AccountSettings = (props) => {
    const { searchText, setSearchText } = useAccountSettings()
    return (
        <AppContainer>
            <View style={styles.mainView}>
                <View style={styles.container}>
                    <View style={[appStyles.row,]}>
                        <TouchableOpacity activeOpacity={0.8} onPress={() => props?.navigation.goBack()}>
                            <Image source={Images.cross} resizeMode='contain' style={styles.cross} />
                        </TouchableOpacity>
                        <PoppinsText style={styles.title}>{'Select Token'}</PoppinsText>
                        <TouchableOpacity activeOpacity={0.8}>
                            <Image resizeMode='contain' style={styles.rightImage} />
                        </TouchableOpacity>
                    </View>
                    <Spacer />
                    <CustomTextInput5 value={searchText} onChangeText={(text) => setSearchText(text)} leftImage={Images.searchWhite} placeholder={'Search tokens'} inputStyle={styles.inputStyle} containerStyle={styles.inputContainer} />
                </View>
                <Spacer />
                <ScrollView showsVerticalScrollIndicator={false} style={{ paddingHorizontal: wp(4) }}>
                    <AccountCard profile={Images.profile1} name={'@oldbanana1997'} email={'account1@gmail.com'} rightImage={Images.arrowRight} />
                    <Spacer />
                    <AccountSettingCard
                        leftImage1={Images.manageAccounts}
                        title1={'Manage Accounts'}
                        numbers={'1'}
                        leftImage2={Images.preferences}
                        title2={'Preferences'}
                        leftImage3={Images.securityLogo}
                        title3={'Security & Privacy'}
                        onPress1={() => { }}
                        onPress2={() => props?.navigation.navigate(routes.preferences)}
                        onPress3={() => { }}
                    />
                    <Spacer />
                    <AccountSettingCard
                        leftImage1={Images.worldPurple}
                        title1={'Active Networks'}
                        numbers={'1'}
                        leftImage2={Images.emoji}
                        title2={'Address Book'}
                        leftImage3={Images.triangles}
                        title3={'Connected Apps'}
                        onPress1={() => { }}
                        onPress2={() => { }}
                        onPress3={() => { }}
                    />
                    <Spacer />
                    <View style={[styles.bgView, appStyles.row]}>
                        <View style={appStyles.rowBasic}>
                            <Image source={Images.arrowWithLine} resizeMode='contain' style={styles.arrowWithLine} />
                            <PoppinsText style={styles.developerText}>{'Developer Settings'}</PoppinsText>
                        </View>
                        <Image source={Images.arrowRight} resizeMode='contain' style={styles.arrowRight} />
                    </View>
                    <Spacer />
                    <AccountSettingCard
                        leftImage1={Images.purpleQuestionMark}
                        title1={'Help & Support'}
                        title1Style={styles.helpSupportText}
                        leftImage2={Images.heartPurplle}
                        title2={'Invite your friends'}
                        leftImage3={Images.phantomLogo}
                        title3={'About Phantom'}
                        rightImage1={Images.shareWithArrow}
                        rightImage2={Images.inviteLogo}
                        onPress1={() => { }}
                        onPress2={() => { }}
                        onPress3={() => { }}
                    />
                    <Spacer customHeight={hp(5)} />
                </ScrollView>
            </View>
        </AppContainer>
    )
}

export default AccountSettings
