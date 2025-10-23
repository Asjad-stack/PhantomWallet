import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { appStyles } from '../../../../utilities/appStyles'
import PoppinsText from '../../../../components/PoppinsText'
import { Fonts } from '../../../../constants/fonts'
import { colors } from '../../../../constants/colors'
import { wp } from '../../../../components/ResponsiveComponent'

export const SecurityAndPrivacyCard = ({ title, toggle, rightText, rightArrow, onPressToggle, onPressRightArrow, onPress }) => {
    return (
        <TouchableOpacity activeOpacity={0.8} style={[appStyles.row]} onPress={onPress}>
            <PoppinsText style={styles.title}>{title}</PoppinsText>
            {toggle ?
                <TouchableOpacity activeOpacity={0.8} onPress={onPressToggle}>
                    <Image source={toggle} resizeMode='contain' style={styles.toggle} />
                </TouchableOpacity>
                :
                rightArrow ?
                    <View>
                        <Image source={rightArrow} resizeMode='contain' style={styles.rightArrow} />
                    </View>
                    :
                    <PoppinsText style={styles.rightText}>{rightText}</PoppinsText>
            }
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 13,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray36
    },
    toggle: {
        width: wp(11),
        height: wp(6.5)
    },
    rightArrow: {
        width: wp(2),
        height: wp(2)
    },
    rightText: {
        fontSize: 13,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray24
    }
})