import { StyleSheet, Text, View } from 'react-native'
import { hp, wp } from '../../../components/ResponsiveComponent'
import { Fonts } from '../../../constants/fonts'
import { colors } from '../../../constants/colors'


export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        paddingHorizontal: wp(4)
    },
    tokenLogo: {
        width: wp(30),
        height: wp(30),
        alignSelf: 'center'
    },
    tokenAountAndSymbol: {
        fontSize: 40,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.white,
        textAlign: 'center'
    },
    dollarAmount: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray7,
        textAlign: 'center'
    },
    authMainRoundBox1: {
        paddingHorizontal: wp(2),
        paddingVertical: hp(3),
        borderRadius: 32,
    },
    networkFee: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray7,
    },
    tokenAmount: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.white,
    },
    tokenLogo: {
        width: wp(6),
        height: wp(6),
        marginLeft: wp(2)
    }
})