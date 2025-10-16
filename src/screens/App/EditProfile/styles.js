import { StyleSheet } from 'react-native'
import { hp, wp } from '../../../components/ResponsiveComponent'
import { Fonts } from '../../../constants/fonts'
import { colors } from '../../../constants/colors'

export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        paddingHorizontal: wp(4)
    },
    backArrow: {
        width: wp(4),
        height: wp(4),
        marginRight: wp(3)
    },
    userName: {
        fontSize: 17,
        fontFamily: Fonts.Poppins.SemiBold,
        color: colors.gray49
    },
    profile1: {
        width: wp(14),
        height: wp(14),
        alignSelf: 'center'
    },
    userName1: {
        fontSize: 17,
        fontFamily: Fonts.Poppins.SemiBold,
        color: colors.gray49,
        textAlign: 'center'
    },
    followers: {
        fontSize: 16,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.lightPurple1,
        textAlign: 'center'
    },
    date: {
        fontSize: 16,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray50,
        textAlign: 'center'
    },
    btn1Styles: {
        width: wp(42),
        borderRadius: 9,
        backgroundColor: colors.lightPurple2,
    },
    btn2Styles: {
        width: wp(42),
        borderRadius: 9,
        backgroundColor: colors.gray51,

    },
    noActivity: {
        width: wp(17.5),
        height: wp(17.5),
        alignSelf: 'center'
    },
    noActivityText: {
        fontSize: 12,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray16,
        textAlign: 'center'
    }
})