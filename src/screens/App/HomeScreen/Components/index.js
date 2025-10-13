import { FlatList, Image, ImageBackground, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Images } from '../../../../Images'
import { hp, wp } from '../../../../components/ResponsiveComponent'
import PoppinsText from '../../../../components/PoppinsText'
import { Fonts } from '../../../../constants/fonts'
import { colors } from '../../../../constants/colors'
import { appStyles } from '../../../../utilities/appStyles/index'
import { HomeTabs, tokensData } from '../../../../components/dummyData'
import Spacer, { HorizontalSpacer } from '../../../../components/Spacer'

export const BalanceCrad = ({ totalBalane, dollarAmount, percentageText }) => {
    return (
        <ImageBackground source={Images.balanceCard} resizeMode='contain' style={styles.balanceCard}>
            <View style={styles.card}>
                <View style={styles.balanceSection}>
                    <PoppinsText style={styles.title}>Your Balance</PoppinsText>
                    <PoppinsText style={styles.balanceText}>{totalBalane}</PoppinsText>
                </View>

                <View style={{ ...appStyles.rowBasic, paddingHorizontal: wp(3) }}>
                    <ImageBackground source={Images.dollarAmountBox} resizeMode='contain' style={styles.dollarAmountBox}>
                        <View style={appStyles.rowBasic}>
                            <Image source={Images.greenArrowUp} resizeMode='contain' style={styles.greenArrowUp} />
                            <PoppinsText style={styles.dollarAmount}>{dollarAmount}</PoppinsText>
                        </View>
                    </ImageBackground>

                    <ImageBackground source={Images.percentageBox} resizeMode='contain' style={styles.percentageBox}>
                        <PoppinsText style={styles.percentageText}>{percentageText}</PoppinsText>
                    </ImageBackground>
                </View>
            </View>
        </ImageBackground>
    )
}

export const RowTabs = ({ onPressTab }) => {
    return (
        <FlatList
            data={HomeTabs}
            horizontal
            removeClippedSubviews={false}
            ItemSeparatorComponent={() => <HorizontalSpacer customWidth={wp(3)} />}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: wp(1), paddingVertical: hp(1) }}
            renderItem={({ item }) => {
                return (
                    <TouchableOpacity activeOpacity={0.8} style={{}} onPress={() => onPressTab(item)}>
                        <Image source={item.tabLogo} resizeMode='contain' style={styles.tabLogo} />
                        <Spacer customHeight={hp(1)} />
                        <PoppinsText style={styles.tabText}>{item.text}</PoppinsText>
                        <Spacer />
                    </TouchableOpacity>
                )
            }}
        />
    )
}

export const TokensCard = ({ tokenData, isLoading, onPressToken }) => {
    // Show loading state or fallback to dummy data if no token data
    const dataToShow = tokenData && tokenData.length > 0 ? tokenData : tokensData;

    console.log('TokensCard tokenData:', tokenData);

    return (
        <FlatList
            data={dataToShow}
            showsVerticalScrollIndicator={false}
            removeClippedSubviews={false}
            contentContainerStyle={{ paddingBottom: hp(70) }}
            renderItem={({ item, index }) => {


                return (
                    <TouchableOpacity activeOpacity={0.8} onPress={() => onPressToken(item)} style={{ paddingVertical: hp(0.7) }}>
                        <ImageBackground source={Images.authMainRoundBox} resizeMode='contain' style={styles.authMainRoundBox}>
                            <View style={appStyles.row}>
                                <View style={appStyles.rowBasic}>
                                    <Image source={{ uri: String(item?.tokenLogo) }} resizeMode='contain' style={styles.tokenLogo} />
                                    <View>
                                        <PoppinsText style={styles.tokenName}>{item?.tokenName}</PoppinsText>
                                        <PoppinsText style={styles.tokenSymbol}>{item?.tokenSymbol}</PoppinsText>
                                    </View>
                                </View>
                                <View>
                                    <PoppinsText style={styles.tokenPrice}>{item?.currentPrice}</PoppinsText>
                                    <PoppinsText style={styles.dollarPrice}>{item?.dollarPrice}</PoppinsText>
                                </View>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>

                )
            }}
        />

    )
}

const styles = StyleSheet.create({
    // BalanceCrad
    balanceCard: {
        width: wp(92),
        height: hp(21)
    },
    card: {
        width: wp(92),
        paddingHorizontal: wp(3),
        paddingVertical: hp(3),
        borderRadius: 32,
    },
    balanceSection: {
        // flex: 1,
        justifyContent: 'center',
        paddingHorizontal: wp(4)
    },
    title: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.white,
    },
    balanceText: {
        fontSize: 32,
        fontFamily: Fonts.Poppins.SemiBold,
        color: colors.white,
    },
    dollarAmountBox: {
        paddingHorizontal: wp(3),
        paddingVertical: hp(1),
        justifyContent: 'center',
        alignItems: 'center',
    },
    percentageBox: {
        paddingHorizontal: wp(3),
        paddingVertical: hp(1),
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: wp(3),
    },
    greenArrowUp: {
        width: wp(3),
        height: wp(3),
        marginRight: wp(1.5),
    },
    dollarAmount: {
        fontSize: 12,
        fontFamily: Fonts.Poppins.Medium,
        color: colors.green,
    },
    percentageText: {
        fontSize: 12,
        fontFamily: Fonts.Poppins.Medium,
        color: colors.green,
        textAlign: 'center',
    },
    // RowTabs
    tabLogo: {
        width: wp(15),
        height: wp(15),
        alignSelf: 'center'
    },
    tabText: {
        fontSize: 12,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.white,
        textAlign: 'center'
    },
    // TokensCard
    authMainRoundBox: {
        width: wp(92),
        height: wp(18),
        paddingHorizontal: wp(3),
        paddingVertical: hp(2),
        borderRadius: 32,
    },
    tokenLogo: {
        width: wp(10),
        height: wp(10),
        marginRight: wp(3)
    },
    tokenName: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.white
    },
    tokenSymbol: {
        fontSize: 12,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray7
    },
    tokenPrice: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.white,
        textAlign: 'right'
    },
    dollarPrice: {
        fontSize: 12,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray7,
        textAlign: 'right'
    }
})