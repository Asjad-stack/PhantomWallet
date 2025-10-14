import { StyleSheet, Text, View } from 'react-native'
import { hp, wp } from '../../../components/ResponsiveComponent'
import { Fonts } from '../../../constants/fonts'
import { colors } from '../../../constants/colors'

export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        paddingHorizontal: wp(4)
    },
    pinTitle: {
        fontSize: 24,
        fontFamily: Fonts.Poppins.Medium,
        color: colors.white,
        textAlign: 'center'
    },
    pinDesc: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray6,
        textAlign: 'center'
    },
    pinDesc1: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.yellow,
        textAlign: 'center'
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
    btnTitleStyles: {
        fontSize: 13,
        fontFamily: Fonts.Poppins.SemiBold,
        color: colors.gray11,
        textAlign: 'center',
    },
    errorText: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.red,
        textAlign: 'center',
    }

})