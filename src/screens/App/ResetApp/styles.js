import { StyleSheet } from 'react-native'
import { wp } from '../../../components/ResponsiveComponent'
import { colors } from '../../../constants/colors'
import { Fonts } from '../../../constants/fonts'

export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
    },
    deleteWithRedRound: {
        width: wp(15.5),
        height: wp(15.5),
        alignSelf: 'center'
    },
    title: {
        fontSize: 17,
        fontFamily: Fonts.Poppins.SemiBold,
        color: colors.gray44,
        textAlign: 'center'
    },
    description: {
        fontSize: 13,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray97,
        textAlign: 'center'
    },
    btn1Style: {
        width: wp(42),
        borderRadius: 9,
        backgroundColor: colors.gray51,
        borderWidth: 0
    },
    btn2Style: {
        width: wp(42),
        borderRadius: 9,
        backgroundColor: colors.orange1,
        borderWidth: 0
    }
})