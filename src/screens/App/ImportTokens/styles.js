import { StyleSheet, Text, View } from 'react-native'
import { hp, wp } from '../../../components/ResponsiveComponent'
import { Fonts, fonts } from '../../../constants/fonts'
import { colors } from '../../../constants/colors'

export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        paddingHorizontal: wp(4)
    },
    authMainRoundBox: {
        height: hp(8),
        paddingHorizontal: wp(4),
        justifyContent: 'center',
    },
    inputStyle1: {
        paddingVertical: hp(2),
        alignSelf: 'center'
    },
    networkText: {
        fontSize: 12,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray8
    },
    solanaText: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.white
    },
    inputStyle: {
        // backgroundColor: 'red',
        marginBottom: hp(1),
        paddingHorizontal: wp(0)
    },
    alertTriangle: {
        width: wp(6),
        height: wp(6),
        marginRight: wp(2)
    },
    alertText: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.red,
        width: wp(70)
    },
})