import { StyleSheet } from 'react-native'
import { wp } from '../../../components/ResponsiveComponent'
import { colors } from '../../../constants/colors'
import { Fonts } from '../../../constants/fonts'

export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
    },
    languageCard: {
        width: wp(92),
        alignSelf: 'center',
        padding: wp(4),
        backgroundColor: colors.gray23
    },
    firstCard: {
        padding: wp(4),
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        backgroundColor: colors.gray23
    },
    lastCard: {
        padding: wp(4),
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        backgroundColor: colors.gray23
    },
    languageText: {
        fontSize: 13,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray60
    },
    radioBtn: {
        width: wp(4),
        height: wp(4)
    }
})