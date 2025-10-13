import { StyleSheet, Text, View } from 'react-native'
import { wp } from '../../../components/ResponsiveComponent'
import { Fonts } from '../../../constants/fonts'
import { colors } from '../../../constants/colors'

export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        paddingHorizontal: wp(4)
    },
    notificationLogoWithNumber: {
        width: wp(75),
        height: wp(65),
        alignSelf: 'center'
    },
    comingSoonText: {
        fontSize: 16,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.white,
        textAlign: 'center'
    },
    comingSoonDesc: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray7,
        textAlign: 'center'
    }
})