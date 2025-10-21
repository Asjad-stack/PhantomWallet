import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { appStyles } from '../../../../utilities/appStyles'
import PoppinsText from '../../../../components/PoppinsText'
import Spacer from '../../../../components/Spacer'
import { hp, wp } from '../../../../components/ResponsiveComponent'
import { colors } from '../../../../constants/colors'
import { Fonts } from '../../../../constants/fonts'
import { Images } from '../../../../Images'

export const SettingsList = ({ onPressSlippage, onPressPriorityFee, onPressTip }) => {
    return (
        <View>
            <View style={styles.cardContainer}>
                <TouchableOpacity activeOpacity={0.8} onPress={onPressSlippage} style={appStyles.row}>
                    <PoppinsText style={styles.leftText}>{'Slippage'}</PoppinsText>
                    <View style={appStyles.rowBasic}>
                        <PoppinsText style={styles.rightText}>{'Auto'}</PoppinsText>
                        <Image source={Images.arrowRight} resizeMode='contain' style={styles.rightArrow} />
                    </View>
                </TouchableOpacity>
            </View>
            <Spacer customHeight={hp(0.2)} />
            <TouchableOpacity activeOpacity={0.8} onPress={onPressPriorityFee} style={[appStyles.row, styles.cardContainer2]}>
                <PoppinsText style={styles.leftText}>{'Priority Fee'}</PoppinsText>
                <View style={appStyles.rowBasic}>
                    <PoppinsText style={styles.rightText}>{'Auto'}</PoppinsText>
                    <Image source={Images.arrowRight} resizeMode='contain' style={styles.rightArrow} />
                </View>
            </TouchableOpacity>
            <Spacer customHeight={hp(0.2)} />
            <TouchableOpacity activeOpacity={0.8} onPress={onPressTip} style={[appStyles.row, styles.cardContainer1]}>
                <PoppinsText style={styles.leftText}>{'Tip'}</PoppinsText>
                <View style={appStyles.rowBasic}>
                    <PoppinsText style={styles.rightText}>{'Auto'}</PoppinsText>
                    <Image source={Images.arrowRight} resizeMode='contain' style={styles.rightArrow} />
                </View>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    //SettingsList
    cardContainer: {
        width: wp(92),
        alignSelf: 'center',
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        backgroundColor: colors.gray23,
        padding: wp(3.5)
    },
    cardContainer1: {
        width: wp(92),
        alignSelf: 'center',
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        backgroundColor: colors.gray23,
        padding: wp(3.5)
    },
    cardContainer2: {
        width: wp(92),
        alignSelf: 'center',
        backgroundColor: colors.gray23,
        padding: wp(3.5)
    },
    title: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.SemiBold,
        color: colors.gray53
    },
    leftText: {
        fontSize: 13,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray26
    },
    rightText: {
        fontSize: 13,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray50
    },
    rightArrow: {
        width: wp(2),
        height: wp(2.5),
        marginLeft: wp(3)
    }
})