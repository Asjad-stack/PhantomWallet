import { Image, StyleSheet, View } from "react-native"
import { hp, wp } from "../../../../components/ResponsiveComponent"
import { colors } from "../../../../constants/colors"
import { Fonts } from "../../../../constants/fonts"
import { appStyles } from "../../../../utilities/appStyles"
import PoppinsText from "../../../../components/PoppinsText"
import Spacer from "../../../../components/Spacer"


export const SummaryCard = ({ }) => {
    return (
        <View>

            <View style={styles.cardContainer}>
                <View style={appStyles.row}>
                    <PoppinsText style={styles.leftText}>{'To'}</PoppinsText>
                    <PoppinsText style={styles.rightText}>{'EXrs...P4ok'}</PoppinsText>
                </View>
            </View>
            <Spacer customHeight={hp(0.2)} />
            <View style={[appStyles.row, styles.cardContainer2]}>
                <PoppinsText style={styles.leftText}>{'Network'}</PoppinsText>
                <PoppinsText style={styles.rightText}>{'Solana'}</PoppinsText>
            </View>
            <Spacer customHeight={hp(0.2)} />
            <View style={[appStyles.row, styles.cardContainer1]}>
                <PoppinsText style={styles.leftText}>{'Network fee'}</PoppinsText>
                <View style={appStyles.rowBasic}>
                    <PoppinsText style={styles.rightText}>{'$0.0177'}</PoppinsText>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    //SummaryCard
    cardContainer: {
        width: wp(92),
        alignSelf: 'center',
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        backgroundColor: colors.gray23,
        padding: wp(3.5)
    },
    cardContainer1: {
        width: wp(92),
        alignSelf: 'center',
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        backgroundColor: colors.gray23,
        padding: wp(3.5)
    },
    cardContainer2: {
        width: wp(92),
        alignSelf: 'center',
        backgroundColor: colors.gray23,
        padding: wp(3.5)
    },
    title: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.SemiBold,
        color: colors.gray53
    },
    leftText: {
        fontSize: 13,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray26
    },
    rightText: {
        fontSize: 13,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray50
    },
})