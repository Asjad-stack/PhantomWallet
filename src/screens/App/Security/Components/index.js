import { ImageBackground, StyleSheet, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { Images } from '../../../../Images'
import { hp, wp } from '../../../../components/ResponsiveComponent'
import { appStyles } from '../../../../utilities/appStyles'
import { Fonts } from '../../../../constants/fonts'
import { colors } from '../../../../constants/colors'
import PoppinsText from '../../../../components/PoppinsText'

export const SecurityCard = ({ activeOpacity, logo, title, toggleLogo, onPress, onPressToggle }) => {
    return (
        <TouchableOpacity activeOpacity={activeOpacity} onPress={onPress}>
            <ImageBackground source={Images.authMainRoundBox} resizeMode='contain' style={styles.authMainRoundBox}>
                <View style={appStyles.row}>
                    <View style={appStyles.rowBasic}>
                        <Image source={logo} resizeMode='contain' style={styles.logo} />
                        <PoppinsText style={styles.title}>{title}</PoppinsText>
                    </View>
                    {toggleLogo ?
                        <TouchableOpacity activeOpacity={0.8} onPress={onPressToggle}>
                            <Image source={toggleLogo} resizeMode='contain' style={styles.toggleLogo} />
                        </TouchableOpacity>
                        :
                        <Image source={Images.rightArrow} resizeMode='contain' style={styles.rightArrow} />
                    }
                </View>
            </ImageBackground>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    authMainRoundBox: {
        height: hp(8),
        paddingHorizontal: wp(4),
        justifyContent: 'center',
    },
    logo: {
        width: wp(6),
        height: wp(6),
        marginRight: wp(3)
    },
    title: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.white
    },
    rightArrow: {
        width: wp(6),
        height: wp(6)
    },
    toggleLogo: {
        width: wp(10),
        height: wp(6)
    }
})