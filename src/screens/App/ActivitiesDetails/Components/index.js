import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import PoppinsText from '../../../../components/PoppinsText'
import { appStyles } from '../../../../utilities/appStyles'
import { Images } from '../../../../Images'
import Spacer from '../../../../components/Spacer'
import { hp, wp } from '../../../../components/ResponsiveComponent'
import { Fonts } from '../../../../constants/fonts'
import { colors } from '../../../../constants/colors'

export const ActivityDetailsCard = ({ dateText, Date, statusText, Status, fromText, From, copyLogo, netwrokText, Network, onPressCopy }) => {
    return (
        <View>
            <View style={styles.cardContainer}>
                <View style={appStyles.row}>
                    <PoppinsText style={styles.leftText}>{dateText}</PoppinsText>
                    <View style={appStyles.rowBasic}>
                        <PoppinsText style={styles.rightText}>{Date}</PoppinsText>
                    </View>
                </View>
            </View>
            <Spacer customHeight={hp(0.2)} />
            <View activeOpacity={0.8} style={[appStyles.row, styles.cardContainer2]}>
                <PoppinsText style={styles.leftText}>{statusText}</PoppinsText>
                <View style={appStyles.rowBasic}>
                    <PoppinsText style={styles.rightText}>{Status}</PoppinsText>
                </View>
            </View>
            <Spacer customHeight={hp(0.2)} />
            <View activeOpacity={0.8} style={[appStyles.row, styles.cardContainer2]}>
                <PoppinsText style={styles.leftText}>{fromText}</PoppinsText>
                <TouchableOpacity activeOpacity={0.8} onPress={onPressCopy} style={appStyles.rowBasic}>
                    <PoppinsText style={styles.rightText}>{From}</PoppinsText>
                    <Image source={copyLogo} resizeMode='contain' style={styles.copyLogo} />
                </TouchableOpacity>
            </View>
            <Spacer customHeight={hp(0.2)} />
            <View activeOpacity={0.8} style={[appStyles.row, styles.cardContainer1]}>
                <PoppinsText style={styles.leftText}>{netwrokText}</PoppinsText>
                <PoppinsText style={styles.rightText}>{Network}</PoppinsText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    // ActivityDetailsCard
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
    leftText: {
        fontSize: 13,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray27
    },
    rightText: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray53
    },
    arrowRight: {
        width: wp(3),
        height: wp(3),
        marginLeft: wp(3)
    },
    copyLogo: {
        width: wp(3),
        height: wp(3),
        marginLeft: wp(2)
    }
})