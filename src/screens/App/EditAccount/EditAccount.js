import { Image, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AppContainer } from '../../../components/MainContainer'
import { AppHeader } from '../../../components/AppHeader'
import { Images } from '../../../Images'
import { styles } from './styles'
import Spacer from '../../../components/Spacer'
import { hp, wp } from '../../../components/ResponsiveComponent'
import { appStyles } from '../../../utilities/appStyles'
import { EditAccountCard } from './Components'
import PoppinsText from '../../../components/PoppinsText'
import { routes } from '../../../constants/routes'

const EditAccount = (props) => {
    return (
        <AppContainer>
            <View style={styles.mainView}>
                <AppHeader leftImage={Images.backArrow} title={'Edit Account'} onPressBack={() => props?.navigation.goBack()} />
                <Spacer customHeight={hp(3)} />
                <TouchableOpacity activeOpacity={0.8} onPress={() => props?.navigation.navigate(routes.selectAvatar)} style={{ ...appStyles.rowBasic, alignSelf: 'center' }}>
                    <Image source={Images.accountImage} resizeMode='contain' style={styles.accountImage} />
                    <Image source={Images.pencilWithBlackRound1} resizeMode='contain' style={styles.pencilWithBlackRound1} />
                </TouchableOpacity>
                <Spacer customHeight={hp(3)} />
                <EditAccountCard leftText={'Account Name'} leftText1={'Account Addresses'} rightText={'Account 1'} onPressTitle={() => props?.navigation.navigate(routes.accountName)} onPressDesc={() => props?.navigation.navigate(routes.receiveAccountAddress)} />
                <Spacer />
                <TouchableOpacity activeOpacity={0.8} onPress={() => props?.navigation.navigate(routes.notifications)} style={[styles.notificationCard, appStyles.row]}>
                    <PoppinsText style={styles.notificationText}>Notifications</PoppinsText>
                    <Image source={Images.arrowRight} resizeMode='contain' style={styles.arrowRight} />
                </TouchableOpacity>

                <Spacer />
                <EditAccountCard leftText={'Show Recovery Phrase'} leftText1={'Show Private Key'} onPressTitle={() => props?.navigation.navigate(routes.showSeedPhrase)} onPressDesc={() => props?.navigation.navigate(routes.showPrivateKey)} />
            </View>
        </AppContainer>
    )
}

export default EditAccount
