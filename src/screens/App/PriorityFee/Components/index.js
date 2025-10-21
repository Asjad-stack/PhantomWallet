import { Image, StyleSheet, TouchableOpacity, View } from "react-native"
import { appStyles } from "../../../../utilities/appStyles"
import { Images } from "../../../../Images"
import PoppinsText from "../../../../components/PoppinsText"
import Spacer from "../../../../components/Spacer"
import { hp, wp } from "../../../../components/ResponsiveComponent"
import { Fonts } from "../../../../constants/fonts"
import { colors } from "../../../../constants/colors"
import { useState } from "react"

export const AutoSlippageCard = () => {
    const [isAuto, setIsAuto] = useState(false)
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={() => setIsAuto(!isAuto)} style={styles.autoSlippageCard}>
            <View style={appStyles.row}>
                <View style={appStyles.rowBasic}>
                    <Image source={Images.autoSlippageImage} resizeMode='contain' style={styles.autoSlippageImage} />
                    <PoppinsText style={styles.autoSlippageTitle}>Auto</PoppinsText>
                </View>
                <Image source={isAuto ? Images.radioCheckRound : Images.radioUnFill} resizeMode='contain' style={styles.radioBtn} />
            </View>
            <Spacer customHeight={hp(1)} />
            <PoppinsText style={styles.autoSlippageDescription}>Phantom will find the lowest slippage for a
                successful swap.</PoppinsText>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    // AutoSlippageCard
    autoSlippageCard: {
        padding: wp(4),
        borderRadius: 12,
        backgroundColor: colors.gray14
    },
    autoSlippageImage: {
        width: wp(5.5),
        height: wp(5.5),
        marginRight: wp(2)
    },
    radioBtn: {
        width: wp(4),
        height: wp(4)
    },
    autoSlippageTitle: {
        fontSize: 13,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray28
    },
    autoSlippageDescription: {
        fontSize: 12,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray115,
    },

})