import { StyleSheet } from 'react-native'
import { hp, wp } from '../../../components/ResponsiveComponent'
import { Fonts } from '../../../constants/fonts'
import { colors } from '../../../constants/colors'

export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        paddingHorizontal: wp(4)
    },
    giftWithCircle: {
        width: wp(10),
        height: wp(10),
        alignSelf: 'center'
    },
    dollarAmont: {
        fontSize: 24,
        fontFamily: Fonts.Poppins.Medium,
        color: colors.white,
        textAlign: 'center'
    },
    desc: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray7,
        textAlign: 'center'
    },
    authMainRoundBox: {
        width: wp(92),
        height: hp(40),
        paddingHorizontal: wp(3),
        paddingVertical: hp(2),
        borderRadius: 32,
        justifyContent: 'center',
    },
})