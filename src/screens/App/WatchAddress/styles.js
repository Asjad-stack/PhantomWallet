import { StyleSheet } from 'react-native'
import { hp, wp } from '../../../components/ResponsiveComponent'
import { colors } from '../../../constants/colors'
import { Fonts } from '../../../constants/fonts'

export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
    },
    arrowDownWithRound: {
        width: wp(15.5),
        height: wp(15.5),
        alignSelf: 'center'
    },
    inputStyle: {
        width: wp(88),
        color: colors.white,
        textAlign: 'left',
        paddingHorizontal: wp(3),
        alignSelf: 'center'
    },
    containerStyle: {
        borderRadius: 10,
        paddingVertical: hp(0.7),
        backgroundColor: colors.gray23,
    },
    inputStyle1: {
        width: wp(68),
        color: colors.white,
        textAlign: 'left',
    },
    titleStyles: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.SemiBold,
        color: colors.gray35
    },
    titleStyles1: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.SemiBold,
        color: colors.gray34
    },
    desc: {
        fontSize: 13,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray50,
        textAlign: 'center',
        paddingHorizontal: wp(4)
    }
})