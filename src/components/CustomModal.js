


import React from 'react';
import {
    StyleSheet,
    View,
    Modal,
} from 'react-native';
import { colors } from '../constants/colors';
import { wp } from './ResponsiveComponent';

export const CustomModal = ({
    visible,
    onRequestClose,
    mainViewStyles,
    secondViewStyles,
    children,
}) => {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
            onRequestClose={onRequestClose}>
            <View activeOpacity={1} style={[styles.mainView, mainViewStyles]}>
                <View style={[styles.secondView, secondViewStyles]}>{children}</View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
        paddingHorizontal: wp(4),
        borderRadius: 8
    },
    secondView: {
        // backgroundColor: colors.gray22,
        justifyContent: 'center',
        borderRadius: 5,
    },
});
