import { Image, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MainContainerApp } from '../../../components/MainContainer'
import Spacer from '../../../components/Spacer'
import { hp } from '../../../components/ResponsiveComponent'
import { styles } from './styles'
import { Images } from '../../../Images'
import PoppinsText from '../../../components/PoppinsText'
import { CustomButton } from '../../../components/CustomButton'
import { colors } from '../../../constants/colors'

const SendSuccess = () => {
    return (
        <MainContainerApp>
            <Spacer customHeight={hp(6)} />
            <View style={styles.mainView}>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Image source={Images.tickGreenCircle} resizeMode='contain' style={styles.tickGreenCircle} />
                    <Spacer customHeight={hp(1)} />
                    <PoppinsText style={styles.sentText}>{'Sent'}</PoppinsText>
                    <Spacer customHeight={hp(0.5)} />
                    <PoppinsText style={styles.sentText1}>{'0.011030096 SOL was successfully sent to EXrs...P4ok'}</PoppinsText>
                    <Spacer customHeight={hp(1)} />
                    <TouchableOpacity activeOpacity={0.8} onPress={() => { }}>
                        <PoppinsText style={styles.viewTransactionText}>{'View transaction'}</PoppinsText>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ paddingBottom: hp(4) }}>
                <CustomButton title={'Close'} titleStyles={{ color: colors.gray84 }} btnSyles={{ backgroundColor: colors.btnDisableColor }} onPressBtn={() => { }} />
            </View>
        </MainContainerApp>
    )
}

export default SendSuccess
