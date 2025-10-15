import React from 'react'
import { Image, ImageBackground, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { width, height, totalSize } from 'react-native-dimension'
import Spacer from './Spacer'
import { appStyles } from '../utilities/appStyles/index'
import { hp, wp } from './ResponsiveComponent'
import { colors } from '../constants/colors'
import PoppinsText from './PoppinsText'
import { Fonts } from '../constants/fonts'
import { Images } from '../Images'


export const CustomTextInput = ({ numberOfLines, autoCapitalize, secureTextEntry, value, onPress,
    placeholderTextColor, editable, keyboardType, multiline, placeholder, onChangeText, containerStyle, inputStyle, }) => {

    return (
        <View style={{}}>
            <TouchableOpacity activeOpacity={0.9} onPress={onPress} style={[styles.inputContainer, containerStyle]}>
                <View style={{ alignSelf: 'center', justifyContent: 'center' }}>
                    <TextInput
                        value={value}
                        editable={editable ?? !onPress}
                        multiline={multiline}
                        placeholder={placeholder}
                        onChangeText={onChangeText}
                        keyboardType={keyboardType}
                        cursorColor={colors.white}
                        autoCapitalize={autoCapitalize ?? 'none'}
                        numberOfLines={numberOfLines}
                        secureTextEntry={secureTextEntry}
                        style={[styles.input, inputStyle]}
                        placeholderTextColor={placeholderTextColor ?? colors?.gray1}
                        textAlignVertical="center"
                        textAlign="center"
                    />
                </View>
            </TouchableOpacity>
        </View>
    )
}

export const CustomTextInput1 = ({ numberOfLines, leftImage, autoCapitalize, secureTextEntry, rightText, dropDown, onPressRightText,
    value, error, onPress, onPressIcon, placeholderTextColor, editable, keyboardType, multiline, placeholder, dollarAmount, coinLogo,
    onChangeText, iconName, iconType, iconColor, iconSize, containerStyle, inputStyle, iconStyle, rightImage, onPressRightImage, title }) => {

    return (
        <View style={{}}>

            <TouchableOpacity activeOpacity={0.9} onPress={onPress} style={[styles.inputContainer1, containerStyle]}>


                <View style={{}}>

                    <TextInput
                        value={value}
                        editable={editable ?? !onPress}
                        multiline={multiline ? multiline : true}
                        placeholder={placeholder}
                        onChangeText={onChangeText}
                        keyboardType={keyboardType}
                        cursorColor={colors.white}
                        autoCapitalize={autoCapitalize ?? 'none'}
                        numberOfLines={numberOfLines}
                        secureTextEntry={secureTextEntry}
                        style={[styles.input1, inputStyle]}
                        placeholderTextColor={placeholderTextColor ?? colors?.gray1}
                        textAlign="left"
                    />
                </View>




                {/* {rightText ?
                    <TouchableOpacity activeOpacity={0.8} onPress={onPressRightText} style={appStyles.row}>
                        {coinLogo ?
                            <Image source={coinLogo} resizeMode='contain' style={styles.coinLogo} />
                            : null}
                        <PoppinsText style={styles.rightText}>{rightText}</PoppinsText>
                        <Image source={dropDown} resizeMode='contain' style={styles.dropDown} />
                    </TouchableOpacity>
                    : null}

                {rightImage ?
                    <TouchableOpacity activeOpacity={0.5} onPress={onPressRightImage} style={{ alignSelf: 'center' }}>
                        <Image source={rightImage} resizeMode='contain' style={{
                            ...styles.rightImage,
                        }} />
                    </TouchableOpacity>

                    :
                    iconName ?
                        <Icon name={iconName} type={iconType} color={iconColor ?? colors?.white} size={iconSize ?? totalSize(2.2)} style={[styles?.icon, iconStyle]} onPress={onPressIcon} />
                        : null} */}

            </TouchableOpacity>
            {/* {error &&
                <View >
                    <Spacer customHeight={height(1)} />
                    <PoppinsText style={[appStyles?.smallText, { color: colors?.error }]}>{error}</PoppinsText>
                </View>
            } */}

        </View>
    )
}


export const CustomTextInput2 = ({ numberOfLines, leftImage, autoCapitalize, secureTextEntry, rightText, dropDown, onPressRightText,
    value, error, onPress, placeholderTextColor, editable, keyboardType, multiline, placeholder, coinLogo,
    onChangeText, containerStyle, inputStyle, rightImage, rightImage1, onPressRightImage, title }) => {

    return (
        <View style={{}}>

            <ImageBackground source={Images.authMainRoundBox} resizeMode='contain' style={[styles.authMainRoundBox]}>
                <TouchableOpacity activeOpacity={0.9} onPress={onPress} style={[styles.inputContainer, containerStyle]}>
                    <View>
                        {title ?
                            <View style={{ height: hp(2.6), marginBottom: hp(0.4) }}>
                                <Spacer />
                                <PoppinsText style={styles.titleText}>{title}</PoppinsText>
                            </View>
                            : null}

                        <View style={appStyles.rowBasic}>
                            {leftImage ?
                                <Image source={leftImage} resizeMode='contain' style={styles.leftImage} />
                                : null}

                            <TextInput
                                value={value}
                                editable={editable ?? !onPress}
                                multiline={multiline}
                                placeholder={placeholder}
                                onChangeText={onChangeText}
                                keyboardType={keyboardType}
                                cursorColor={colors.white}
                                autoCapitalize={autoCapitalize ?? 'none'}
                                numberOfLines={numberOfLines}
                                secureTextEntry={secureTextEntry}
                                style={[styles.input, inputStyle]}
                                placeholderTextColor={placeholderTextColor ?? colors?.gray1
                                }
                            />
                        </View>
                    </View>


                    {rightText ?
                        <TouchableOpacity activeOpacity={0.8} onPress={onPressRightText} style={appStyles.row}>
                            {coinLogo ?
                                <Image source={coinLogo} resizeMode='contain' style={styles.coinLogo} />
                                : null}
                            <PoppinsText style={styles.rightText}>{rightText}</PoppinsText>
                            <Image source={dropDown} resizeMode='contain' style={styles.dropDown} />
                        </TouchableOpacity>
                        : null}

                    {rightImage ?
                        <TouchableOpacity activeOpacity={0.5} onPress={onPressRightImage} style={{ alignSelf: 'center' }}>
                            <Image source={rightImage} resizeMode='contain' style={{
                                width: wp(9.5),
                                height: wp(4.5),
                            }} />
                        </TouchableOpacity>
                        : null}

                    {rightImage1 ?
                        <TouchableOpacity activeOpacity={0.5} onPress={onPressRightImage} style={{ alignSelf: 'center' }}>
                            <Image source={rightImage1} resizeMode='contain' style={{
                                width: wp(6),
                                height: wp(6),
                            }} />
                        </TouchableOpacity>
                        : null}
                </TouchableOpacity>
                {error &&
                    <View >
                        <Spacer customHeight={height(1)} />
                        <PoppinsText style={[appStyles?.smallText, { color: colors?.error }]}>{error}</PoppinsText>
                    </View>
                }
            </ImageBackground>

        </View>
    )
}


const styles = StyleSheet.create({
    leftImage: {
        width: wp(4.5),
        height: wp(4.5),
        marginRight: wp(2),
        paddingHorizontal: wp(3)
    },
    titleText: {
        fontSize: 12,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.white,
    },
    inputContainer: {
        width: wp(92),
        borderRadius: 10,
        alignSelf: 'center',
        paddingVertical: hp(0.7),
        backgroundColor: colors.btnDisableColor,
        justifyContent: 'center',

    },
    authMainRoundBox: {
        width: wp(92),
        paddingHorizontal: wp(5),
        borderRadius: 100,
        alignSelf: 'center',
        paddingVertical: hp(3),
    },
    authMainRoundBox1: {
        width: wp(92),
        paddingHorizontal: wp(5),
        borderRadius: 100,
        alignSelf: 'center',
        paddingVertical: hp(1),
    },
    input: {
        width: wp(43),
        color: colors.white,
        textAlign: 'center',
        textAlignVertical: 'center',
    },

    otpContainer: {
        width: width(85),
        alignSelf: 'center'
    },
    pinCodeContainer: {
        width: width(14),
        height: width(15),
    },
    pinCodeText: {
        fontSize: totalSize(1.6),
        color: colors?.appColorFaded,
    },
    focusStick: {
        backgroundColor: colors?.appBgColor1,
        height: height(2)
    },
    placeholderText: {
        fontSize: totalSize(1.6)
    },
    rightImage: {
        width: wp(5),
        height: wp(5),
        alignSelf: 'center'
    },
    dollarAmount: {
        fontSize: 10,
        color: colors.gray3,
    },
    rightText: {
        fontSize: 14,
        color: colors.gray9,
    },
    dropDown: {
        width: wp(4.5),
        height: wp(4.5),
        alignSelf: 'center',
        marginLeft: wp(3)
    },
    coinLogo: {
        width: wp(7.5),
        height: wp(7.5),
        alignSelf: 'center',
        marginRight: wp(3)
    },
    // CustomTextInput1
    inputContainer1: {
        width: wp(92),
        height: hp(13),
        borderRadius: 10,
        paddingVertical: hp(0.7),
        backgroundColor: colors.btnDisableColor,
    },
    input1: {
        color: colors.white,
        textAlign: 'center',
        paddingHorizontal: wp(4)
    },

})