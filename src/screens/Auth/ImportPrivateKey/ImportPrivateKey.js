import { Image, Keyboard, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import { AppContainer } from '../../../components/MainContainer'
import { styles } from './styles'
import Spacer from '../../../components/Spacer'
import { hp } from '../../../components/ResponsiveComponent'
import useImportPrivateKey from './Hooks'
import { AppHeader } from '../../../components/AppHeader'
import { Images } from '../../../Images'
import { NetworkCard, NetworkModal } from './Components'
import { CustomTextInput3, CustomTextInput4 } from '../../../components/CustomTextInput'
import { colors } from '../../../constants/colors'
import { CustomButton } from '../../../components/CustomButton'
import { routes } from '../../../constants/routes'

const ImportPrivateKey = (props) => {
    const { privateKey, setPrivateKey, name, setName, showModal, setShowModal, selectedNetwork, setSelectedNetwork } = useImportPrivateKey()
    return (
        <AppContainer>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.mainView}>
                    <AppHeader leftImage={Images.goBackArrow} title={'Import Private Key'} rightImage={Images.questionMark} onPressBack={() => props?.navigation.goBack()} />
                    <Spacer customHeight={hp(3)} />
                    <Image source={Images.arrowDownWithRound} resizeMode='contain' style={styles.arrowDownWithRound} />
                    <Spacer />
                    <NetworkCard title={'Network'} network={selectedNetwork?.title ?? 'Solana'} rightArrow={Images.arrowRight} onPress={() => setShowModal(true)} />
                    <Spacer />
                    <CustomTextInput3 placeholder={'Name'} placeholderTextColor={colors.gray33} value={name} onChangeText={(text) => setName(text)} inputStyle={styles.inputStyle} containerStyle={styles.containerStyle} />
                    <Spacer />
                    <CustomTextInput4 value={privateKey} onChangeText={(text) => setPrivateKey(text)} inputStyle={styles.inputStyle1} containerStyle={styles.containerStyle} onPressPaste={() => { }} />
                </View>
            </TouchableWithoutFeedback>

            <View style={{ paddingBottom: hp(4) }}>
                <CustomButton title={'Import'}
                    disabled={name.trim() == '' || privateKey.trim() == '' ? true : false}
                    titleStyles={name.trim() == '' || privateKey.trim() == '' ? styles.titleStyles : styles.titleStyles1}
                    onPressBtn={() => props?.navigation.navigate(routes.congratulationScreen, { isImportFlow: true })}
                />
            </View>
            <NetworkModal showModal={showModal} setShowModal={setShowModal} selectedNetwork={selectedNetwork} setSelectedNetwork={setSelectedNetwork} />
        </AppContainer>
    )
}

export default ImportPrivateKey
