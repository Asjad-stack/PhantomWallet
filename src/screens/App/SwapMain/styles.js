import { StyleSheet } from 'react-native'
import { wp } from '../../../components/ResponsiveComponent'
import { Fonts } from '../../../constants/fonts'
import { colors } from '../../../constants/colors'

export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        paddingHorizontal: wp(4)
    },
    title: {
        fontSize: 17,
        fontFamily: Fonts.Poppins.SemiBold,
        color: colors.gray84
    },
    slippage: {
        width: wp(4.5),
        height: wp(4),
    },
    swapLogo: {
        width: wp(7),
        height: wp(7),
        alignSelf: 'center',
    }
})