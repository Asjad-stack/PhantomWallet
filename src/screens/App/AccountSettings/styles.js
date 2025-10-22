import { Platform, StyleSheet } from 'react-native'
import { hp, wp } from '../../../components/ResponsiveComponent'
import { colors } from '../../../constants/colors'
import { Fonts } from '../../../constants/fonts'

export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        // paddingHorizontal: wp(4)
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
    rightImage: {
        width: wp(4),
        height: wp(4),
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
    bgView: {
        padding: wp(4),
        borderRadius: 12,
        backgroundColor: colors.gray23
    },
    arrowWithLine: {
        width: wp(3),
        height: wp(3),
        marginRight: wp(2)
    },
    developerText: {
        fontSize: 13,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray67
    },
    arrowRight: {
        width: wp(2),
        height: wp(3)
    },
    helpSupportText: {
        fontSize: 13,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.lightPurple10
    }
})