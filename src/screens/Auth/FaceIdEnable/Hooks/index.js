import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Alert } from 'react-native';
import { importWallet } from '../../../../store/actions/walletActions';
import { setupPin } from '../../../../store/actions/authActions';
import { SaveFingerPrint } from '../../../../redux/actions/WalletActions';
import { routes } from '../../../../constants/routes';

const useFaceIdEnable = (props) => {
    const dispatch = useDispatch();
    const [isFaceIdEnabled, setIsFaceIdEnabled] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const seedPhrase = props?.route?.params?.seedPhrase;
    const storedPin = useSelector(state => state?.userdataReducer?.getPin);

    const handleWalletCreation = async () => {
        try {
            setIsLoading(true);
            console.log('🚀 Starting wallet creation flow...');

            if (!seedPhrase || seedPhrase.length !== 12) {
                throw new Error('Invalid seed phrase');
            }

            if (!storedPin) {
                throw new Error('PIN not found. Please set up PIN first.');
            }

            // Join seed phrase array into string
            const seedPhraseString = seedPhrase.join(' ');
            console.log('📝 Seed phrase prepared for wallet creation');

            // Create both Solana and EVM wallets from the seed phrase
            // Note: We use importWallet because we already have the seed phrase
            const result = await dispatch(importWallet(seedPhraseString)).unwrap();
            console.log('✅ Wallets created successfully');
            console.log('Solana Address:', result.address);
            console.log('EVM Address:', result.evmAddress);

            // Save PIN to database with Face ID setting
            await dispatch(setupPin({ 
                pin: storedPin, 
                isFaceIdEnabled: isFaceIdEnabled 
            })).unwrap();
            console.log('✅ PIN and settings saved');

            // Save Face ID preference to Redux
            dispatch(SaveFingerPrint(isFaceIdEnabled));

            setIsLoading(false);

            // Navigate to congratulation screen
            props?.navigation.navigate(routes.congratulationScreen);

        } catch (error) {
            setIsLoading(false);
            console.error('❌ Error creating wallet:', error);
            Alert.alert('Error', error?.message || 'Failed to create wallet. Please try again.');
        }
    };

    return {
        isFaceIdEnabled, 
        setIsFaceIdEnabled,
        handleWalletCreation,
        isLoading
    }
}

export default useFaceIdEnable
