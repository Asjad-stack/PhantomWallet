import { StyleSheet, } from 'react-native'
import { hp, wp } from '../../../components/ResponsiveComponent'
import { colors } from '../../../constants/colors'
import { Fonts } from '../../../constants/fonts'

export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        paddingHorizontal: wp(4),
    },
    walletSetup: {
        width: wp(79),
        height: hp(36),
        alignSelf: 'center'
    },
    setUpText: {
        fontSize: 24,
        fontWeight: Fonts.Poppins.Medium,
        color: colors.white,
        textAlign: 'center',
    },
    startedDesc: {
        fontSize: 14,
        fontWeight: Fonts.Poppins.Regular,
        color: colors.gray1,
        textAlign: 'center',
    },
    btnView: {
        paddingHorizontal: wp(4),
        paddingBottom: hp(3)
    },
    createButton: {
        width: wp(92),
        height: hp(7),
        alignSelf: 'center'
    }
})