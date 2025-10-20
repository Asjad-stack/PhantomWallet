import { Image, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AppContainer } from '../../../components/MainContainer'
import { styles } from './styles'
import { AppHeader } from '../../../components/AppHeader'
import { Images } from '../../../Images'
import Spacer from '../../../components/Spacer'
import PoppinsText from '../../../components/PoppinsText'
import { hp } from '../../../components/ResponsiveComponent'
import { CustomButton } from '../../../components/CustomButton'
import { appStyles } from '../../../utilities/appStyles'
import useCopyPrivateKey from './Hooks'

const CopyPrivateKey = (props) => {
    const { isCopy, setPrivateKey, onPressCopy } = useCopyPrivateKey()
    return (
        <AppContainer>
            <View style={styles.mainView}>
                <AppHeader leftImage={Images.backArrow} title={'Your Private Key'} onPressBack={() => props?.navigation.goBack()} />
                <Spacer />
                <View style={styles.alertView}>
                    <PoppinsText style={styles.alertText}>Do not share your Private Key!</PoppinsText>
                    <Spacer customHeight={hp(1)} />
                    <PoppinsText style={styles.alertDesc}>lf someone has your Private Key they will have full control of your wallet.</PoppinsText>
                </View>
                <Spacer />
                <View style={styles.copyPrivateKeyBgView}>
                    <PoppinsText style={styles.copyPrivateKeyText}>XgqQUjM3BBerTFJCoVkKio8w8U7VivHvgTynDuV3WWh3RgK5WEMKbNx9G1234567890ASDFGHJKERTYUI</PoppinsText>
                </View>
                <Spacer />
                <TouchableOpacity onPress={() => onPressCopy()} style={{ ...appStyles.rowBasic, alignSelf: 'center' }}>
                    {isCopy ? null : <Image
                        source={Images.copy}
                        style={styles.copyimg}
                        resizeMode='contain'
                    />}
                    <PoppinsText style={styles.copyTextStyle}>{isCopy ? 'Copied' : "Copy to clipboard"}</PoppinsText>
                </TouchableOpacity>
            </View>
            <View style={{ paddingBottom: hp(4) }}>
                <CustomButton title={'Done'} onPressBtn={() => { }} />
            </View>
        </AppContainer>
    )
}

export default CopyPrivateKey
