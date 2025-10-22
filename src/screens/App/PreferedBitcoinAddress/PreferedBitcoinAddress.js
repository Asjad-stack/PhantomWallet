import { Image, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { AppContainer } from '../../../components/MainContainer'
import { Images } from '../../../Images'
import { AppHeader } from '../../../components/AppHeader'
import { styles } from './styles'
import Spacer from '../../../components/Spacer'
import { appStyles } from '../../../utilities/appStyles'
import PoppinsText from '../../../components/PoppinsText'
import { hp, wp } from '../../../components/ResponsiveComponent'

const PreferedBitcoinAddress = (props) => {
    const [nativeSegwit, setNativeSegwit] = useState(false)
    const [taproot, setTaproot] = useState(false)

    const handleNativeSegwit = () => {
        setNativeSegwit(!nativeSegwit)
    }

    const handleTaproot = () => {
        setTaproot(!taproot)
    }
    return (
        <AppContainer>
            <View style={styles.mainView}>
                <AppHeader leftImage={Images.backArrow} title={'Prefered Bitcoin Address'} onPressBack={() => props?.navigation.goBack()} />
                <Spacer />
                <View style={{ paddingHorizontal: wp(4) }}>
                    <View style={appStyles.rowBasic}>
                        <PoppinsText style={styles.enableText}>Enabled Addresses</PoppinsText>
                        <Image source={Images.infoLogo} resizeMode='contain' style={styles.infoLogo} />
                    </View>
                    <Spacer customHeight={hp(1.5)} />
                    <TouchableOpacity activeOpacity={0.8} onPress={handleNativeSegwit} style={[styles.container, appStyles.row]}>
                        <View>
                            <PoppinsText style={styles.title}>Native Segwit</PoppinsText>
                            <PoppinsText style={styles.description}>The default Bitcoin address in Phantom to ensure compatibility.</PoppinsText>
                        </View>
                        <Image source={nativeSegwit ? Images.checkBox : Images.unCheckBox} resizeMode='contain' style={styles.checkbox} />
                    </TouchableOpacity>
                    <Spacer customHeight={hp(0.2)} />
                    <TouchableOpacity activeOpacity={0.8} onPress={handleTaproot} style={[styles.container1, appStyles.row]}>
                        <View>
                            <PoppinsText style={styles.title}>Native Segwit</PoppinsText>
                            <PoppinsText style={styles.description}>The default Bitcoin address in Phantom to ensure compatibility.</PoppinsText>
                        </View>
                        <Image source={taproot ? Images.checkBox : Images.unCheckBox} resizeMode='contain' style={styles.checkbox} />
                    </TouchableOpacity>
                    <Spacer />
                    <PoppinsText style={styles.resText}>When both address types above are enabled, for certain apps
                        like Magic Eden, your Native Segwit address will be used to
                        fund purchases. Purchased assets will be received in your
                        Taproot address.</PoppinsText>
                </View>
            </View>
        </AppContainer>
    )
}

export default PreferedBitcoinAddress
