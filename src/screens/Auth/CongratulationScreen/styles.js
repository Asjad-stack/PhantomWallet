import { StyleSheet } from 'react-native'
import { hp, wp } from '../../../components/ResponsiveComponent'
import { Fonts } from '../../../constants/fonts'
import { colors } from '../../../constants/colors'

export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        paddingHorizontal: wp(4)
    },
    congratulations: {
        flex: 1,
        width: wp(100),
        height: hp(150),
    },
    hiText: {
        fontSize: 40,
        fontFamily: Fonts.Poppins.Bold,
        color: colors.white,
        textAlign: 'center'
    },
    desc: {
        fontSize: 39,
        fontFamily: Fonts.Poppins.Medium,
        color: colors.white,
        textAlign: 'center'
    },
    enjoyYourWallet: {
        width: wp(63.25),
        height: hp(26.12),
        alignSelf: 'center'
    },
    enjoyYourWalletText: {
        fontSize: 22,
        fontFamily: Fonts.Poppins.Medium,
        color: colors.gray17,
        textAlign: 'center'
    },
    enjoyYourWalletDesc: {
        fontSize: 11,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray10,
        textAlign: 'center'
    }
})