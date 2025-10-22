import { StyleSheet } from 'react-native'
import { Fonts } from '../../../constants/fonts'
import { colors } from '../../../constants/colors'
import { wp } from '../../../components/ResponsiveComponent'

export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
    },
    enableText: {
        fontSize: 13,
        fontFamily: Fonts.Poppins.SemiBold,
        color: colors.gray50
    },
    infoLogo: {
        width: wp(3.5),
        height: wp(3.5),
        marginLeft: wp(3)
    },
    container: {
        padding: wp(4),
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        backgroundColor: colors.gray23
    },
    container1: {
        padding: wp(3),
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        backgroundColor: colors.gray23
    },
    title: {
        fontSize: 13,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray72
    },
    description: {
        fontSize: 11,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray126,
        width: wp(80)
    },
    checkbox: {
        width: wp(4.5),
        height: wp(4.5)
    },
    resText: {
        fontSize: 11,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray6
    }
})