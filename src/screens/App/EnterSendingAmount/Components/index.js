import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { appStyles } from '../../../../utilities/appStyles'
import PoppinsText from '../../../../components/PoppinsText'
import Spacer from '../../../../components/Spacer'
import { hp, wp } from '../../../../components/ResponsiveComponent'
import { Images } from '../../../../Images'
import { Fonts } from '../../../../constants/fonts'
import { colors } from '../../../../constants/colors'

export const AvailableAmountView = () => {
    return (
        <View style={{ ...appStyles.row, paddingHorizontal: wp(4) }}>
            <View>
                <PoppinsText style={styles.availableAmount}>{"Available To Send"}</PoppinsText>
                <PoppinsText style={styles.availableAmountValue}>{"O SOL"}</PoppinsText>
            </View>
            <TouchableOpacity activeOpacity={0.8} onPress={() => { }}>
                <Image source={Images.maxWithRound} resizeMode='contain' style={styles.maxWithRound} />
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    availableAmount: {
        fontSize: 10,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray79
    },
    availableAmountValue: {
        fontSize: 13,
        fontFamily: Fonts.Poppins.SemiBold,
        color: colors.gray26
    },
    maxWithRound: {
        width: wp(12),
        height: wp(8)
    }
})