import { StyleSheet } from 'react-native'
import { wp } from '../../../components/ResponsiveComponent'
import { Fonts } from '../../../constants/fonts'
import { colors } from '../../../constants/colors'

export const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        paddingHorizontal: wp(4)
    },
    selectTokenText: {
        fontSize: 17,
        fontFamily: Fonts.Poppins.SemiBold,
        color: colors.gray63
    },
    questionMark: {
        width: wp(5),
        height: wp(5),
    },
    searchInput: {
        width: wp(72),
        alignSelf: 'center',
        textAlign: 'left',
        paddingHorizontal: wp(3)
    },
    getStartedText: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.SemiBold,
        color: colors.gray50,
    },
    popularTokensText: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.Medium,
        color: colors.gray37,
    }
})