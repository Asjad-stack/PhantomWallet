import { StyleSheet } from 'react-native'
import { hp, wp } from '../../../components/ResponsiveComponent'
import { Fonts } from '../../../constants/fonts'
import { colors } from '../../../constants/colors'

export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        paddingHorizontal: wp(4)
    },
    tokenCurentPrice: {
        fontSize: 40,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.white,
        textAlign: 'center'
    },
    greenArrowUp: {
        width: wp(2.5),
        height: wp(2.5),
        marginRight: wp(2),
        marginBottom: hp(0.3)
    },
    dollarPrice: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.green
    },
    percentageRoundBox: {
        marginLeft: wp(2),
        padding: wp(4)
    },
    percentageText: {
        fontSize: 10,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.green,
        textAlign: 'center',
        marginTop: hp(0.2)
    },
    about: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.white,
    },
    desc: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray8
    },
    positionText: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.white,
    },
    authMainRoundBox: {
        width: wp(92),
        height: wp(18),
        paddingHorizontal: wp(3),
        paddingVertical: hp(2),
        borderRadius: 32,
    },
    tokenLogo: {
        width: wp(10),
        height: wp(10),
        marginRight: wp(3),
        borderRadius: 100
    },
    tokenName: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.white
    },
    tokenSymbol: {
        fontSize: 12,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray7
    },
    tokenPrice: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.white,
        textAlign: 'right'
    },
    dollarPrice: {
        fontSize: 12,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray7,
        textAlign: 'right'
    },
    infoText: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.white,
    },
    transactionsText: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.white,
    }

})