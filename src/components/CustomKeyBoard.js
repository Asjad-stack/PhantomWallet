import { View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Spacer from './Spacer'
import { hp, wp } from './ResponsiveComponent'
import { Fonts } from '../constants/fonts'
import { colors } from '../constants/colors'
import PoppinsText from './PoppinsText'
import { Images } from '../Images'

const CustomKeyboard = ({ handleRemove, HandleKeyPress, isPinCode }) => {
    const insets = useSafeAreaInsets();

    return (
        <View style={{ width: wp(92), alignSelf: 'center', paddingVertical: hp(1) }}>
            <View style={styles.buttonRow}>
                <TouchableOpacity activeOpacity={0.8} onPress={() => HandleKeyPress(1)} style={styles.buttonStyle}>
                    <PoppinsText style={styles.numberText}>1</PoppinsText>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} onPress={() => HandleKeyPress(2)} style={styles.buttonStyle}>
                    <PoppinsText style={styles.numberText}>2</PoppinsText>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} onPress={() => HandleKeyPress(3)} style={styles.buttonStyle}>
                    <PoppinsText style={styles.numberText}>3</PoppinsText>
                </TouchableOpacity>
            </View>

            <Spacer customHeight={hp(0.5)} />
            <View style={styles.buttonRow}>
                <TouchableOpacity activeOpacity={0.8} onPress={() => HandleKeyPress(4)} style={styles.buttonStyle}>
                    <PoppinsText style={styles.numberText}>4</PoppinsText>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} onPress={() => HandleKeyPress(5)} style={styles.buttonStyle}>
                    <PoppinsText style={styles.numberText}>5</PoppinsText>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} onPress={() => HandleKeyPress(6)} style={styles.buttonStyle}>
                    <PoppinsText style={styles.numberText}>6</PoppinsText>
                </TouchableOpacity>
            </View>

            <Spacer customHeight={hp(0.5)} />
            <View style={styles.buttonRow}>
                <TouchableOpacity activeOpacity={0.8} onPress={() => HandleKeyPress(7)} style={styles.buttonStyle}>
                    <PoppinsText style={styles.numberText}>7</PoppinsText>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} onPress={() => HandleKeyPress(8)} style={styles.buttonStyle}>
                    <PoppinsText style={styles.numberText}>8</PoppinsText>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} onPress={() => HandleKeyPress(9)} style={styles.buttonStyle}>
                    <PoppinsText style={styles.numberText}>9</PoppinsText>
                </TouchableOpacity>
            </View>

            <Spacer customHeight={hp(0.5)} />
            <View style={styles.buttonRow}>
                <TouchableOpacity activeOpacity={0.8} onPress={() => isPinCode ? null : HandleKeyPress(".")} style={styles.buttonStyle}>
                    {
                        isPinCode ? null :
                            <PoppinsText style={styles.numberText}>.</PoppinsText>

                    }
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} onPress={() => HandleKeyPress(0)} style={styles.buttonStyle}>
                    <PoppinsText style={styles.numberText}>0</PoppinsText>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} onPress={handleRemove} style={styles.buttonStyle}>
                    <Image source={Images.keyboardArrow} resizeMode='cover' tintColor={colors.white} style={{ width: wp(3), height: wp(3) }} />
                </TouchableOpacity>
            </View>

            <Spacer customHeight={hp(3)} />
        </View>
    )
}

const styles = StyleSheet.create({
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    buttonStyle: {
        width: wp(28.75),
        height: hp(8),
        alignItems: 'center',
        justifyContent: 'center',
    },
    numberText: {
        fontSize: 22,
        fontFamily: Fonts.Poppins.Bold,
        color: colors.white
    },
})

export default CustomKeyboard