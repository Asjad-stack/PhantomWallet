import { StyleSheet } from 'react-native'
import { wp } from '../../../components/ResponsiveComponent'
import { Fonts } from '../../../constants/fonts'
import { colors } from '../../../constants/colors'

export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
    },
    phantomWhiteLogo: {
        width: wp(13.25),
        height: wp(11),
        marginRight: wp(2),
        alignSelf: 'center'
    },
    phantomText: {
        fontSize: 36,
        fontFamily: Fonts.Poppins.Bold,
        color: colors.gray80,
        textAlign: 'center'
    },
    versionText: {
        fontSize: 12,
        fontFamily: Fonts.Poppins.Medium,
        color: colors.gray3,
        textAlign: 'left'
    }
})