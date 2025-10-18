import { Platform, StyleSheet } from 'react-native'
import { hp, wp } from '../../../components/ResponsiveComponent'
import { colors } from '../../../constants/colors'
import { Fonts } from '../../../constants/fonts'

export const styles = StyleSheet.create({
    mainView: {
        // flex: 1,
        // paddingHorizontal: wp(4)
    },
    containerInputStyle: {
        width: wp(78),
        borderRadius: 7,
        paddingVertical: Platform.OS === 'ios' ? hp(1) : hp(0.1),
        backgroundColor: colors.gray94,
        alignSelf: 'flex-start'
    },
    inputStyle: {
        width: wp(70),
        textAlign: 'left',
        paddingHorizontal: wp(3)
    },
    cancelText: {
        fontSize: 13,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray92
    },
    listsText: {
        fontSize: 15,
        fontFamily: Fonts.Poppins.Bold,
        color: colors.gray44
    },
    seeMoreText: {
        fontSize: 12,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray20
    },
    trendingTokensText: {
        fontSize: 16,
        fontFamily: Fonts.Poppins.SemiBold,
        color: colors.gray26
    }
})