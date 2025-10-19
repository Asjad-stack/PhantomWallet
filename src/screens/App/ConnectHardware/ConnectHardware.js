import { Image, View } from 'react-native'
import React from 'react'
import { AppContainer } from '../../../components/MainContainer'
import { AppHeader } from '../../../components/AppHeader'
import { Images } from '../../../Images'
import Spacer from '../../../components/Spacer'
import { hp, wp } from '../../../components/ResponsiveComponent'
import { styles } from './styles'
import PoppinsText from '../../../components/PoppinsText'
import { WalletConnetOptions } from './Components'
import { CustomButton } from '../../../components/CustomButton'

const ConnectHardware = (props) => {
    return (
        <AppContainer>
            <View style={styles.mainView}>
                <AppHeader leftImage={Images.backArrow} title={'Connect Ledger'} rightImage={Images.questionMark} onPressBack={() => props?.navigation.goBack()} />
                <Spacer customHeight={hp(3)} />
                <Image source={Images.connectWalletLogo} resizeMode='contain' style={styles.connectWalletLogo} />
                <Spacer />
                <PoppinsText style={styles.title}>Connect your Ledger hardware wallet</PoppinsText>
                <Spacer customHeight={hp(4)} />
                <WalletConnetOptions />
            </View>
            <View style={{ paddingBottom: hp(4) }}>
                <CustomButton title={'Connect your Ledger device'} onPressBtn={() => { }} />
            </View>
        </AppContainer>
    )
}

export default ConnectHardware
