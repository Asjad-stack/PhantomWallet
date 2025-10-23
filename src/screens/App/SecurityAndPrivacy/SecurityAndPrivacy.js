import { Image, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { AppContainer } from '../../../components/MainContainer'
import { styles } from './styles'
import { AppHeader } from '../../../components/AppHeader'
import { Images } from '../../../Images'
import Spacer from '../../../components/Spacer'
import { hp } from '../../../components/ResponsiveComponent'
import { SecurityAndPrivacyCard } from './Components'
import PoppinsText from '../../../components/PoppinsText'
import { appStyles } from '../../../utilities/appStyles'
import { routes } from '../../../constants/routes'

const SecurityAndPrivacy = (props) => {
    const [showWalletShortcuts, setShowWalletShortcuts] = useState(false)
    const [shareAnonymousAnalytics, setShareAnonymousAnalytics] = useState(false)
    const [faced, setFaceId] = useState(false)
    return (
        <AppContainer>
            <View style={styles.mainView}>
                <AppHeader title='Security & Privacy' leftImage={Images.backArrow} onPressBack={() => props?.navigation.goBack()} />
                <Spacer customHeight={hp(3)} />
                <View style={styles.cardContainer}>
                    <SecurityAndPrivacyCard
                        title='Use Face ID Authentication'
                        toggle={faced ? Images.toggleOn : Images.toggleOff}
                        onPressToggle={() => setFaceId(!faced)}
                    />
                </View>
                <Spacer customHeight={hp(0.2)} />
                <View style={styles.cardContainer1}>
                    <SecurityAndPrivacyCard
                        title='Reset PIN'
                        onPress={() => props?.navigation.navigate(routes.resetPin)}
                        rightArrow={Images.arrowRight}
                    />
                </View>
                <Spacer customHeight={hp(0.2)} />
                <View style={styles.cardContainer2}>
                    <SecurityAndPrivacyCard
                        title='Require authentication'
                        rightText='Immediately'
                        onPress={() => props?.navigation.navigate(routes.requireAuthentication)}
                    />
                </View>
                <Spacer />
                <TouchableOpacity activeOpacity={0.8} style={[styles.cardContainer3, appStyles.row]} onPress={() => props?.navigation.navigate(routes.blockedAccounts)}>
                    <PoppinsText style={styles.blockedAccountsText}>Blocked Accounts</PoppinsText>
                    <Image source={Images.arrowRight} resizeMode='contain' style={styles.arrowRight} />
                </TouchableOpacity>
                <Spacer />
                <TouchableOpacity activeOpacity={0.8} style={[styles.cardContainer3, appStyles.row]} onPress={() => props?.navigation.navigate(routes.downloadAppLogs)}>
                    <PoppinsText style={styles.blockedAccountsText}>Download App Logs</PoppinsText>
                    <Image source={Images.arrowRight} resizeMode='contain' style={styles.arrowRight} />
                </TouchableOpacity>
                <Spacer />
                <View style={[styles.cardContainer3, appStyles.row]}>
                    <PoppinsText style={styles.blockedAccountsText}>Show Wallet Shortcuts</PoppinsText>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => setShowWalletShortcuts(!showWalletShortcuts)}>
                        <Image source={showWalletShortcuts ? Images.toggleOn : Images.toggleOff} resizeMode='contain' style={styles.toggleBtn} />
                    </TouchableOpacity>
                </View>
                <Spacer />
                <View style={[styles.cardContainer3, appStyles.row]}>
                    <PoppinsText style={styles.blockedAccountsText}>Share Anonymous Analytics</PoppinsText>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => setShareAnonymousAnalytics(!shareAnonymousAnalytics)}>
                        <Image source={shareAnonymousAnalytics ? Images.toggleOn : Images.toggleOff} resizeMode='contain' style={styles.toggleBtn} />
                    </TouchableOpacity>
                </View>
                <Spacer />
                <PoppinsText style={styles.analyticsText}>Phantom does not use your personal information for
                    analytics purposes</PoppinsText>
                <Spacer />
                <TouchableOpacity activeOpacity={0.8} style={[styles.cardContainer3, appStyles.row]} onPress={() => props?.navigation.navigate(routes.showSeedPhrase)}>
                    <PoppinsText style={styles.blockedAccountsText}>Show Recovery Phrase</PoppinsText>
                    <Image source={Images.arrowRight} resizeMode='contain' style={styles.arrowRight} />
                </TouchableOpacity>
                <Spacer />
                <TouchableOpacity activeOpacity={0.8} style={[styles.cardContainer, appStyles.row]} onPress={() => props?.navigation.navigate(routes.deleteWallet)}>
                    <PoppinsText style={styles.deleteWalletText}>Delete Wallet</PoppinsText>
                </TouchableOpacity>
                <Spacer customHeight={hp(0.2)} />
                <TouchableOpacity activeOpacity={0.8} style={[styles.cardContainer2, appStyles.row]} onPress={() => props?.navigation.navigate(routes.resetApp)}>
                    <PoppinsText style={styles.deleteWalletText}>Reset App</PoppinsText>
                </TouchableOpacity>
            </View>
        </AppContainer>
    )
}

export default SecurityAndPrivacy
