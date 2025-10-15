import React, { useEffect, useState } from 'react'
import { Image, ImageBackground, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { MainContainer } from '../../../components/MainContainer'
import { Images } from '../../../Images'
import Spacer from '../../../components/Spacer'
import { hp } from '../../../components/ResponsiveComponent'
import PoppinsText from '../../../components/PoppinsText'
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
            <ImageBackground source={Images.bgImage} resizeMode='contain' style={styles.congratulations}>
                <PoppinsText style={styles.desc}>@loremipsum</PoppinsText>
                <View style={{ position: 'absolute', left: 0, right: 0, bottom: hp(6.5) }}>
                    <CustomButton title="Continue" onPressBtn={() => { }} />
                </View>
            </ImageBackground>

        </MainContainer>
    )
}

export default CongratulationScreen

