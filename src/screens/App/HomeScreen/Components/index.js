import { FlatList, Image, ImageBackground, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Images } from '../../../../Images'
import { hp, wp } from '../../../../components/ResponsiveComponent'
import PoppinsText from '../../../../components/PoppinsText'
import { Fonts } from '../../../../constants/fonts'
import { colors } from '../../../../constants/colors'
import { appStyles } from '../../../../utilities/appStyles/index'
import { HomeTabs, HorizontalSrcollList, tokensData } from '../../../../components/dummyData'
import Spacer, { HorizontalSpacer } from '../../../../components/Spacer'


export const AccountCard = ({ profile, accountName, accountNumber, rightImage1, rightImage2, onPressRightImage1, onPressRightImage2, onPressAccount }) => {
    return (
        <View style={appStyles.row}>
            <TouchableOpacity activeOpacity={0.8} onPress={onPressAccount} style={appStyles.rowBasic}>
                <Image source={profile} resizeMode='contain' style={styles.profile} />
                <View>
                    <PoppinsText style={styles.accountName}>{accountName}</PoppinsText>
                    <PoppinsText style={styles.accountBalance}>{accountNumber}</PoppinsText>
                </View>
            </TouchableOpacity>
            <View style={appStyles.rowBasic}>
                <TouchableOpacity activeOpacity={0.8} onPress={onPressRightImage1}>
                    <Image source={rightImage1} resizeMode='contain' style={styles.rightImage1} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} onPress={onPressRightImage2}>
                    <Image source={rightImage2} resizeMode='contain' style={styles.rightImage2} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export const BalanceCard = ({ }) => {
    return (
        <View>
            <PoppinsText style={styles.balanceText}>$2.46</PoppinsText>
            <View style={{ ...appStyles.rowBasic, alignSelf: 'center' }}>
                <PoppinsText style={styles.amount}>{"+$0.00242559"}</PoppinsText>
                <View style={styles.dollarAmountBox}>
                    <PoppinsText style={styles.dollarAmount}>+0.10%</PoppinsText>
                </View>
            </View>
        </View>
    )
}

export const RowTabs = ({ onPressTab, }) => {
    return (
        <FlatList
            data={HomeTabs}
            horizontal
            removeClippedSubviews={false}
            ItemSeparatorComponent={() => <HorizontalSpacer customWidth={wp(1)} />}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{}}
            renderItem={({ item }) => {
                return (
                    <TouchableOpacity activeOpacity={0.8} style={{}} onPress={() => onPressTab(item)}>
                        <Image source={item.tabLogo} resizeMode='contain' style={styles.tabLogo} />
                    </TouchableOpacity>
                )
            }}
        />
    )
}

export const HorizontalSrcoll = ({ onPress, onPressCross }) => {
    return (
        <FlatList
            data={HorizontalSrcollList}
            horizontal
            ItemSeparatorComponent={() => <HorizontalSpacer customWidth={wp(2)} />}
            removeClippedSubviews={false}
            renderItem={({ item, index }) => {
                return (
                    <TouchableOpacity activeOpacity={0.8} onPress={() => onPress(item)} style={[appStyles.row, styles.horizontalBgView]}>
                        <View style={appStyles.rowBasic}>
                            <Image source={item.tokenLogo} resizeMode='contain' style={styles.customTokenLogo} />
                            <PoppinsText style={styles.customTitle}>{item?.title}</PoppinsText>
                        </View>
                        <TouchableOpacity activeOpacity={0.8} onPress={() => onPressCross(item)}>
                            <Image source={Images.cross} resizeMode='contain' style={styles.cross} />
                        </TouchableOpacity>
                    </TouchableOpacity>
                )
            }}
        />
    )
}

export const PrepView = ({ }) => {
    return (
        <View style={[appStyles.rowBasic, styles.horizontalBgView]}>
            <Image source={Images.prepLogo} resizeMode='contain' style={styles.perpLogo} />
            <PoppinsText style={styles.prepTitle}>{'Use perps to trade on an assets future price with leverage'}</PoppinsText>
        </View>
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
            ItemSeparatorComponent={() => <Spacer customHeight={hp(1.5)} />}
            contentContainerStyle={{ paddingBottom: hp(70) }}
            renderItem={({ item, index }) => {


                return (
                    <TouchableOpacity activeOpacity={0.8} onPress={() => onPressToken(item)} style={{ ...styles.tokenCardBgView, }}>
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
                    </TouchableOpacity>

                )
            }}
        />

    )
}

export const TokensTabs = ({ selectedTab, setSelectedTab }) => {
    return (
        <View style={appStyles.row}>
            <View style={appStyles.rowBasic}>
                <TouchableOpacity activeOpacity={0.8} onPress={() => setSelectedTab('tokens')}>
                    <PoppinsText style={{
                        ...styles.tabTitle,
                        color: selectedTab === 'tokens' ? colors.white : colors.gray43
                    }}>Tokens</PoppinsText>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} onPress={() => setSelectedTab('collectibles')} style={{ marginLeft: wp(5) }}>
                    <PoppinsText style={{
                        ...styles.tabTitle,
                        color: selectedTab === 'collectibles' ? colors.white : colors.gray43
                    }}>Collectibles</PoppinsText>
                </TouchableOpacity>
            </View>
            <TouchableOpacity activeOpacity={0.8} onPress={() => { }}>
                <Image source={Images.horizontallyDots} resizeMode='contain' style={styles.horizontallyDots} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    // AccountCard
    profile: {
        width: wp(9),
        height: wp(9),
        marginRight: wp(3)
    },
    accountName: {
        fontSize: 10,
        fontFamily: Fonts.Poppins.SemiBold,
        color: colors.gray37,
    },
    accountBalance: {
        fontSize: 18,
        fontFamily: Fonts.Poppins.SemiBold,
        color: colors.gray38,
    },
    rightImage1: {
        width: wp(5),
        height: wp(5),
        marginRight: wp(5),
    },
    rightImage2: {
        width: wp(5),
        height: wp(5),
    },

    // BalanceCard
    balanceText: {
        fontSize: 42,
        fontFamily: Fonts.Poppins.SemiBold,
        color: colors.white,
        textAlign: 'center'
    },
    amount: {
        fontSize: 16,
        fontFamily: Fonts.Poppins.Bold,
        color: colors.green,
        textAlign: 'center'
    },
    dollarAmountBox: {
        backgroundColor: colors.greenShadow,
        paddingHorizontal: wp(2),
        paddingVertical: hp(0.2),
        borderRadius: 6,
        marginLeft: wp(2)
    },
    dollarAmount: {
        fontSize: 12,
        fontFamily: Fonts.Poppins.Medium,
        color: colors.green,
    },

    // RowTabs
    tabLogo: {
        width: wp(22),
        height: hp(9),
    },
    tabText: {
        fontSize: 12,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.white,
        textAlign: 'center'
    },
    // TokensCard
    tokenCardBgView: {
        width: wp(90),
        paddingHorizontal: wp(3),
        backgroundColor: colors.gray23,
        paddingVertical: hp(1.2),
        borderRadius: 12,
    },
    tokenLogo: {
        width: wp(10),
        height: wp(10),
        marginRight: wp(3),
        borderRadius: 100
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
    },
    // HorizontalSrcoll
    horizontalBgView: {
        width: wp(90),
        height: hp(8),
        backgroundColor: colors.gray40,
        borderRadius: 12,
        paddingHorizontal: wp(4),
    },
    customTokenLogo: {
        width: wp(10.5),
        height: wp(10.5),
        marginRight: wp(3)
    },
    customTitle: {
        fontSize: 12,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray15,
        width: wp(60)
    },
    cross: {
        width: wp(3),
        height: wp(3),
    },
    // PrepView
    perpLogo: {
        width: wp(10.5),
        height: wp(5.5),
        marginRight: wp(3)
    },
    prepTitle: {
        fontSize: 12,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray41,
        width: wp(60)
    },
    // TokensTabs
    tabTitle: {
        fontSize: 17,
        fontFamily: Fonts.Poppins.SemiBold,
    },
    horizontallyDots: {
        width: wp(4),
        height: 6
    }
})