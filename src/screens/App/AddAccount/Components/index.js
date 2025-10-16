import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { appStyles } from '../../../../utilities/appStyles'
import { Images } from '../../../../Images'
import PoppinsText from '../../../../components/PoppinsText'
import { hp, wp } from '../../../../components/ResponsiveComponent'
import { Fonts } from '../../../../constants/fonts'
import { colors } from '../../../../constants/colors'
import Spacer from '../../../../components/Spacer'

export const AddAccountHeader = () => {
    return (
        <View style={appStyles.row}>
            <View style={appStyles.rowBasic}>
                <Image source={Images.profile1} resizeMode='contain' style={styles.profile1} />
                <View>
                    <PoppinsText style={styles.userName}>@alihussain1997</PoppinsText>
                    <PoppinsText style={styles.address}>O followers</PoppinsText>
                </View>
            </View>
            <TouchableOpacity activeOpacity={0.8} onPress={() => { }}>
                <Image source={Images.cross} resizeMode='contain' style={styles.cross} />
            </TouchableOpacity>
        </View>
    )
}

export const RowTabs = ({ }) => {
    return (
        <View style={appStyles.row}>
            <TouchableOpacity activeOpacity={0.8} onPress={() => { }} style={styles.tabBgView}>
                <View style={{ alignSelf: 'center' }}>
                    <Image source={Images.onePerson} resizeMode='contain' style={styles.person} />
                    <Spacer customHeight={hp(1)} />
                    <PoppinsText style={styles.profileText}>Profile</PoppinsText>
                </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} onPress={() => { }} style={styles.tabBgView}>
                <View style={{ alignSelf: 'center' }}>
                    <Image source={Images.settngs} resizeMode='contain' style={styles.settings} />
                    <Spacer customHeight={hp(1)} />
                    <PoppinsText style={styles.settingsText}>Settings</PoppinsText>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export const AccountsCard = ({ }) => {
    return (
        <View style={[styles.accountsCardBgView, appStyles.row]}>
            <View style={appStyles.rowBasic}>
                <Image />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    // AddAccountHeader
    profile1: {
        width: wp(9),
        height: wp(9),
        marginRight: wp(3)
    },
    userName: {
        fontSize: 17,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray44
    },
    address: {
        fontSize: 11,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray45
    },
    cross: {
        width: wp(4),
        height: wp(4)
    },
    // RowTabs
    tabBgView: {
        width: wp(45),
        borderWidth: 1,
        borderColor: colors.gray46,
        padding: wp(4),
        borderRadius: 13,
        backgroundColor: colors.gray23
    },
    person: {
        width: wp(4.5),
        height: wp(5),
        alignSelf: 'center'
    },
    profileText: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray47,
        textAlign: 'center'
    },
    settings: {
        width: wp(6),
        height: wp(6),
        alignSelf: 'center'
    },
    settingsText: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray47,
        textAlign: 'center'
    },
    // AccountsCard
    accountsCardBgView: {
        // width: wp(45),
        borderWidth: 1,
        borderColor: colors.gray46,
        padding: wp(4),
        borderRadius: 13,
        backgroundColor: colors.gray23
    }


})