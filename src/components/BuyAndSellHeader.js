import { Image, StyleSheet, TouchableOpacity, View } from "react-native"
import { appStyles } from "../utilities/appStyles"
import PoppinsText from "./PoppinsText"
import { wp } from "./ResponsiveComponent"
import { Fonts } from "../constants/fonts"
import { colors } from "../constants/colors"

export const BuyAndSellHeader = ({ leftImage, tokenLogo, tokenName, status, rightImage, onPressBackArrow }) => {
    return (
        <View style={appStyles.row}>
            <View style={appStyles.rowBasic}>
                <TouchableOpacity activeOpacity={0.8} onPress={onPressBackArrow}>
                    <Image source={leftImage} resizeMode='contain' style={styles.backArrow} />
                </TouchableOpacity>
                <TouchableOpacity style={appStyles.rowBasic}>
                    <Image source={tokenLogo} resizeMode='contain' style={styles.tokenLogo} />
                    <View style={{ marginLeft: wp(3) }}>
                        <PoppinsText style={styles.tokenName}>{tokenName}</PoppinsText>
                        <PoppinsText style={styles.tokenDetailsStatus}>{status}</PoppinsText>
                    </View>
                </TouchableOpacity>
            </View>
            <TouchableOpacity activeOpacity={0.8}>
                <Image source={rightImage} resizeMode='contain' style={styles.rightImage} />
            </TouchableOpacity>
        </View >
    )
}

const styles = StyleSheet.create({
    //TokenDetailsHeader
    backArrow: {
        width: wp(3),
        height: wp(4),
        marginRight: wp(3)
    },
    tokenLogo: {
        width: wp(9),
        height: wp(9),
        borderRadius: 100
    },
    tokenName: {
        fontSize: 17,
        fontFamily: Fonts.Poppins.SemiBold,
        color: colors.gray63
    },
    tokenDetailsStatus: {
        fontSize: 11,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray109
    },
    rightImage: {
        width: wp(4),
        height: wp(4)
    },

})