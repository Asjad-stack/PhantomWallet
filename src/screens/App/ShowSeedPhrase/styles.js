import { StyleSheet, Text, View } from 'react-native'
import { wp } from '../../../components/ResponsiveComponent'
import { Fonts } from '../../../constants/fonts'
import { colors } from '../../../constants/colors'

export const styles = StyleSheet.create({
    mainView: {
        flex: 1
    },
    infoWithRedCircle: {
        width: wp(14.25),
        height: wp(14.25),
        alignSelf: 'center'
    },
    title: {
        fontSize: 22,
        fontFamily: Fonts.Poppins.Bold,
        color: colors.gray99,
        textAlign: 'center'
    },
    checkBox: {
        width: wp(5),
        height: wp(5),
        marginRight: wp(3),
        alignSelf: 'flex-start'
    },
    bottomText: {
        fontSize: 12,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray88,
    },
    disabledTitle: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.SemiBold,
        color: colors.gray101,
    },
    btnEnableTitle: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.SemiBold,
        color: colors.gray102,
    },
    alertView: {
        width: wp(92),
        alignSelf: 'center',
        padding: wp(4),
        alignItems: 'center',
        borderRadius: 15,
        backgroundColor: colors.orange
    },
    alertText: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.SemiBold,
        color: colors.gray103,
        textAlign: 'center'
    },
    alertDesc: {
        fontSize: 11,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray104,
        textAlign: 'center'
    }
})