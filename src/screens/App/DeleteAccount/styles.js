import { StyleSheet, } from 'react-native'
import { hp, wp } from '../../../components/ResponsiveComponent'
import { Fonts } from '../../../constants/fonts'
import { colors } from '../../../constants/colors'

export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        paddingHorizontal: wp(4)
    },
    profile: {
        width: wp(20),
        height: wp(20),
        alignSelf: 'center'
    },
    accountName: {
        fontSize: 16,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.white,
        textAlign: 'center'
    },
    address: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray7,
        textAlign: 'center'
    },
    desc: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray7,
        textAlign: 'left'
    },
    authMainRoundBox: {
        height: hp(8),
        paddingHorizontal: wp(4),
        justifyContent: 'center',
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
    },
    deletedText: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray7,
        textAlign: 'left'
    },
    btnView: {
        borderRadius: 30,
        width: wp(90),
        height: wp(14),
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: colors.red,
    }
})