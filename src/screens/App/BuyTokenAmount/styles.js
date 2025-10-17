import { StyleSheet, } from 'react-native'
import { wp } from '../../../components/ResponsiveComponent'
import { Fonts } from '../../../constants/fonts'
import { colors } from '../../../constants/colors'

export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        paddingHorizontal: wp(4)
    },
    tokenLogo: {
        width: wp(9),
        height: wp(9),
        marginRight: wp(3)
    },
    headerText: {
        fontSize: 18,
        fontFamily: Fonts.Poppins.SemiBold,
        color: colors.gray65
    },
    cross: {
        width: wp(4),
        height: wp(4),
    }
})