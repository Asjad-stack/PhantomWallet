import { Platform, StyleSheet } from 'react-native'
import { hp, wp } from '../../../components/ResponsiveComponent'
import { Fonts } from '../../../constants/fonts'
import { colors } from '../../../constants/colors'

export const styles = StyleSheet.create({
    mainView: {
        // flex: 1,
        paddingHorizontal: wp(4)
    },
    accountWithRoundLogo: {
        width: wp(8),
        height: wp(5.5),
    },
    containerInputStyle: {
        width: wp(69),
        borderRadius: 7,
        paddingVertical: Platform.OS === 'ios' ? hp(1) : hp(0.1),
    },
    inputStyle: {
        width: wp(60),
        textAlign: 'left',
        paddingHorizontal: wp(3)
    },
    plusWithSquareBox: {
        width: wp(4.5),
        height: wp(4.5)
    },
    trendingTokensView: {
        borderRadius: 13,
        backgroundColor: colors.gray23,
        padding: wp(5)
    },
    trendingTokensText: {
        fontSize: 17,
        fontFamily: Fonts.Poppins.SemiBold,
        color: colors.gray65,
    },
    seeMoreText: {
        fontSize: 12,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.lightPurple7,
    }
})