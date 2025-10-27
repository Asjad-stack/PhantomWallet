import React, { useEffect, useState } from 'react'
import { ImageBackground, Platform, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { MainContainer } from '../../../components/MainContainer'
import { Images } from '../../../Images'
import { hp } from '../../../components/ResponsiveComponent'
import PoppinsText from '../../../components/PoppinsText'
import { loadWalletData } from '../../../store/actions/walletActions'
import { routes } from '../../../constants/routes'
import { styles } from './styles'
import { CustomButton } from '../../../components/CustomButton'
import Spacer from '../../../components/Spacer'


const CongratulationScreen = (props) => {

    const previousScreenImportFlow = props?.route?.params?.isImportFlow;
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
            <View style={styles.mainView}>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <PoppinsText style={styles.title}>You're all ready!</PoppinsText>
                    <Spacer customHeight={hp(1)} />
                    <PoppinsText style={styles.desc}>You can now fully enjoy your wallet.</PoppinsText>
                </View>
            </View>
            <View style={{ paddingBottom: hp(4) }}>
                <CustomButton title={previousScreenImportFlow ? "Get Started" : "Continue"} onPressBtn={() => props?.navigation.replace(routes.appStack)} />
            </View>

        </MainContainer>
    )
}

export default CongratulationScreen

