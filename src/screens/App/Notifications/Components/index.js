
import { StyleSheet, Image, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { appStyles } from '../../../../utilities/appStyles'
import PoppinsText from '../../../../components/PoppinsText'
import { hp, wp } from '../../../../components/ResponsiveComponent'
import { colors } from '../../../../constants/colors'
import { Fonts } from '../../../../constants/fonts'
import Spacer from '../../../../components/Spacer'

export const NotificationPreferencesCard = ({ title, subTitle, toggleLOgo, onPressToggle }) => {
    return (
        <View style={[styles.notificationPreferencesCard, appStyles.row]}>
            <View>
                <PoppinsText style={styles.title}>{title}</PoppinsText>
                {subTitle ?
                    <PoppinsText style={styles.subTitle}>{subTitle}</PoppinsText>
                    : null}
            </View>
            <TouchableOpacity activeOpacity={0.8} onPress={onPressToggle}>
                <Image source={toggleLOgo} resizeMode='contain' style={styles.toggleLOgo} />
            </TouchableOpacity>
        </View>
    )
}

export const BalanceAndTradingCard = ({ title1, description1, title2, description2, title3, description3, title4, description4,
    sentTokenLogo, receivedTokenLogo, swapToggleLogo, balanceChangesToggleLogo,
    onPressSentTokenToggle, onPressBalanceChangesToggle, onPressSwapToggle, onPressReceivedTokenToggle }) => {
    return (
        <View>
            <View style={styles.cardContainer}>
                <View style={appStyles.row}>
                    <View>
                        <PoppinsText style={styles.leftText}>{title1}</PoppinsText>
                        <PoppinsText style={styles.leftText}>{description1}</PoppinsText>
                    </View>
                    <TouchableOpacity activeOpacity={0.8} onPress={onPressSentTokenToggle}>
                        <Image source={sentTokenLogo} resizeMode='contain' style={styles.toggleLOgo} />
                    </TouchableOpacity>
                </View>

            </View>

            <Spacer customHeight={hp(0.2)} />
            <View style={[styles.cardContainer2]}>

                <View style={appStyles.row}>
                    <View>
                        <PoppinsText style={styles.leftText}>{title2}</PoppinsText>
                        <PoppinsText style={styles.descriptionText}>{description2}</PoppinsText>
                    </View>
                    <TouchableOpacity activeOpacity={0.8} onPress={onPressReceivedTokenToggle}>
                        <Image source={receivedTokenLogo} resizeMode='contain' style={styles.toggleLOgo} />
                    </TouchableOpacity>
                </View>

            </View>

            <Spacer customHeight={hp(0.2)} />
            <View style={[styles.cardContainer2]}>

                <View style={appStyles.row}>
                    <View>

                        <PoppinsText style={styles.leftText}>{title3}</PoppinsText>
                        <PoppinsText style={styles.leftText}>{description3}</PoppinsText>
                    </View>
                    <TouchableOpacity activeOpacity={0.8} onPress={onPressSwapToggle}>
                        <Image source={swapToggleLogo} resizeMode='contain' style={styles.toggleLOgo} />
                    </TouchableOpacity>
                </View>

            </View>

            <Spacer customHeight={hp(0.2)} />
            <View style={[styles.cardContainer1]}>

                <View style={appStyles.row}>
                    <View>

                        <PoppinsText style={styles.leftText}>{title4}</PoppinsText>
                        <PoppinsText style={styles.leftText}>{description4}</PoppinsText>
                    </View>
                    <TouchableOpacity activeOpacity={0.8} onPress={onPressBalanceChangesToggle}>
                        <Image source={balanceChangesToggleLogo} resizeMode='contain' style={styles.toggleLOgo} />
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    notificationPreferencesCard: {
        padding: wp(4),
        borderRadius: 12,
        backgroundColor: colors.gray14,
    },
    title: {
        fontSize: 13,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray26
    },
    subTitle: {
        fontSize: 12,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray16
    },
    toggleLOgo: {
        width: wp(11),
        height: wp(6.5)
    },
    // BalanceAndTradingCard
    cardContainer: {
        width: wp(92),
        alignSelf: 'center',
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        backgroundColor: colors.gray23,
        padding: wp(3)
    },
    cardContainer1: {
        width: wp(92),
        alignSelf: 'center',
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        backgroundColor: colors.gray23,
        padding: wp(3)
    },
    cardContainer2: {
        width: wp(92),
        alignSelf: 'center',
        backgroundColor: colors.gray23,
        padding: wp(3)
    },
    leftText: {
        fontSize: 13,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray27
    },
    descriptionText: {
        fontSize: 11,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray53
    },


})