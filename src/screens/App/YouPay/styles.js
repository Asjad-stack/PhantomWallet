import { Platform, StyleSheet } from 'react-native'
import { hp, wp } from '../../../components/ResponsiveComponent'
import { Fonts } from '../../../constants/fonts'
import { colors } from '../../../constants/colors'

export const styles = StyleSheet.create({
    mainView: {
        // flex: 1,
        paddingHorizontal: wp(4)
    },
    title: {
        fontSize: 17,
        fontFamily: Fonts.Poppins.SemiBold,
        color: colors.gray83
    },
    cross: {
        width: wp(3.5),
        height: wp(3.5),
    },
    containerInputStyle: {
        borderRadius: 7,
        paddingVertical: Platform.OS === 'ios' ? hp(1) : hp(0.1),
        backgroundColor: colors.gray55,
        alignSelf: 'flex-start'
    },
    inputStyle: {
        width: wp(70),
        textAlign: 'left',
        paddingHorizontal: wp(3)
    },

})