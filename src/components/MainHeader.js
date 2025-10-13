import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import { appStyles } from '../utilities/appStyles/index'
import { wp } from './ResponsiveComponent'
import { Fonts } from '../constants/fonts'
import { colors } from '../constants/colors'
import { TouchableOpacity } from 'react-native'
import PoppinsText from './PoppinsText'

export const MainHeader = ({ onPressLeftImage, leftImage, title, rightImage }) => {
    return (
        <View style={{ ...appStyles.row, width: wp(92) }}>
            <TouchableOpacity activeOpacity={0.8} onPress={onPressLeftImage}>
                <Image source={leftImage} resizeMode='contain' style={styles.leftImage} />
            </TouchableOpacity>
            <PoppinsText style={styles.title}>{title}</PoppinsText>
            <TouchableOpacity>
                <Image source={rightImage} resizeMode='contain' style={styles.leftImage} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    leftImage: {
        width: wp(6),
        height: wp(6)
    },
    title: {
        fontSize: 16,
        fontWeight: Fonts.Poppins.Regular,
        color: colors.white
    }
})