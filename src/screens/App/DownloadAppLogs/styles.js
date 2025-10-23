import { StyleSheet } from 'react-native'
import { wp } from '../../../components/ResponsiveComponent'
import { colors } from '../../../constants/colors'
import { Fonts } from '../../../constants/fonts'

export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
    },
    colorFullArrowWithRound: {
        width: wp(16.25),
        height: wp(16.25),
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
        color: colors.gray61,
        textAlign: 'center'
    },
    noSensitiveDataContainer: {
        borderWidth: 1,
        borderColor: colors.yellow1,
        borderRadius: 8.75,
        backgroundColor: colors.gray129,
        padding: wp(3)
    },
    noSensitiveDataText: {
        fontSize: 12,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.yellow2,
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
        backgroundColor: colors.lightPurple16,
        borderWidth: 0
    }
})