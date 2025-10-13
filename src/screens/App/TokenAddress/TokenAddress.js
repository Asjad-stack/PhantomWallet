import { View, Image, ImageBackground, Share } from 'react-native'
import React from 'react'
import { MainContainerApp } from '../../../components/MainContainer'
import Spacer from '../../../components/Spacer'
import { hp } from '../../../components/ResponsiveComponent'
import { MainHeader } from '../../../components/MainHeader'
import { Images } from '../../../Images'
import { styles } from './styles'
import { appStyles } from '../../../utilities/appStyles'
import PoppinsText from '../../../components/PoppinsText'
import { RoundLightButton } from '../../../components/RoundLightButton'
import { RoundDarkButton } from '../../../components/RoundDarkButton'
import QRCodeStyled from 'react-native-qrcode-styled'
import { colors } from 'react-native-elements'
import { copyPaste } from '../../../utilities/helperFunction'

const TokenAddress = (props) => {

    const address = 'TTBJhV6Db8jl2B...P8tPkG1p5';

    const shareAddress = async () => {
        try {
            await Share.share({
                message: `Use this address to receive tokens on Solana: ${address}`,
            });
        } catch (error) {
            console.log('Error sharing address:', error);
        }
    };

    return (
        <MainContainerApp>
            <Spacer customHeight={hp(6)} />
            <View style={styles.mainView}>
                <MainHeader leftImage={Images.backArrow} title={'SOL Address'} onPressLeftImage={() => props?.navigation.goBack()} />
                <Spacer customHeight={hp(4)} />
                <View style={{ ...appStyles.rowBasic, alignSelf: 'center' }}>
                    <Image source={Images.solana} resizeMode='contain' style={styles.tokenLogo} />
                    <View>
                        <PoppinsText style={styles.tokenSymbol}>SOL</PoppinsText>
                        <PoppinsText style={styles.tokenName}>Solana</PoppinsText>
                    </View>
                </View>
                <Spacer />

                <ImageBackground source={Images.scannerBgImage} style={styles.scannerView}>
                    <View style={styles.qrview}>

                        <QRCodeStyled
                            data={'TTBJhV6Db8jl2B...P8tPkG1p5'}
                            style={{ backgroundColor: colors }}
                            // padding={Platform.OS == 'ios' ? 10 : 15}
                            pieceSize={6}
                        />
                    </View>
                    <Spacer height={hp(1)} />
                </ImageBackground>

                <Spacer />
                <PoppinsText style={styles.resText}>Use this address to receive{"\n"}tokens on Solana</PoppinsText>
            </View>
            <View style={{ paddingBottom: hp(3) }}>
                <RoundDarkButton title={'TTBJhV6Db8jl2B...P8tPkG1p5'} copyLogo={Images.copyLogo} onPressBtn={() => copyPaste.copy('TTBJhV6Db8jl2B...P8tPkG1p5')} />
                <Spacer customHeight={hp(1)} />
                <RoundLightButton title={'Share Address'} onPressBtn={() => shareAddress()} />
            </View>
        </MainContainerApp>
    )
}

export default TokenAddress
