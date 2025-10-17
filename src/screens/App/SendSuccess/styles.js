import { StyleSheet } from 'react-native'
import { wp } from '../../../components/ResponsiveComponent'
import { Fonts } from '../../../constants/fonts'
import { colors } from '../../../constants/colors'

export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        paddingHorizontal: wp(4)
    },
    tickGreenCircle: {
        width: wp(20.75),
        height: wp(20.75),
        alignSelf: 'center'
    },
    sentText: {
        fontSize: 20,
        fontFamily: Fonts.Poppins.SemiBold,
        color: colors.gray83,
        textAlign: 'center'
    },
    sentText1: {
        fontSize: 16,
        fontFamily: Fonts.Poppins.SemiBold,
        color: colors.gray19,
        textAlign: 'center'
    },
    viewTransactionText: {
        fontSize: 15,
        fontFamily: Fonts.Poppins.SemiBold,
        color: colors.lightPurple4,
        textAlign: 'center'
    }
})