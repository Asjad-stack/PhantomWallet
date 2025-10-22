import { StyleSheet } from 'react-native'
import { wp } from '../../../components/ResponsiveComponent'
import { colors } from '../../../constants/colors'
import { Fonts } from '../../../constants/fonts'

export const styles = StyleSheet.create({
    mainView: {
        flex: 1
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
    container2: {
        padding: wp(3),
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
})