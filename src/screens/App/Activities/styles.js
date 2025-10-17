import { StyleSheet } from 'react-native'
import { Fonts } from '../../../constants/fonts'
import { colors } from '../../../constants/colors'
import { wp } from '../../../components/ResponsiveComponent'

export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
    },
    recentActivityText: {
        fontSize: 17,
        fontFamily: Fonts.Poppins.SemiBold,
        color: colors.gray44
    },
    horizontallyDots: {
        width: wp(3.5),
        height: wp(3.5),
        marginRight: wp(4)
    },
    arrcrossowDown: {
        width: wp(3.5),
        height: wp(3.5),
    }
})