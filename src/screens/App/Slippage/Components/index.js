import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { hp, wp } from '../../../../components/ResponsiveComponent'
import { colors } from '../../../../constants/colors'
import { appStyles } from '../../../../utilities/appStyles'
import { Images } from '../../../../Images'
import PoppinsText from '../../../../components/PoppinsText'
import { Fonts } from '../../../../constants/fonts'
import Spacer from '../../../../components/Spacer'

export const AutoSlippageCard = () => {
    const [isAuto, setIsAuto] = useState(false)
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={() => setIsAuto(!isAuto)} style={styles.autoSlippageCard}>
            <View style={appStyles.row}>
                <View style={appStyles.rowBasic}>
                    <Image source={Images.autoSlippageImage} resizeMode='contain' style={styles.autoSlippageImage} />
                    <PoppinsText style={styles.autoSlippageTitle}>Auto</PoppinsText>
                </View>
                <Image source={isAuto ? Images.radioCheckRound : Images.radioUnFill} resizeMode='contain' style={styles.radioBtn} />
            </View>
            <Spacer customHeight={hp(1)} />
            <PoppinsText style={styles.autoSlippageDescription}>Phantom will find the lowest slippage for a
                successful swap.</PoppinsText>
        </TouchableOpacity>
    )
}

export const CustomPercentageCard = ({ halfPercentSlipppage, setHalfPercentSlipppage, onePercentSlipppage, setOnePercentSlipppage, twoPercentSlipppage, setTwoPercentSlipppage, customPercentSlipppage, setCustomePercentSlipppage }) => {

    const handleSelect = (value, current, setter) => {
        if (current === value) {
            setter(null);
        } else {

            setHalfPercentSlipppage(null);
            setOnePercentSlipppage(null);
            setTwoPercentSlipppage(null);
            setCustomePercentSlipppage(null);

            setter(value);
        }
    };

    return (
        <View>
            <View style={styles.cardContainer}>
                <TouchableOpacity activeOpacity={0.8} onPress={() => handleSelect(0.5, halfPercentSlipppage, setHalfPercentSlipppage)}
                    style={appStyles.row}>
                    <PoppinsText style={styles.leftText}>{'0.5%'}</PoppinsText>
                    <Image source={halfPercentSlipppage == 0.5 ? Images.radioCheckRound : Images.radioUnFill} resizeMode='contain' style={styles.radioBtn} />
                </TouchableOpacity>
            </View>
            <Spacer customHeight={hp(0.2)} />
            <TouchableOpacity activeOpacity={0.8} onPress={() => handleSelect(1, onePercentSlipppage, setOnePercentSlipppage)}
                style={[appStyles.row, styles.cardContainer2]}>
                <PoppinsText style={styles.leftText}>{'1%'}</PoppinsText>
                <Image source={onePercentSlipppage === 1 ? Images.radioCheckRound : Images.radioUnFill} resizeMode='contain' style={styles.radioBtn} />

            </TouchableOpacity>
            <Spacer customHeight={hp(0.2)} />
            <TouchableOpacity activeOpacity={0.8} onPress={() => handleSelect(2, twoPercentSlipppage, setTwoPercentSlipppage)}
                style={[appStyles.row, styles.cardContainer2]}>
                <PoppinsText style={styles.leftText}>{'2%'}</PoppinsText>
                <Image source={twoPercentSlipppage === 2 ? Images.radioCheckRound : Images.radioUnFill} resizeMode='contain' style={styles.radioBtn} />
            </TouchableOpacity>
            <Spacer customHeight={hp(0.2)} />
            <TouchableOpacity activeOpacity={0.8} onPress={() => handleSelect(0.00, customPercentSlipppage, setCustomePercentSlipppage)}
                style={[appStyles.row, styles.cardContainer1]}>
                <PoppinsText style={styles.leftText}>{'Custom'}{' '}
                    <PoppinsText style={styles.customPercentText}>0.00{' '}
                        <PoppinsText style={styles.leftText}>%</PoppinsText>
                    </PoppinsText>
                </PoppinsText>
                <View style={appStyles.rowBasic}>
                    <Image source={customPercentSlipppage === 0.00 ? Images.radioCheckRound : Images.radioUnFill} resizeMode='contain' style={styles.radioBtn} />
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    // AutoSlippageCard
    autoSlippageCard: {
        padding: wp(4),
        borderRadius: 12,
        backgroundColor: colors.gray14
    },
    autoSlippageImage: {
        width: wp(5.5),
        height: wp(5.5),
        marginRight: wp(2)
    },
    autoSlippageTitle: {
        fontSize: 13,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray28
    },
    autoSlippageDescription: {
        fontSize: 12,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray115,
    },
    // CustomPercentageCard
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
    customPercentText: {
        fontSize: 13,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray116
    },
    radioBtn: {
        width: wp(4),
        height: wp(4),
    },
})