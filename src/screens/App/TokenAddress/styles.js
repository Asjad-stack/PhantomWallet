import { StyleSheet, } from 'react-native'
import { wp } from '../../../components/ResponsiveComponent'
import { Fonts } from '../../../constants/fonts'
import { colors } from '../../../constants/colors'

export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        paddingHorizontal: wp(4)
    },
    tokenLogo: {
        width: wp(10),
        height: wp(10),
        margin: wp(2)
    },
    tokenSymbol: {
        fontSize: 16,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.white
    },
    tokenName: {
        fontSize: 12,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray8
    },
    resText: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray8,
        textAlign: 'center'
    },
    qrview: {
        alignSelf: 'center',
        backgroundColor: colors.white,
        // borderWidth: 2,
        // borderColor: colors.supportWhite,
    },
    scannerView: {
        width: wp(62.5),
        height: wp(62.5),
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
})