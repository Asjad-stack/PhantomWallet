import { Keyboard, TouchableWithoutFeedback, View, } from 'react-native'
import React from 'react'
import { MainContainer } from '../../../components/MainContainer'
import { styles } from './styles'
import { Images } from '../../../Images'
import Spacer from '../../../components/Spacer'
import { hp, wp } from '../../../components/ResponsiveComponent'
import useSeedPhrase from './Hooks'
import { SeedPhraseCustomHeader, } from '../../../components/MainHeader'
import PoppinsText from '../../../components/PoppinsText'
import { CustomTextInput1 } from '../../../components/CustomTextInput'
import { CustomButton } from '../../../components/CustomButton'
import { colors } from '../../../constants/colors'
import { routes } from '../../../constants/routes'
import { AppHeader } from '../../../components/AppHeader'

const SeedPhrase = (props) => {
    const { showSeed, mnemonic, setMnemonic, isLoading, isAddAccountFlow } = useSeedPhrase(props)

    console.log('SeedPhrase Screen - showSeed:', showSeed, 'mnemonic length:', mnemonic?.length);

    return (
        <MainContainer>
            <Spacer customHeight={hp(6)} />
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.mainView}>
                    {isAddAccountFlow ?
                        <AppHeader leftImage={Images.goBackArrow} title={isAddAccountFlow ? 'Import Recovery Phrase' : 'Import Private Key'} rightImage={Images.questionMark} onPressBack={() => props?.navigation.goBack()} />
                        :
                        <SeedPhraseCustomHeader leftImage={Images.goBackArrow} centerImage={Images.slideLine1} rightText={'Next'} onPressLeftImage={() => props?.navigation.goBack()} />
                    }
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <PoppinsText style={styles.recoveryPhraseText}>Recovery Phrase</PoppinsText>
                        <Spacer customHeight={hp(1)} />
                        <PoppinsText style={styles.recoveryPhraseDsec}>Restore an existing wallet with your{"\n"}12 or 24-word recovery phrase</PoppinsText>
                        <Spacer />
                        <View style={{ alignSelf: 'center' }}>
                            <CustomTextInput1
                                placeholder='Recovery Phrase'
                                value={mnemonic}
                                onChangeText={(text) => setMnemonic(text)}
                                secureTextEntry={false}
                                editable={true}
                                containerStyle={{ width: wp(92), borderWidth: isAddAccountFlow ? 1 : 0, borderColor: colors.gray73, backgroundColor: isAddAccountFlow ? colors.gray55 : colors.bottomSheetBgColor }}
                            />
                        </View>
                        <Spacer />
                        <CustomButton
                            loading={isLoading}
                            title={isAddAccountFlow ? 'Import' : 'Import Recovery Phrase'}
                            disabled={mnemonic.length <= 0}
                            titleStyles={{ ...styles.btnTitleStyles, color: colors.gray18 }}
                            btnSyles={{
                                ...styles.btnSyles,
                                backgroundColor: mnemonic <= 0 ? colors.lightPurple : colors.btnColor
                            }}
                            onPressBtn={() => props?.navigation?.navigate(routes.importAccounts)}
                        />
                    </View>
                </View>
            </TouchableWithoutFeedback>

        </MainContainer>
    )
}

export default SeedPhrase
