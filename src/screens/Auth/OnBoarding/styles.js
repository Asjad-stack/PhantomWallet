import { StyleSheet, } from 'react-native'
import { hp, wp } from '../../../components/ResponsiveComponent'
import { colors } from '../../../constants/colors'
import { Fonts } from '../../../constants/fonts'

export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        paddingHorizontal: wp(4),
    },
    questionMark: {
        width: wp(4),
        height: hp(4),
        alignSelf: 'flex-end',
        marginRight: wp(4)
    },
    ethRoundWithStars: {
        width: wp(100),
        height: hp(14)
    },
    splashScreensLogo: {
        width: wp(100),
        height: hp(37),
        alignSelf: 'center'
    },
    welcomeText: {
        fontSize: 23,
        fontWeight: Fonts.Poppins.Bold,
        color: colors.white,
        textAlign: 'center',
    },
    startedDesc: {
        fontSize: 14,
        fontWeight: Fonts.Poppins.Regular,
        color: colors.gray1,
        textAlign: 'center',
    },
    slider1: {
        width: wp(14),
        height: hp(0.8),
        alignSelf: 'center'
    },
    btnView: {
        paddingHorizontal: wp(4),
        paddingBottom: hp(4)
    },
    btnSyles: {
        width: wp(92),
        height: hp(5.5),
        alignSelf: 'center',
        borderRadius: 12,
        justifyContent: 'center',
    },
    radioBtn: {
        width: wp(5),
        height: wp(5),
        marginRight: wp(2)
    },
    termsText: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray3
    },
    termsText1: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.SemiBold,
        color: colors.purple
    },
    createButton: {
        width: wp(92),
        height: hp(7),
        alignSelf: 'center'
    },
    btnTitleStyles: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.SemiBold,
        textAlign: 'center',
    },
    bottomText: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.SemiBold,
        color: colors.gray4
    }
})