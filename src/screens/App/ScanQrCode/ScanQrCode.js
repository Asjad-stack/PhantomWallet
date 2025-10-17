import { Platform, View } from 'react-native'
import React from 'react'
import { AppContainer } from '../../../components/MainContainer'
import { styles } from './styles'
import { Images } from '../../../Images'
import { hp } from '../../../components/ResponsiveComponent'
import { CustomButton } from '../../../components/CustomButton'
import Spacer from '../../../components/Spacer'
import { AppHeader } from '../../../components/AppHeader'
import PoppinsText from '../../../components/PoppinsText'
import { routes } from '../../../constants/routes'

const ScanQrCode = (props) => {
    return (
        <AppContainer>
            <View style={styles.mainView}>
                <AppHeader leftImage={Images.cross} title={'Scan QR Code'} onPressBack={() => props?.navigation.goBack()} />
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <PoppinsText style={styles.title}>Scan QR Code</PoppinsText>
                    <Spacer customHeight={hp(1)} />
                    <PoppinsText style={styles.desc}>To scan a QR code, camera access needs to be{'\n'}enabled. Would you like to open Settings now?</PoppinsText>
                </View>
            </View>

            <View style={{ paddingBottom: Platform.OS === 'ios' ? hp(4) : hp(4) }}>
                <CustomButton title={'Continue'} titleStyles={styles.btnTitleStyles1} btnSyles={styles.btnStyles1} onPressBtn={() => props?.navigation.navigate(routes.enterSendingAmount)} />
                <Spacer customHeight={hp(1)} />
                <CustomButton title={'Open Settings'} titleStyles={styles.btnTitleStyles2} btnSyles={styles.btnStyles2} onPressBtn={() => { }} />
            </View>
        </AppContainer>
    )
}

export default ScanQrCode
