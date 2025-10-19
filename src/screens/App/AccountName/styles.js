import { Platform, StyleSheet } from 'react-native'
import { hp, wp } from '../../../components/ResponsiveComponent'
import { colors } from '../../../constants/colors'
import { Fonts } from '../../../constants/fonts'

export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
    },
    createAccountContainer: {
        width: wp(94),
        alignSelf: 'center',
        borderRadius: 12,
        padding: wp(4),
        backgroundColor: colors.gray23
    },
    textInputStyle: {
        backgroundColor: colors.gray23,
        width: wp(75),
        textAlign: 'left',
        paddingVertical: Platform.OS === 'ios' ? hp(1) : hp(0.8)
    },
    accountName: {
        fontSize: 13,
        fontFamily: Fonts.Poppins.SemiBold,
        color: colors.gray7
    },
    crossWithBox: {
        width: wp(4),
        height: wp(4),
    }
})