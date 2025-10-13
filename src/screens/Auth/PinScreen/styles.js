import { StyleSheet, Text, View } from 'react-native'
import { wp } from '../../../components/ResponsiveComponent'
import { Fonts } from '../../../constants/fonts'
import { colors } from '../../../constants/colors'

export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        paddingHorizontal: wp(4)
    },
    pinTitle: {
        fontSize: 24,
        fontFamily: Fonts.Poppins.Medium,
        color: colors.white,
        textAlign: 'center'
    },
    pinDesc: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray4,
        textAlign: 'center'
    },
    badge: {
        width: wp(92),
        height: wp(92),
        alignSelf: 'center'
    },
    congratulationText: {
        fontSize: 24,
        fontFamily: Fonts.Poppins.Medium,
        color: colors.white,
        textAlign: 'center'
    },
    congratulationDesc: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray5,
        textAlign: 'center'
    },
})