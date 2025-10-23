import { StyleSheet } from 'react-native'
import { Fonts } from '../../../constants/fonts'
import { colors } from '../../../constants/colors'
import { wp } from '../../../components/ResponsiveComponent'

export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
    },
    title: {
        fontSize: 13,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray15,
    },
    toggleBtn: {
        width: wp(4),
        height: wp(4),
    },
    container: {
        padding: wp(4),
        backgroundColor: colors.gray23,
    },
    container1: {
        padding: wp(4),
        backgroundColor: colors.gray23,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12
    },
    container2: {
        padding: wp(4),
        backgroundColor: colors.gray23,
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12
    }
})