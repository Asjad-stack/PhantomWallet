import { StyleSheet } from 'react-native'
import { Fonts } from '../../../constants/fonts'
import { colors } from '../../../constants/colors'

export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
    },
    apyText: {
        fontSize: 10,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray121,
        textAlign: 'left'
    }
})