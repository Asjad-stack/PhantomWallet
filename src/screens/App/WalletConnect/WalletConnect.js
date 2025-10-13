import { Image, ImageBackground, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MainContainerApp } from '../../../components/MainContainer'
import { styles } from './styles'
import Spacer from '../../../components/Spacer'
import { hp } from '../../../components/ResponsiveComponent'
import { MainHeader } from '../../../components/MainHeader'
import { Images } from '../../../Images'
import { appStyles } from '../../../utilities/appStyles'
import PoppinsText from '../../../components/PoppinsText'
import { RoundLightButton } from '../../../components/RoundLightButton'
import { routes } from '../../../constants/routes'

const WalletConnect = (props) => {
    return (
        <MainContainerApp>
            <Spacer customHeight={hp(6)} />
            <View style={styles.mainView}>
                <MainHeader leftImage={Images.backArrow} title={'Wallet Connect'} onPressLeftImage={() => props?.navigation.goBack()} />
                <Spacer />
                <TouchableOpacity activeOpacity={0.8} onPress={() => { }}>
                    <ImageBackground source={Images.authMainRoundBox} resizeMode='contain' style={styles.authMainRoundBox}>
                        <View style={appStyles.row}>
                            <View style={appStyles.rowBasic}>
                                <Image source={Images.walletConnectWithRound} resizeMode='contain' style={styles.walletConnectWithRound} />
                                <PoppinsText style={styles.title}>{'Wallet Connect'}</PoppinsText>
                            </View>
                            <Image source={Images.radioButton} resizeMode='contain' style={styles.radioButton} />

                        </View>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
            <View style={{ paddingBottom: hp(3) }}>
                <RoundLightButton title={'Connect Wallet'} onPressBtn={() => props?.navigation.navigate(routes.pinScreen)} />
            </View>
        </MainContainerApp>
    )
}

export default WalletConnect
