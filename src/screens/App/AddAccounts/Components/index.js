import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { appStyles } from '../../../../utilities/appStyles'
import { hp, wp } from '../../../../components/ResponsiveComponent'
import { colors } from '../../../../constants/colors'
import { Fonts } from '../../../../constants/fonts'
import PoppinsText from '../../../../components/PoppinsText'
import Spacer from '../../../../components/Spacer'

export const AddAccountsList = ({ leftImage, title, description, onPress }) => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={[styles.container, appStyles.rowBasic]}>
            <Image source={leftImage} resizeMode='contain' style={styles.leftImage} />
            <View>
                <PoppinsText style={styles.title}>{title}</PoppinsText>
                <PoppinsText style={styles.description}>{description}</PoppinsText>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
        padding: wp(3.3),
        borderRadius: 12,
        backgroundColor: colors.gray23,
        width: wp(92),
        alignSelf: 'center'
    },
    leftImage: {
        width: wp(7),
        height: wp(7),
        marginRight: wp(3)
    },
    title: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.SemiBold,
        color: colors.gray44
    },
    description: {
        fontSize: 12,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray97
    }
})