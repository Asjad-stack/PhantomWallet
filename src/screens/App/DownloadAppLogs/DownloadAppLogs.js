import { Image, View } from 'react-native'
import React from 'react'
import { AppContainer } from '../../../components/MainContainer'
import { styles } from './styles'
import { AppHeader } from '../../../components/AppHeader'
import { Images } from '../../../Images'
import Spacer from '../../../components/Spacer'
import PoppinsText from '../../../components/PoppinsText'
import { hp, wp } from '../../../components/ResponsiveComponent'
import { RowButtons } from '../../../components/RowButtons'
import { colors } from '../../../constants/colors'

const DownloadAppLogs = (props) => {
    return (
        <AppContainer>
            <View style={styles.mainView}>
                <AppHeader title='Download App Logs' leftImage={Images.backArrow} onPressBack={() => props?.navigation.goBack()} />
                <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: wp(4) }}>
                    <Image source={Images.colorFullArrowWithRound} resizeMode='contain' style={styles.colorFullArrowWithRound} />
                    <Spacer />
                    <PoppinsText style={styles.title}>Download App Logs</PoppinsText>
                    <Spacer customHeight={hp(1)} />
                    <PoppinsText style={styles.description}>Contains local data, crash reports and public
                        wallet addresses to help resolve Phantom Support
                        issues</PoppinsText>
                    <Spacer />
                    <View style={styles.noSensitiveDataContainer}>
                        <PoppinsText style={styles.noSensitiveDataText}>No sensitive data like seed phrases or private keys
                            are included.</PoppinsText>
                    </View>
                </View>
                <View style={{ paddingBottom: hp(4), alignSelf: 'center' }}>
                    <RowButtons
                        titleColor1={colors.gray28} titleColor2={colors.gray130}
                        style={styles.btn1Style} styleBtn={styles.btn2Style}
                        titlebtn1='Support Desk' titlebtn2='Download'
                        onPressBtn1={() => { }} onPressBtn2={() => { }}
                    />
                </View>
            </View>
        </AppContainer>
    )
}

export default DownloadAppLogs
