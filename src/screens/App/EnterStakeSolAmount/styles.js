import { StyleSheet } from 'react-native'
import { wp } from '../../../components/ResponsiveComponent'
import { colors } from '../../../constants/colors'
import { Fonts } from '../../../constants/fonts'

export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
    },
    lineBreakStyle: {
        width: wp(100),
        alignSelf: 'center',
        color: colors.gray69,
    },
    inputStyle1: {
        textAlign: 'left',
        fontSize: 42,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray77,
        textAlign: 'center',
        width: wp(30),
    },
    inputContainer1: {
        width: wp(30),
        borderRadius: 0,
        borderWidth: 0,
        backgroundColor: 'transparent',
    },
    symbol: {
        fontSize: 43,
        fontFamily: Fonts.Poppins.Bold,
        color: colors.gray77,
        marginLeft: wp(5)
    },
    switchWithRound: {
        width: wp(7),
        height: wp(7),
    },
    dollarAmount: {
        fontSize: 18,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray78,
        textAlign: 'center'
    },
    stakedBgView: {
        width: wp(92),
        alignSelf: 'center',
        padding: wp(4),
        borderRadius: 12,
        backgroundColor: colors.gray23,
    },
    tokenLogo: {
        width: wp(7),
        height: wp(7),
        marginRight: wp(3),
        borderRadius: 100
    },
    stakedTitle: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.SemiBold,
        color: colors.gray36,
    },
    stakedAmount: {
        fontSize: 10,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.green15,
    },
    infoLogo: {
        width: wp(4),
        height: wp(4),
        marginLeft: wp(2),
    },
})