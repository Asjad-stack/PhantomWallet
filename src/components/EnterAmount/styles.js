import { StyleSheet } from "react-native";
import { Fonts } from "../../constants/fonts";
import { colors } from "../../constants/colors";
import { hp, wp } from "../ResponsiveComponent";


export const styles = StyleSheet.create({
    displayWrapper: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent",
    },
    amountRow: {
        flexDirection: 'row',
        alignItems: 'flex-start', // ✅ keeps $ and amount bottom-aligned
        justifyContent: 'center',
    },
    dollarSign: {
        fontSize: 22,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray66,
        marginRight: 4,
        marginTop: hp(1.5)
    },
    amountWrapper: {
        minWidth: 100,
        maxWidth: '70%', // ✅ amount grows but won’t push $
        alignItems: 'flex-start',
    },
    amountText: {
        fontSize: 67,
        color: colors.white,
        fontFamily: Fonts.Poppins.SemiBold,
        includeFontPadding: false,
        textAlign: 'center',
    },
    cardWithRound: {
        width: wp(7),
        height: wp(7),
        marginRight: wp(2)
    },
    cardText: {
        fontSize: 13,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray67,
        marginRight: wp(2)
    },
    arrowDown: {
        width: wp(2.5),
        height: wp(2.5),
    }
});