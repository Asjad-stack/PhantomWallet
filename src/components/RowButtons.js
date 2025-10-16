import React from 'react'
import { ImageBackground, StyleSheet, TouchableOpacity, View } from "react-native";
import { hp, wp } from "./ResponsiveComponent";
import SimpleButton from "./SimpleButton";
import { colors } from '../constants/colors';
import { Images } from '../Images';
import { Fonts } from '../constants/fonts';
import PoppinsText from './PoppinsText';

export const RowButtons = ({
    onPressBtn1,
    onPressBtn2,
    style,
    wrapperStyle,
    btn1title,
    btn2title,
    styleBtn,
    btnImage2,
    btnImage1,
    tintColor1,
    tintColor2,
    btntitle,
    btntitle1,
    Loading,
    disable,
    disablebtn2,
    secondLoading,
    titlebtn1,
    titlebtn2,
    titleColor1,
    titleColor2,
}) => {
    return (
        <View style={[styles.btnRow, wrapperStyle]}>


            {/* <ImageBackground source={Images.rowLeftButton} resizeMode='contain' style={styles.simpleRoundBox}>
                <TouchableOpacity activeOpacity={0.8} style={{ flex: 1, justifyContent: 'center' }} onPress={onPressBtn1}>
                    <PoppinsText style={styles.btn1Title}>{btn1title}</PoppinsText>
                </TouchableOpacity>
            </ImageBackground>



            <ImageBackground source={Images.rowRightButton} resizeMode='contain' style={styles.simpleRoundBox}>
                <TouchableOpacity activeOpacity={0.8} style={{ flex: 1, justifyContent: 'center' }} onPress={onPressBtn2}>
                    <PoppinsText style={styles.btn1Title}>{btn2title}</PoppinsText>
                </TouchableOpacity>
            </ImageBackground> */}


            <SimpleButton
                source={btnImage1}
                Loading={secondLoading}

                tintColor={tintColor1}
                title={titlebtn1 ? titlebtn1 : 'Cancel'}
                onPress={onPressBtn1}
                btntitle={btntitle}
                titleColor={titleColor1}

                disabled={disablebtn2}
                outerBox={[{ width: wp(45), backgroundColor: colors.white, borderColor: colors.appButtonColor1, borderWidth: 1, borderRadius: 80 }, style]}
            />


            <SimpleButton
                source={btnImage2}
                tintColor={tintColor2}
                title={titlebtn2 ? titlebtn2 : 'Activate'}
                onPress={onPressBtn2}
                btntitle={btntitle1}
                Loading={Loading}
                titleColor={titleColor2}
                disabled={disable}
                outerBox={[{ width: wp(45), backgroundColor: colors.appButtonColor1, borderColor: colors.appButtonColor1, borderWidth: 1, borderRadius: 80 }, styleBtn]}
            />


        </View>
    );
};

const styles = StyleSheet.create({
    btnRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: wp(90),
        paddingHorizontal: wp(2)
    },
    btn1Title:
    {
        fontSize: 16,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.white,
        textAlign: 'center',
    },
    simpleRoundBox: {
        width: wp(42),
        height: hp(7),
        // alignSelf: 'center',
        // alignContent: 'center',
        // alignItems: 'center'
    }
})