import { Image, ImageBackground, View } from 'react-native'
import React, { useState } from 'react'
import { MainContainerApp } from '../../../components/MainContainer'
import PoppinsText from '../../../components/PoppinsText'
import { styles } from './styles'
import { MainHeader } from '../../../components/MainHeader'
import { Images } from '../../../Images'
import Spacer from '../../../components/Spacer'
import { hp, wp } from '../../../components/ResponsiveComponent'
import { RoundLightButton } from '../../../components/RoundLightButton'
import { SendConfirmDetailCard } from './Components'
import { appStyles } from '../../../utilities/appStyles'
import CustomModal from '../../../components/CustomModal'

const SendConfirmation = (props) => {
    const [showModal, setShowModal] = useState(false);

    const handleSendPress = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleViewSolscan = () => {
        console.log('Navigate to Solscan');
        setShowModal(false);

    };

    return (
        <MainContainerApp>
            <Spacer customHeight={hp(6)} />
            <View style={styles.mainView}>
                <MainHeader leftImage={Images.backArrow} title={'Send Confirmation'} onPressLeftImage={() => props?.navigation.goBack()} />
                <Spacer customHeight={hp(3)} />
                <View style={{ alignItems: 'center' }}>
                    <Image source={Images.solana} resizeMode='contain' style={styles.tokenLogo} />
                    <Spacer />
                    <PoppinsText style={styles.tokenAountAndSymbol}>{'100 SOL'}</PoppinsText>
                    <Spacer customHeight={hp(0.3)} />
                    <PoppinsText style={styles.dollarAmount}>{'≈ $99,75'}</PoppinsText>
                </View>
                <Spacer />
                <SendConfirmDetailCard />
                <Spacer customHeight={hp(1)} />
                <View style={{ flex: 1 }}>
                    <ImageBackground source={Images.authMainRoundBox} resizeMode='contain' style={{ ...styles.authMainRoundBox1 }}>
                        <View style={{ ...appStyles.row, paddingHorizontal: wp(3), }}>
                            <PoppinsText style={styles.networkFee}>{"Network Fee"}</PoppinsText>
                            <View style={appStyles.rowBasic}>
                                <PoppinsText style={styles.tokenAmount}>{"3.0365 SOL ($4.65)"}</PoppinsText>
                                <Image source={Images.solana} resizeMode='contain' style={styles.tokenLogo} />
                            </View>
                        </View>
                    </ImageBackground>
                </View>
            </View>
            <View style={{ paddingBottom: hp(3) }}>
                <RoundLightButton title={'Send · 100 SOL'} onPressBtn={() => handleSendPress()} />
            </View>

            <CustomModal
                logo={Images.tickWithRings}
                title={'Transaction Successful'}
                description={'Your transaction is being processed! It is currently being validated on the blockchain. This may take a few minutes.'}
                visible={showModal}
                onClose={() => handleCloseModal()}
                onViewSolscan={() => handleViewSolscan()}
            />
        </MainContainerApp>
    )
}

export default SendConfirmation
