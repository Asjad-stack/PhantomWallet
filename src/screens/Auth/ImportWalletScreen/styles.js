import { StyleSheet } from 'react-native'
import { wp } from '../../../components/ResponsiveComponent'
import { colors } from '../../../constants/colors'
import { Fonts } from '../../../constants/fonts'

export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        paddingHorizontal: wp(4)
    },
    authMainRoundBox: {
        width: wp(92),
        paddingHorizontal: wp(4),
        paddingVertical: wp(6),
        alignSelf: 'center',
    },
    pinText: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.white
    },
    rightArrow: {
        width: wp(5),
        height: wp(5)
    },
    tickGreen: {
        width: wp(5),
        height: wp(5)
    },
    toggleOff: {
        width: wp(8.5),
        height: wp(5)
    },
    checkBox: {
        width: wp(5),
        height: wp(5),
        marginRight: wp(2)
    },
})