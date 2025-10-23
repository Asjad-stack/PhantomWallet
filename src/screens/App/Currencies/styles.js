import { Platform, StyleSheet } from 'react-native'
import { hp, wp } from '../../../components/ResponsiveComponent'
import { colors } from '../../../constants/colors'
import { Fonts } from '../../../constants/fonts'

export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
    },
    container: {
        width: wp(100),
        backgroundColor: colors.gray29,
        paddingHorizontal: wp(4),
        borderBottomWidth: 0.5,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        paddingVertical: hp(1.8)
    },
    cross: {
        width: wp(3),
        height: wp(3),
    },
    title: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.SemiBold,
        color: colors.gray28,
    },
    inputStyle: {
        width: wp(72),
        alignSelf: 'center',
        textAlign: 'left',
        paddingHorizontal: wp(3),
        paddingVertical: Platform.OS === 'ios' ? hp(0.6) : 0,
    },
    inputContainer: {
        backgroundColor: colors.gray68,
    },
    languageCard: {
        width: wp(92),
        alignSelf: 'center',
        padding: wp(4),
        backgroundColor: colors.gray23
    },
    firstCard: {
        padding: wp(4),
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        backgroundColor: colors.gray23
    },
    lastCard: {
        padding: wp(4),
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        backgroundColor: colors.gray23
    },
    languageText: {
        fontSize: 13,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray60
    },
    radioBtn: {
        width: wp(4),
        height: wp(4)
    }
})