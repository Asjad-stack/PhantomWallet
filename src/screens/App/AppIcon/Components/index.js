import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { appStyles } from '../../../../utilities/appStyles'
import { Images } from '../../../../Images'
import PoppinsText from '../../../../components/PoppinsText'
import Spacer from '../../../../components/Spacer'
import { hp, wp } from '../../../../components/ResponsiveComponent'
import { colors } from '../../../../constants/colors'
import { Fonts } from '../../../../constants/fonts'

export const AppIconCard = () => {
    const [selectedAppIcon, setSelectedAppIcon] = useState('default');
    return (
        <View style={{ paddingHorizontal: wp(4) }}>
            <TouchableOpacity activeOpacity={0.8} onPress={() => setSelectedAppIcon('default')} style={[appStyles.row, styles.container]}>
                <View style={appStyles.rowBasic}>
                    <Image source={Images.defaultAppIcon} resizeMode='contain' style={styles.appIcon} />
                    <PoppinsText style={styles.title}>{'Default'}</PoppinsText>
                </View>
                <Image source={selectedAppIcon === 'default' ? Images.radioCheckRound : Images.radioUnFill} resizeMode='contain' style={styles.radioBtn} />
            </TouchableOpacity>
            <Spacer customHeight={hp(0.2)} />
            <TouchableOpacity activeOpacity={0.8} onPress={() => setSelectedAppIcon('Light')} style={[appStyles.row, styles.container1]}>
                <View style={appStyles.rowBasic}>
                    <Image source={Images.lightAppIcon} resizeMode='contain' style={styles.appIcon} />
                    <PoppinsText style={styles.title}>{'Light'}</PoppinsText>
                </View>
                <Image source={selectedAppIcon === 'Light' ? Images.radioCheckRound : Images.radioUnFill} resizeMode='contain' style={styles.radioBtn} />
            </TouchableOpacity>
            <Spacer customHeight={hp(0.2)} />
            <TouchableOpacity activeOpacity={0.8} onPress={() => setSelectedAppIcon('Dark')} style={[appStyles.row, styles.container2]}>
                <View style={appStyles.rowBasic}>
                    <Image source={Images.darkAppIcon} resizeMode='contain' style={styles.appIcon} />
                    <PoppinsText style={styles.title}>{'Dark'}</PoppinsText>
                </View>
                <Image source={selectedAppIcon === 'Dark' ? Images.radioCheckRound : Images.radioUnFill} resizeMode='contain' style={styles.radioBtn} />
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        padding: wp(3),
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        backgroundColor: colors.gray23
    },
    container1: {
        padding: wp(3),
        backgroundColor: colors.gray23
    },
    container2: {
        padding: wp(3),
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        backgroundColor: colors.gray23
    },
    appIcon: {
        width: wp(9),
        height: wp(9),
        marginRight: wp(3),
        borderRadius: 100
    },
    title: {
        fontSize: 13,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray25
    },
    radioBtn: {
        width: wp(4),
        height: wp(4)
    }
})