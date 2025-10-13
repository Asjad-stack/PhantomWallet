import { StyleSheet } from 'react-native'
import { hp, wp } from '../../../components/ResponsiveComponent'
import { colors } from '../../../constants/colors'
import { Fonts } from '../../../constants/fonts'

export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        paddingHorizontal: wp(4)
    },
    faceEnableRings: {
        width: wp(92),
        height: wp(92),
        alignSelf: 'center'
    },
    simpleRoundBox: {
        width: wp(43),
        paddingHorizontal: wp(4),
        paddingVertical: hp(3),
        alignSelf: 'center'
    },
    blurGrayRoundBox: {
        padding: wp(4),
        alignSelf: 'center',
        position: 'absolute',
    },
    faceIdText: {
        fontSize: 16,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.white,
        textAlign: 'center'
    },
    face: {
        width: wp(5),
        height: wp(5)
    },
    toggleOn: {
        width: wp(10),
        height: wp(6)
    },
    faceIdTitle: {
        fontSize: 24,
        fontFamily: Fonts.Poppins.Medium,
        color: colors.white,
        textAlign: 'center'
    },
    faceIdDesc: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray5,
        textAlign: 'center'
    }
})