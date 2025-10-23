import { Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { appStyles } from '../../../../utilities/appStyles'
import { wp } from '../../../../components/ResponsiveComponent'
import { colors } from '../../../../constants/colors'
import PoppinsText from '../../../../components/PoppinsText'
import { Fonts } from '../../../../constants/fonts'

export const AboutRowCard = ({ title, rightImage, onPress }) => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={[appStyles.row, styles.rowCard]}>
            <PoppinsText style={styles.titleText}>{title}</PoppinsText>
            <Image source={rightImage} resizeMode='contain' style={styles.rightImage} />
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    rowCard: {
        padding: wp(4),
        borderRadius: 12,
        backgroundColor: colors.gray23
    },
    titleText: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.SemiBold,
        color: colors.gray28
    },
    rightImage: {
        width: wp(3.5),
        height: wp(3.5)
    }
})