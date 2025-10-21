import { StyleSheet } from 'react-native'
import { wp } from '../../../components/ResponsiveComponent'
import { Fonts } from '../../../constants/fonts'
import { colors } from '../../../constants/colors'

export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        paddingHorizontal: wp(4)
    },
    stakeStartWithRound: {
        width: wp(40),
        height: wp(33.25),
        alignSelf: 'center'
    },
    stakeTitle: {
        fontSize: 22,
        fontFamily: Fonts.Poppins.SemiBold,
        color: colors.gray119,
        textAlign: 'center'
    },
    stakeDesc: {
        fontSize: 13,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray115,
        textAlign: 'center'
    },
    bgView: {
        width: wp(92),
        alignSelf: 'center',
        padding: wp(4),
        borderRadius: 12,
        backgroundColor: colors.gray23
    },
    suiWithGreenRound: {
        width: wp(7.5),
        height: wp(7.5),
        marginRight: wp(3),
        alignSelf: 'flex-start'
    },
    liquidStakingTitle: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.SemiBold,
        color: colors.gray31,
    },
    liquidStakingDesc: {
        fontSize: 12,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray109,
        width: wp(70)
    },
    apyText: {
        fontSize: 12,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray1,
    },
    recomended: {
        width: wp(21.25),
        height: wp(4.5),
        marginLeft: wp(1.5)
    }
})