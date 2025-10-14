import React, { useEffect, useState } from 'react'
import { Image, ImageBackground, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { MainContainer } from '../../../components/MainContainer'
import { Images } from '../../../Images'
import Spacer from '../../../components/Spacer'
import { hp } from '../../../components/ResponsiveComponent'
import PoppinsText from '../../../components/PoppinsText'
import { RoundLightButton } from '../../../components/RoundLightButton'
import { loadWalletData } from '../../../store/actions/walletActions'
import { routes } from '../../../constants/routes'
import { styles } from './styles'
import { CustomButton } from '../../../components/CustomButton'


const CongratulationScreen = (props) => {
    const dispatch = useDispatch();
    const [isImportFlow, setIsImportFlow] = useState(false);

    // Detect if this is import or create wallet flow
    useEffect(() => {
        // Check navigation state to determine flow type
        const navigationState = props?.navigation?.getState();
        const navigationRoutes = navigationState?.routes || [];

        // Look for ImportWalletScreen in the navigation history
        const hasImportWallet = navigationRoutes.some(route =>
            route.name === 'ImportWalletScreen' ||
            route.name === routes.importWallet
        );

        setIsImportFlow(hasImportWallet);
        console.log('🎯 Flow detection - hasImportWallet:', hasImportWallet);
    }, [props?.navigation]);

    useEffect(() => {
        dispatch(loadWalletData());
    }, [dispatch]);


    return (
        <MainContainer>
            <Spacer customHeight={hp(6)} />
            <View style={styles.mainView}>
                <ImageBackground source={Images.congratulations} resizeMode='contain' style={styles.congratulations}>


                    <PoppinsText style={styles.hiText}>Hi!</PoppinsText>
                    <PoppinsText style={styles.desc}>@loremipsum</PoppinsText>
                    <Spacer />
                    <Image source={Images.enjoyYourWallet} resizeMode='contain' style={styles.enjoyYourWallet} />
                    <Spacer />
                    <PoppinsText style={styles.enjoyYourWalletText}>You're all ready!</PoppinsText>
                    {/* <Spacer /> */}
                    <PoppinsText style={styles.enjoyYourWalletDesc}>You can now fully enjoy your wallet.</PoppinsText>


                    {/* <View style={styles.mainView}>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Image source={Images.badge} resizeMode='contain' style={styles.badge} />
                    <Spacer />
                    <PoppinsText style={styles.congratulationText}>{'Congratulations!\nYour Wallet is ' + (isImportFlow ? 'Import' : 'Created')}</PoppinsText>
                    <Spacer customHeight={hp(1)} />
                    <PoppinsText style={styles.congratulationDesc}>
                        {isImportFlow 
                            ? 'You have successfully import your wallet using seed phrase.' 
                            : 'You have successfully create your wallet.'
                        }
                    </PoppinsText>
                </View>
            </View> */}
                    <View style={{ paddingBottom: hp(3) }}>
                        <CustomButton title="Continue" onPressBtn={() => { }} />
                    </View>
                </ImageBackground>
            </View>


        </MainContainer>
    )
}

export default CongratulationScreen

