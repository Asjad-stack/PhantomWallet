import { StyleSheet } from 'react-native'
import { hp, wp } from '../../../components/ResponsiveComponent'
import { Fonts } from '../../../constants/fonts'
import { colors } from '../../../constants/colors'

export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        paddingHorizontal: wp(4)
    },
    recoveryPhraseText: {
        fontSize: 24,
        fontFamily: Fonts.Poppins.Medium,
        color: colors.white,
    },
    recoveryPhraseDsec: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray6,
    },
    blurImage: {
        width: wp(92),
        height: hp(40),
        alignSelf: 'center'
    },
    simpleRoundBox: {
        width: wp(88),
        padding: wp(4)
    },
    copyLogo: {
        width: wp(6),
        height: wp(6),
        marginRight: wp(3)
    },
    copyText: {
        fontSize: 16,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.white
    }
})