import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { appStyles } from '../../../../utilities/appStyles'
import { hp, wp } from '../../../../components/ResponsiveComponent'
import { colors } from '../../../../constants/colors'
import PoppinsText from '../../../../components/PoppinsText'
import { Fonts } from '../../../../constants/fonts'
import Spacer from '../../../../components/Spacer'

export const RowDevSettingView = ({ title, desc, toggleLogo, onPress }) => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={[appStyles.row, styles.devSettingBgView]}>
            <View>
                <PoppinsText style={styles.titleText}>{title}</PoppinsText>
                <Spacer customHeight={hp(0.3)} />
                <PoppinsText style={styles.descText}>{desc}</PoppinsText>
            </View>
            <Image source={toggleLogo} resizeMode='contain' style={styles.toggleLogo} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    devSettingBgView: {
        padding: wp(4),
        borderRadius: 12,
        backgroundColor: colors.gray23
    },
    titleText: {
        fontSize: 13,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray15
    },
    descText: {
        fontSize: 11,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray6,
        width: wp(75)
    },
    toggleLogo: {
        width: wp(4.5),
        height: wp(4.5),
    }
})
