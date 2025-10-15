import { StyleSheet } from 'react-native'
import { hp, wp } from '../../../components/ResponsiveComponent'
import { Fonts } from '../../../constants/fonts'
import { colors } from '../../../constants/colors'

export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        paddingHorizontal: wp(4)
    },
    congratulations: {
        flex: 1,
        width: wp(100),
        height: hp(100),
    },

    desc: {
        fontSize: 39,
        fontFamily: Fonts.Poppins.Medium,
        color: colors.white,
        textAlign: 'center',
        marginTop: hp(23)
    },

})