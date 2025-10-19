import { StyleSheet } from 'react-native'
import { Fonts } from '../../../constants/fonts'
import { colors } from '../../../constants/colors'

export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
    },
    title: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.Medium,
        color: colors.gray98
    }
})