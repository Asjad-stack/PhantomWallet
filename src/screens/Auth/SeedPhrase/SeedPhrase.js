import { Image, View, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { MainContainer } from '../../../components/MainContainer'
import { styles } from './styles'
import { AlertView, SeedPhraseCard, SeedPhraseHeader } from './Components'
import { Images } from '../../../Images'
import Spacer from '../../../components/Spacer'
import { hp } from '../../../components/ResponsiveComponent'
import PoppinsText from '../../../components/PoppinsText'
import SwipeUnlock from '../../../components/SwipeUnlock'
import useSeedPhrase from './Hooks'
import { appStyles } from '../../../utilities/appStyles'
import { copyPaste } from '../../../utilities/helperFunction'

const SeedPhrase = (props) => {
    const { showSeed, mnemonic, handleRevealSeed, isLoading } = useSeedPhrase(props)

    console.log('SeedPhrase Screen - showSeed:', showSeed, 'mnemonic length:', mnemonic?.length);

    return (
        <MainContainer>
            <Spacer customHeight={hp(6)} />
            <View style={styles.mainView}>
                <SeedPhraseHeader centerImage={Images.stepper} onPressLeftImage={() => props?.navigation.goBack()} />
                <Spacer customHeight={hp(3)} />
                <PoppinsText style={styles.recoveryPhraseText}>Recovery Phrase</PoppinsText>
                <Spacer customHeight={hp(1)} />
                <PoppinsText style={styles.recoveryPhraseDsec}>Your recovery phrase is your only backup. Write it down and keep it safe — no one can recover it for you.</PoppinsText>
                <Spacer />
                {!showSeed ?
                    <Image source={Images.blurImage} resizeMode='contain' style={styles.blurImage} />
                    :
                    <SeedPhraseCard mnemonic={mnemonic} />
                }

                <Spacer customHeight={hp(1)} />
            </View>
            <View style={{ paddingBottom: hp(3) }}>
                {!showSeed ?
                    <AlertView />
                    :
                    <>
                        <ImageBackground source={Images.simpleRoundBox} resizeMode='contain' style={styles.simpleRoundBox}>
                            <TouchableOpacity activeOpacity={0.8} onPress={() => copyPaste.copy(mnemonic.join(" "))} style={{ ...appStyles.rowBasic, alignSelf: 'center' }}>
                                <Image source={Images.copyLogo} resizeMode='contain' style={styles.copyLogo} />
                                <PoppinsText style={styles.copyText}>Copy to Clipboard</PoppinsText>
                            </TouchableOpacity>
                        </ImageBackground>
                        <Spacer customHeight={hp(1)} />
                    </>
                }
                <SwipeUnlock onUnlock={handleRevealSeed} navigation={props.navigation} seedPhrase={mnemonic} />
            </View>
        </MainContainer>
    )
}

export default SeedPhrase
