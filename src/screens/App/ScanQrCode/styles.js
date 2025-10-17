import { StyleSheet } from 'react-native'
import { hp, wp } from '../../../components/ResponsiveComponent'
import { colors } from '../../../constants/colors'
import { Fonts } from '../../../constants/fonts'

export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
    },
    title: {
        fontSize: 27,
        fontFamily: Fonts.Poppins.SemiBold,
        color: colors.gray71,
        textAlign: 'center',
    },
    desc: {
        fontSize: 13,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray72,
        textAlign: 'center',
    },
    btnStyles1: {
        width: wp(90),
        borderRadius: 12,
    },
    btnStyles2: {
        width: wp(90),
        borderRadius: 12,
        backgroundColor: colors.btnDisableColor,
    },
    btnTitleStyles1: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.SemiBold,
        textAlign: 'center',
        color: colors.gray70,
    },
    btnTitleStyles2: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.SemiBold,
        textAlign: 'center',
        color: colors.gray27,
    }

})