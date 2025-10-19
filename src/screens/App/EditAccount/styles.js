import { StyleSheet } from 'react-native'
import { hp, wp } from '../../../components/ResponsiveComponent'
import { colors } from '../../../constants/colors'
import { Fonts } from '../../../constants/fonts'

export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
    },
    accountImage: {
        width: wp(24.5),
        height: wp(24.5),
        alignSelf: 'center',

    },
    pencilWithBlackRound1: {
        width: wp(6.5),
        height: wp(6.5),
        position: 'absolute',
        bottom: 0,
        right: 0,
        marginBottom: hp(0.2)
    },
    notificationCard: {
        width: wp(92),
        alignSelf: 'center',
        borderRadius: 12,
        backgroundColor: colors.gray23,
        padding: wp(5)
    },
    notificationText: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray60
    },
    arrowRight: {
        width: wp(3),
        height: wp(3)
    }
})