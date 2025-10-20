import { StyleSheet } from 'react-native'
import { wp } from '../../../components/ResponsiveComponent'
import { colors } from '../../../constants/colors'
import { Fonts } from '../../../constants/fonts'

export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
    },
    alertView: {
        width: wp(92),
        alignSelf: 'center',
        padding: wp(4),
        alignItems: 'center',
        borderRadius: 15,
        backgroundColor: colors.orange
    },
    alertText: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.SemiBold,
        color: colors.gray103,
        textAlign: 'center'
    },
    alertDesc: {
        fontSize: 11,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray104,
        textAlign: 'center'
    },
    copyPrivateKeyBgView: {
        width: wp(92),
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: colors.gray106,
        backgroundColor: colors.gray107,
        borderRadius: 3,
        padding: wp(5)
    },
    copyPrivateKeyText: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray12,
        textAlign: 'left'
    },
    copyimg: {
        width: wp(3.5),
        height: wp(3.5),
        marginRight: wp(2.5)
    },
    copyTextStyle: {
        fontSize: 12,
        fontFamily: Fonts.Poppins.SemiBold,
        color: colors.gray105,
    }
})