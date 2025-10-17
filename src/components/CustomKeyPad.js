import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
} from 'react-native';
import { Images } from '../Images';
import { colors } from '../constants/colors';
import { hp, wp } from './ResponsiveComponent';
import { Fonts } from '../constants/fonts';
import PoppinsText from './PoppinsText';

export const CustomKeyPad = ({ onPressNumber, onDelete, onLanguage }) => {
    const buttons = [
        { num: '1', letters: '' },
        { num: '2', letters: 'ABC' },
        { num: '3', letters: 'DEF' },
        { num: '4', letters: 'GHI' },
        { num: '5', letters: 'JKL' },
        { num: '6', letters: 'MNO' },
        { num: '7', letters: 'PQRS' },
        { num: '8', letters: 'TUV' },
        { num: '9', letters: 'WXYZ' },
        { num: '.', letters: '' },
        { num: '0', letters: '' },
        { num: '⌫', letters: '', icon: 'delete' },
        { num: '', letters: '', icon: '🌐' },
    ];

    return (
        <View style={styles.container}>
            {buttons.map((item, index) => {
                if (item.icon === '🌐') {
                    return (
                        <TouchableOpacity
                            key={index}
                            style={styles.worldButton}
                            onPress={onLanguage}>
                            <PoppinsText style={[styles.iconText]}>{item.icon}</PoppinsText>
                        </TouchableOpacity>
                    );
                }
                if (item.icon === 'delete') {
                    return (
                        <TouchableOpacity
                            key={index}
                            style={styles.crossButton}
                            onPress={onDelete}>
                            <Image
                                source={Images.crossWithBorder}
                                style={{ width: wp(5), height: wp(4.5), tintColor: colors.gray74 }}
                            />
                        </TouchableOpacity>
                    );
                }

                return (
                    <TouchableOpacity
                        key={index}
                        style={styles.button}
                        onPress={() => onPressNumber(item.num)}>
                        <PoppinsText style={styles.number}>{item.num}</PoppinsText>
                        {item.letters ? <PoppinsText style={styles.letters}>{item.letters}</PoppinsText> : null}
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: colors.gray73,
        paddingVertical: hp(1)
    },
    button: {
        width: wp(30.5),
        aspectRatio: 2.5,
        backgroundColor: colors.gray76,
        margin: '1%',
        borderRadius: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    crossButton: {
        width: wp(29.5),
        aspectRatio: 2.5,
        margin: '1.5%',
        borderRadius: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    worldButton: {
        flex: 1,
        width: wp(29.5),
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingHorizontal: wp(5),
        marginTop: hp(2)
    },
    number: {
        fontSize: 22,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray74,
    },
    letters: {
        fontSize: 9,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray75,
        marginTop: -3,
    },
    iconText: {
        fontSize: 24,
        color: colors.gray74,
    },
});
