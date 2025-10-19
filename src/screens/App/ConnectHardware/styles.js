import { StyleSheet } from 'react-native'
import { hp, wp } from '../../../components/ResponsiveComponent'
import { Fonts } from '../../../constants/fonts'
import { colors } from '../../../constants/colors'

export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
    },
    connectWalletLogo: {
        width: wp(37.25),
        height: hp(10.87),
        alignSelf: 'center'
    },
    title: {
        fontSize: 18,
        fontFamily: Fonts.Poppins.Bold,
        color: colors.gray49,
        textAlign: 'center'
    }
})