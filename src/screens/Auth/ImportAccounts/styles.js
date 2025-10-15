import { StyleSheet } from 'react-native'
import { hp, wp } from '../../../components/ResponsiveComponent'
import { Fonts } from '../../../constants/fonts'
import { colors } from '../../../constants/colors'

export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        paddingHorizontal: wp(4)
    },
    importAccountCircle: {
        width: wp(27.5),
        height: hp(11.25),
        alignSelf: 'center'
    },
    importAccountsText: {
        fontSize: 18,
        fontFamily: Fonts.Poppins.Bold,
        color: colors.gray19,
        textAlign: 'center'
    },
    importAccountsDesc: {
        fontSize: 12,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray20,
        textAlign: 'center'
    },
    tickGreenCircle: {
        width: wp(17.5),
        height: wp(17.5),
        alignSelf: 'center'
    },
    centerText: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray7,
        textAlign: 'center'
    },

})