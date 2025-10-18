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
    },
    bgView: {
        borderRadius: 13,
        backgroundColor: colors.gray85,
        padding: wp(5),
        justifyContent: 'center'
    },
    perpImage1: {
        width: wp(11.5),
        height: wp(5.5),
        marginRight: wp(3)
    },
    learnText: {
        fontSize: 11,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray86
    },
    feedBackImage: {
        width: wp(4.5),
        height: wp(4.5),
        marginRight: wp(3)
    },
    feedBackText: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.SemiBold,
        color: colors.gray87
    },
    questionMark: {
        width: wp(4),
        height: wp(4),
        marginRight: wp(3)
    },
    issueText: {
        fontSize: 12,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray16
    },
    resText: {
        fontSize: 10,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray79
    },
    resText1: {
        fontSize: 10,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray79
    },


})