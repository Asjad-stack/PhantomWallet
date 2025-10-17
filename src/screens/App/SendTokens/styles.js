import { StyleSheet } from 'react-native'
import { hp, wp } from '../../../components/ResponsiveComponent'
import { colors } from '../../../constants/colors'
import { Fonts } from '../../../constants/fonts'

export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        paddingHorizontal: wp(4)
    },
    container: {
        width: wp(100),
        backgroundColor: colors.gray29,
        paddingHorizontal: wp(4),
        borderBottomWidth: 0.5,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        paddingVertical: hp(1.8)
    },
    cross: {
        width: wp(3),
        height: wp(3),
    },
    title: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.SemiBold,
        color: colors.gray28,
    },
    rightImage: {
        width: wp(4),
        height: wp(4),
    },
    inputStyle: {
        width: wp(72),
        alignSelf: 'center',
        textAlign: 'left',
        paddingHorizontal: wp(3),
    },
    inputContainer: {
        backgroundColor: colors.gray68,
    }
})