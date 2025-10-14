import { StyleSheet } from 'react-native'
import { hp, wp } from '../../../components/ResponsiveComponent'
import { Fonts } from '../../../constants/fonts'
import { colors } from '../../../constants/colors'

export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        paddingHorizontal: wp(4)
    },
    walletLogo: {
        width: wp(32.75),
        height: hp(12),
        alignSelf: 'center'
    },
    walletTitle: {
        fontSize: 22,
        fontWeight: Fonts.Poppins.SemiBold,
        color: colors.gray5,
        textAlign: 'center'
    },
    walletDesc: {
        fontSize: 14,
        fontWeight: Fonts.Poppins.Regular,
        color: colors.gray6,
        textAlign: 'center'
    },
    btnView: {
        paddingBottom: hp(4)
    },
    bottomText: {
        fontSize: 13,
        fontFamily: Fonts.Poppins.SemiBold,
        color: colors.gray9,
        textAlign: 'center'
    }
})