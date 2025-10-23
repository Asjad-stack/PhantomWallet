import { StyleSheet } from 'react-native'
import { wp } from '../../../components/ResponsiveComponent'
import { Fonts } from '../../../constants/fonts'
import { colors } from '../../../constants/colors'

export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
    },
    itemCard: {
        padding: wp(4),
        // borderRadius: 10,
        backgroundColor: colors.gray23
    },
    firstItemCard: {
        padding: wp(4),
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: colors.gray23
    },
    lastItemCard: {
        padding: wp(4),
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        backgroundColor: colors.gray23
    },
    itemLogo: {
        width: wp(7.5),
        height: wp(7.5),
        marginRight: wp(3)
    },
    itemName: {
        fontSize: 16,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray25
    },
    unCheckBox: {
        width: wp(4.5),
        height: wp(4.5),
    }
})