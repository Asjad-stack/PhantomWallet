import { View, Alert } from 'react-native'
import React from 'react'
import { MainContainer } from '../../../components/MainContainer'
import { styles } from './styles'
import { SeedPhraseHeader } from '../SeedPhrase/Components'
import { ConfirmRecoveryCard } from './Components'
import { Images } from '../../../Images'
import Spacer from '../../../components/Spacer'
import { hp } from '../../../components/ResponsiveComponent'
import PoppinsText from '../../../components/PoppinsText'
import { RoundLightButton } from '../../../components/RoundLightButton'
import { routes } from '../../../constants/routes'
import useConfirmSeedPhrase from './Hooks'

const ConfirmSeedPhrase = (props) => {
    const {
        seedPhrase,
        selectedIndices,
        userInputs,
        isVerificationComplete,
        handleWordInput,
        getSeedPhraseData,
        verifyWordsManually
    } = useConfirmSeedPhrase(props);

    const handleConfirmPress = () => {
        console.log('🔍 Manual verification check...');


        console.log('🔍 Manual check - userInputs:', userInputs);
        console.log('🔍 Manual check - selectedIndices:', selectedIndices);

        const allInputsFilled = selectedIndices.every(index => {
            const hasValue = userInputs[index] && userInputs[index].trim().length > 0;
            console.log(`🔍 Manual check - Index ${index}: "${userInputs[index]}" - hasValue: ${hasValue}`);
            return hasValue;
        });

        console.log('🔍 Manual check - allInputsFilled:', allInputsFilled);

        if (!allInputsFilled) {
            console.log('❌ Manual check failed - missing inputs');
            Alert.alert(
                "Incomplete",
                "Please fill in all the required words before confirming.",
                [{ text: "OK", style: "default" }]
            );
            return;
        }

        // Manual verification
        const isCorrect = verifyWordsManually();

        if (isCorrect) {
            console.log('✅ Manual verification successful, navigating to PIN screen');
            Alert.alert(
                "Success!",
                "Recovery phrase verified successfully.",
                [
                    {
                        text: "Continue",
                        onPress: () => props?.navigation.navigate(routes.pinScreen, {
                            seedPhrase: seedPhrase,
                            fromCreateWallet: true
                        })
                    }
                ]
            );
        } else {
            console.log('❌ Manual verification failed, showing error');
            Alert.alert(
                "Incorrect Words",
                "You have entered wrong words. Please check your recovery phrase and try again.",
                [
                    {
                        text: "Try Again",
                        style: "default"
                    }
                ]
            );
        }
    };

    console.log('ConfirmSeedPhrase - Selected indices:', selectedIndices);
    console.log('ConfirmSeedPhrase - User inputs:', userInputs);
    console.log('ConfirmSeedPhrase - Verification complete:', isVerificationComplete);

    return (
        <MainContainer>
            <Spacer customHeight={hp(6)} />
            <View style={styles.mainView}>
                <SeedPhraseHeader centerImage={Images.stepper1} onPressLeftImage={() => props?.navigation.goBack()} />
                <Spacer customHeight={hp(3)} />
                <PoppinsText style={styles.recoveryPhraseText}>Confirm Recovery Phrase</PoppinsText>
                <Spacer customHeight={hp(1)} />
                <PoppinsText style={styles.recoveryPhraseDsec}>
                    {selectedIndices.length > 0
                        ? `Please enter the ${selectedIndices.map(i => i + 1).join(', ')} word${selectedIndices.length > 1 ? 's' : ''} of your recovery phrase`
                        : 'Your recovery phrase is your only backup. Write it down and keep it safe — no one can recover it for you.'
                    }
                </PoppinsText>
                <Spacer customHeight={hp(2)} />
                <ConfirmRecoveryCard
                    seedPhraseData={getSeedPhraseData()}
                    onWordInput={handleWordInput}
                />
            </View>
            <View style={{ paddingBottom: hp(3) }}>
                <RoundLightButton
                    title="Confirm Recovery Phrase"
                    onPressBtn={handleConfirmPress}
                />
            </View>
        </MainContainer>
    )
}

export default ConfirmSeedPhrase
