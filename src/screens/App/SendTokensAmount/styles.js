import { StyleSheet, Text, View } from 'react-native'
import { hp, wp } from '../../../components/ResponsiveComponent'
import { Fonts } from '../../../constants/fonts'
import { colors } from '../../../constants/colors'

export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        paddingHorizontal: wp(4)
    },
    authMainRoundBox: {
        width: wp(92),
        height: wp(18),
        paddingHorizontal: wp(3),
        paddingVertical: hp(2),
        borderRadius: 32,
    },
    profile: {
        width: wp(10),
        height: wp(10),
        marginRight: wp(3)
    },
    customName: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray7
    },
    customAddress: {
        fontSize: 12,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.white
    },
    rightArrow: {
        width: wp(6),
        height: wp(6)
    }
})