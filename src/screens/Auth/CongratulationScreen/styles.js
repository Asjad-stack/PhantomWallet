import { StyleSheet } from 'react-native'
import { hp, wp } from '../../../components/ResponsiveComponent'
import { Fonts } from '../../../constants/fonts'
import { colors } from '../../../constants/colors'

export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        paddingHorizontal: wp(4)
    },
    title: {
        fontSize: 23,
        fontFamily: Fonts.Poppins.Bold,
        color: colors.gray132,
        textAlign: 'center',
    },
    desc: {
        fontSize: 15,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray120,
        textAlign: 'center',
    },

})