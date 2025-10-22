import { StyleSheet } from 'react-native'
import { Fonts } from '../../../constants/fonts'
import { colors } from '../../../constants/colors'
import { wp } from '../../../components/ResponsiveComponent'

export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
    },
    plusWithBlackRound: {
        width: wp(14.25),
        height: wp(14.25),
        alignSelf: 'center'
    },
    title: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.SemiBold,
        color: colors.gray7,
        textAlign: 'center'
    },
    description: {
        fontSize: 12,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray6,
        textAlign: 'center'
    }
})