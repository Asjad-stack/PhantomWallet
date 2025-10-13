import { Image, ImageBackground, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MainContainer } from '../../../components/MainContainer'
import { styles } from './styles'
import { Images } from '../../../Images'
import { RowButtons } from '../../../components/RowButtons'
import PoppinsText from '../../../components/PoppinsText'
import { hp, wp } from '../../../components/ResponsiveComponent'
import Spacer from '../../../components/Spacer'
import { appStyles } from '../../../utilities/appStyles'
import useFaceIdEnable from './Hooks'
import { routes } from '../../../constants/routes'

const FaceIdEnable = (props) => {
    const { isFaceIdEnabled, setIsFaceIdEnabled, handleWalletCreation, isLoading } = useFaceIdEnable(props);

    console.log('seedPhrase from FaceIdEnable', props?.route?.params?.seedPhrase);
    
    const handleSkip = () => {
        // Create wallet with Face ID disabled
        handleWalletCreation();
    };

    const handleEnable = () => {
        // Enable Face ID then create wallet
        setIsFaceIdEnabled(true);
        setTimeout(() => {
            handleWalletCreation();
        }, 100);
    };

    return (
        <MainContainer>
            <View style={styles.mainView}>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Image source={Images.faceEnableRings} resizeMode='contain' style={styles.faceEnableRings} />
                    <ImageBackground source={Images.blurGrayRoundBox} resizeMode='contain' style={styles.blurGrayRoundBox}>
                        <View style={{ alignSelf: 'center' }}>
                            <View style={{ ...appStyles.row, width: wp(58), paddingHorizontal: wp(2) }}>
                                <Image source={Images.face} resizeMode='contain' style={styles.face} />
                                <PoppinsText style={styles.faceIdText}>Enable Face ID</PoppinsText>
                                <TouchableOpacity 
                                    activeOpacity={0.8} 
                                    onPress={() => setIsFaceIdEnabled(!isFaceIdEnabled)}
                                    disabled={isLoading}
                                >
                                    <Image source={isFaceIdEnabled ? Images.toggleOn : Images.toggleOff} resizeMode='contain' style={styles.toggleOn} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
            </View >
            <View style={{ paddingBottom: hp(3) }}>
                <PoppinsText style={styles.faceIdTitle}>Secure Access using Face ID</PoppinsText>
                <Spacer />
                <PoppinsText style={styles.faceIdDesc}>
                    {isLoading ? 'Creating wallet...' : 'Use Face ID to unlock your wallet quickly\nand securely.'}
                </PoppinsText>
                <Spacer />
                <RowButtons 
                    btn1title={isLoading ? 'Please wait...' : 'Skip'} 
                    btn2title={isLoading ? 'Creating...' : 'Enable'} 
                    onPressBtn1={handleSkip} 
                    onPressBtn2={handleEnable}
                    disabled={isLoading}
                />
            </View>
        </MainContainer >
    )
}

export default FaceIdEnable
