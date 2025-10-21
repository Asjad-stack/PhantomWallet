import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import PoppinsText from '../../../../components/PoppinsText'
import { hp, wp } from '../../../../components/ResponsiveComponent'
import Spacer from '../../../../components/Spacer'
import { appStyles } from '../../../../utilities/appStyles'
import { Fonts } from '../../../../constants/fonts'
import { colors } from '../../../../constants/colors'
import { Images } from '../../../../Images'

export const TransactionDetailCard = () => {
    return (
        <View>
            <View style={[appStyles.row, styles.cardContainer]}>
                <View style={appStyles.rowBasic}>
                    <Image source={Images.solanaLogo} resizeMode='contain' style={styles.tokenLogo} />
                    <View>
                        <PoppinsText style={styles.title}>You Pay</PoppinsText>
                        <PoppinsText style={styles.tokenAmount}>0.00246 SOL</PoppinsText>
                    </View>
                </View>
                <PoppinsText style={styles.dollarAmount}>$0.55</PoppinsText>
            </View>
            <Spacer customHeight={hp(0.2)} />
            <View style={[appStyles.row, styles.cardContainer1]}>
                <View style={appStyles.rowBasic}>
                    <Image source={Images.solanaLogo} resizeMode='contain' style={styles.tokenLogo} />
                    <View>
                        <PoppinsText style={styles.title}>You Receive</PoppinsText>
                        <PoppinsText style={styles.tokenAmount}>0.00238 PSOL</PoppinsText>
                    </View>
                </View>
                <PoppinsText style={styles.dollarAmount}>$0.55</PoppinsText>
            </View>
        </View>
    )
}

export const TransactionDetailCardItem = ({ }) => {
    return (
        <View>
            <View style={styles.cardContainer}>
                <View style={appStyles.row}>
                    <PoppinsText style={styles.leftText}>{'Account'}</PoppinsText>
                    <PoppinsText style={styles.leftText}>{'Account 1 (EXrs...P4ok)'}</PoppinsText>
                </View>
            </View>

            <Spacer customHeight={hp(0.2)} />
            <View style={[appStyles.row, styles.cardContainer2]}>
                <PoppinsText style={styles.leftText}>{'Provider'}</PoppinsText>
                <PoppinsText style={styles.leftText}>{'Phantom Staked SOL'}</PoppinsText>
            </View>

            <Spacer customHeight={hp(0.2)} />
            <View style={[appStyles.row, styles.cardContainer2]}>
                <PoppinsText style={styles.leftText}>{'Est.APY'}</PoppinsText>
                <PoppinsText style={styles.leftText}>{'7.10%'}</PoppinsText>
            </View>

            <Spacer customHeight={hp(0.2)} />
            <View style={[appStyles.row, styles.cardContainer1]}>
                <PoppinsText style={styles.leftText}>{'Network Fee'}</PoppinsText>
                <PoppinsText style={styles.leftText}>{'0.00841SOL'}</PoppinsText>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    // TransactionDetailCard
    tokenLogo: {
        width: wp(7),
        height: wp(7),
        marginRight: wp(3)
    },
    title: {
        fontSize: 13,
        fontFamily: Fonts.Poppins.SemiBold,
        color: colors.gray120
    },
    tokenAmount: {
        fontSize: 18,
        fontFamily: Fonts.Poppins.Bold,
        color: colors.gray5
    },
    dollarAmount: {
        fontSize: 12,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray6,
        textAlign: 'right'
    },
    // TransactionDetailCardItem
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
})