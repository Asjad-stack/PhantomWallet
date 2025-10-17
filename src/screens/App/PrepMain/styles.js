import { StyleSheet } from 'react-native'
import { wp } from '../../../components/ResponsiveComponent'
import { Fonts } from '../../../constants/fonts'
import { colors } from '../../../constants/colors'

export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        paddingHorizontal: wp(4)
    },
    backArrow: {
        width: wp(3.5),
        height: wp(3.5),
        marginRight: wp(3)
    },
    text: {
        fontSize: 17,
        fontFamily: Fonts.Poppins.SemiBold,
        color: colors.gray19
    },
    searchWhite: {
        width: wp(4.5),
        height: wp(4.5)
    },
    exploreText: {
        fontSize: 16,
        fontFamily: Fonts.Poppins.SemiBold,
        color: colors.gray38
    },
    seerMore: {
        fontSize: 12,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.lightPurple6
    },
    tokenCardView: {
        borderRadius: 13,
        backgroundColor: colors.gray23,
        padding: wp(5)
    }
})