import { View, Share, Platform } from 'react-native'
import React from 'react'
import { AppContainer } from '../../../components/MainContainer'
import Spacer from '../../../components/Spacer'
import { hp } from '../../../components/ResponsiveComponent'
import { Images } from '../../../Images'
import { styles } from './styles'
import PoppinsText from '../../../components/PoppinsText'
import QRCodeStyled from 'react-native-qrcode-styled'
import { colors } from 'react-native-elements'
import { copyPaste } from '../../../utilities/helperFunction'
import { AppHeader } from '../../../components/AppHeader'
import { CustomButton } from '../../../components/CustomButton'

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
        <AppContainer>
            <AppHeader leftImage={Images.backArrow} title={'Your Solana Address'} onPressBack={() => props?.navigation.goBack()} />
            <View style={styles.mainView}>
                <View style={styles.scannerView}>
                    <View style={styles.qrview}>
                        <QRCodeStyled
                            data={'TTBJhV6Db8jl2B...P8tPkG1p5'}
                            style={{ backgroundColor: colors }}
                            // padding={Platform.OS == 'ios' ? 10 : 15}
                            pieceSize={6}
                        />
                    </View>
                    <Spacer height={hp(1)} />
                    <Spacer />
                    <PoppinsText style={styles.resText}>Your Solana Address</PoppinsText>
                    <Spacer customHeight={hp(1)} />
                    <PoppinsText style={styles.resText}>Use this address to receive tokens and collectibles on Solana.</PoppinsText>
                </View>
            </View>

            <View style={{ paddingBottom: Platform.OS == 'ios' ? hp(5) : hp(3) }}>
                <CustomButton title={'EXrsze...Q8P4ok'} rightImage={Images.copy} titleStyles={styles.titleStyles} btnSyles={styles.customeBtn1} onPressBtn={() => copyPaste.copy('TTBJhV6Db8jl2B...P8tPkG1p5')} />
                <Spacer customHeight={hp(1)} />
                <CustomButton title={'Share'} onPressBtn={() => shareAddress()} />
            </View>
        </AppContainer>
    )
}

export default TokenAddress
