import { Platform, StyleSheet } from 'react-native'
import { Fonts } from '../../../constants/fonts'
import { colors } from '../../../constants/colors'
import { hp, wp } from '../../../components/ResponsiveComponent'

export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
    },
    title: {
        fontSize: 22,
        fontFamily: Fonts.Poppins.Bold,
        color: colors.gray127,
        textAlign: 'center'
    },
    description: {
        fontSize: 12,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray128,
        textAlign: 'center'
    },
    inputStyle: {
        width: wp(80),
        alignSelf: 'center',
        textAlign: 'left',
        paddingHorizontal: wp(3),
        paddingVertical: Platform.OS === 'ios' ? hp(0.6) : hp(0.7),
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: colors.gray54,
        backgroundColor: colors.bottomSheetBgColor,
        borderRadius: 10
    },
})