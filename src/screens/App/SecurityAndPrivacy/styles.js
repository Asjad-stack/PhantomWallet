import { StyleSheet } from 'react-native'
import { wp } from '../../../components/ResponsiveComponent'
import { colors } from '../../../constants/colors'
import { Fonts } from '../../../constants/fonts'

export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
    },
    cardContainer: {
        width: wp(92),
        alignSelf: 'center',
        padding: wp(3),
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        backgroundColor: colors.gray23
    },
    cardContainer1: {
        width: wp(92),
        alignSelf: 'center',
        padding: wp(3),
        backgroundColor: colors.gray23
    },
    cardContainer2: {
        width: wp(92),
        alignSelf: 'center',
        padding: wp(3),
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        backgroundColor: colors.gray23
    },
    cardContainer3: {
        width: wp(92),
        alignSelf: 'center',
        padding: wp(4),
        borderRadius: 12,
        backgroundColor: colors.gray23
    },
    blockedAccountsText: {
        fontSize: 13,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray88
    },
    arrowRight: {
        width: wp(2),
        height: wp(3)
    },
    toggleBtn: {
        width: wp(11),
        height: wp(6.5)
    },
    analyticsText: {
        fontSize: 12,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray6,
        paddingHorizontal: wp(4)
    },
    deleteWalletText: {
        fontSize: 13,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.red2
    }
})