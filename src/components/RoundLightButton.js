
import { ImageBackground, StyleSheet, TouchableOpacity, View, ActivityIndicator } from 'react-native'
import React from 'react'
import { Images } from '../Images'
import { Fonts } from '../constants/fonts'
import { hp, wp } from './ResponsiveComponent'
import { colors } from '../constants/colors'
import PoppinsText from './PoppinsText'

export const RoundLightButton = ({ title, onPressBtn, btnContainerStyles, loading = false }) => {
    return (
        <TouchableOpacity activeOpacity={0.8} style={{}} onPress={onPressBtn}>
            <ImageBackground source={Images.roundLightButton} resizeMode='contain' style={[styles.roundLightButton, btnContainerStyles]}>
                <View style={styles.contentContainer}>
                    <PoppinsText style={styles.title}>{title}</PoppinsText>
                    {loading && (
                        <ActivityIndicator
                            size="small"
                            color={colors.white}
                            style={styles.loader}
                        />
                    )}
                </View>
            </ImageBackground>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    roundLightButton: {
        width: wp(92),
        height: hp(7),
        alignSelf: 'center',
        borderRadius: 100,
        justifyContent: 'center'
    },
    contentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 16,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.white,
        textAlign: 'center',
    },
    loader: {
        marginLeft: 10,
    }
})