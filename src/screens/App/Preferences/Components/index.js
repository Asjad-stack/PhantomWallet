import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { appStyles } from '../../../../utilities/appStyles'
import { Images } from '../../../../Images'
import PoppinsText from '../../../../components/PoppinsText'
import { hp, wp } from '../../../../components/ResponsiveComponent'
import Spacer from '../../../../components/Spacer'
import { colors } from '../../../../constants/colors'
import { Fonts } from '../../../../constants/fonts'

export const PreferencesCard = ({ title1, tittle2, rightText1, rightText2, onPress1, onPress2 }) => {
    return (
        <View>
            <View style={styles.cardContainer}>
                <TouchableOpacity activeOpacity={0.8} onPress={onPress1} style={appStyles.row}>
                    <PoppinsText style={[styles.leftText]}>{title1}</PoppinsText>
                    <View style={appStyles.rowBasic}>
                        <PoppinsText style={styles.rightText1}>{rightText1}</PoppinsText>
                        <Image source={Images.arrowRight} resizeMode='contain' style={styles.arrowRight} />
                    </View>
                </TouchableOpacity>
            </View>
            <Spacer customHeight={hp(0.2)} />
            <View style={styles.cardContainer1}>
                <TouchableOpacity activeOpacity={0.8} onPress={onPress2} style={appStyles.row}>
                    <PoppinsText style={[styles.leftText]}>{tittle2}</PoppinsText>
                    <View style={appStyles.rowBasic}>
                        <PoppinsText style={styles.rightText1}>{rightText2}</PoppinsText>
                        <Image source={Images.arrowRight} resizeMode='contain' style={styles.arrowRight} />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export const RowView = ({ title, rightImage, rightText, onPress }) => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={[appStyles.row, styles.rowCardBgView]}>
            <PoppinsText style={styles.leftRowText}>{title}</PoppinsText>
            <View style={appStyles.rowBasic}>
                {rightText ?
                    <PoppinsText style={styles.rightRowText}>{rightText}</PoppinsText>
                    : null}
                <Image source={rightImage} resizeMode='contain' style={styles.arrowRight} />
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
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
    leftText: {
        fontSize: 13,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray93
    },
    rightText1: {
        fontSize: 13,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray50
    },
    arrowRight: {
        width: wp(3),
        height: wp(3),
        marginLeft: wp(2)
    },
    // RowView
    rowCardBgView: {
        padding: wp(4),
        borderRadius: 12,
        backgroundColor: colors.gray23,
    },
    leftRowText: {
        fontSize: 13,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray95
    },
    rightRowText: {
        fontSize: 13,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray9
    }
})