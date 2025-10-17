import { Image, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MainContainerApp } from '../../../components/MainContainer'
import { styles } from './styles'
import { Images } from '../../../Images'
import Spacer from '../../../components/Spacer'
import { hp } from '../../../components/ResponsiveComponent'
import { appStyles } from '../../../utilities/appStyles'
import PoppinsText from '../../../components/PoppinsText'
import { SummaryCard } from './Components'
import { CustomButton } from '../../../components/CustomButton'
import { routes } from '../../../constants/routes'

const SendSummaryScreen = (props) => {
    return (
        <MainContainerApp>
            <Spacer customHeight={hp(7)} />
            <View style={styles.mainView}>
                <View style={appStyles.rowBasic}>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => props?.navigation.goBack()}>
                        <Image source={Images.backArrow} resizeMode='contain' style={styles.backArrow} />
                    </TouchableOpacity>
                    <PoppinsText style={styles.title}>{'Send Summary'}</PoppinsText>
                </View>
                <Spacer customHeight={hp(4)} />
                <Image source={Images.rightPurpleArrow} resizeMode='contain' style={styles.rightPurpleArrow} />
                <Spacer />
                <PoppinsText style={styles.amount}>0.01103 S0L</PoppinsText>
                <PoppinsText style={styles.dollarAmount}>~$2.44</PoppinsText>
                <Spacer />
                <View style={[styles.alertViewBgView, appStyles.rowBasic]}>
                    <Image source={Images.alertInfoTriangle} resizeMode='contain' style={styles.alertInfoTriangle} />
                    <PoppinsText style={styles.alertText}>{'This wallet address has no balance and doesnt appear in your recent transaction history. Please ensure the address is correct.'}</PoppinsText>
                </View>
                <Spacer />
                <SummaryCard />
            </View>
            <View style={{ paddingBottom: hp(4) }}>
                <CustomButton title={'Send'} onPressBtn={() => props?.navigation.navigate(routes.sendSuccess)} />
            </View>
        </MainContainerApp>
    )
}

export default SendSummaryScreen
