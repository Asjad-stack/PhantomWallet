import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { allSearchListData, trendingTokensData } from '../../../../components/dummyData'
import Spacer, { HorizontalSpacer } from '../../../../components/Spacer'
import { appStyles } from '../../../../utilities/appStyles'
import PoppinsText from '../../../../components/PoppinsText'
import { hp, wp } from '../../../../components/ResponsiveComponent'
import { colors } from '../../../../constants/colors'
import { Fonts } from '../../../../constants/fonts'
import { Images } from '../../../../Images'

export const SearchList = () => {
    return (
        <FlatList
            data={allSearchListData}
            horizontal
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => <HorizontalSpacer customWidth={wp(2)} />}
            removeClippedSubviews={false}
            renderItem={({ item }) => {
                return (
                    <TouchableOpacity activeOpacity={0.8} onPress={() => { }} style={{ ...styles.searchItemCard }}>
                        <View style={appStyles.rowBasic}>
                            <Image source={item.tokenLogo} resizeMode='contain' style={styles.tokenLogo} />
                            <PoppinsText style={styles.tokenName}>{item.tokenName}</PoppinsText>
                        </View>
                    </TouchableOpacity>
                )
            }}
        />
    )
}

export const TrendingTokens = ({ data }) => {

    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            nestedScrollEnabled={true}
            showsVerticalScrollIndicator={false}
            removeClippedSubviews={false}
            ItemSeparatorComponent={() => <Spacer />}
            contentContainerStyle={{ paddingBottom: hp(50) }}
            renderItem={({ item }) => {
                return (
                    <View style={{ ...appStyles.row, borderBottomWidth: 1, borderBottomColor: colors.gray96, paddingBottom: hp(2), paddingHorizontal: wp(4) }}>
                        <View style={{ ...appStyles.rowBasic, }}>
                            <View style={{ marginRight: wp(3) }}>
                                <Image source={item.tokenLogo} resizeMode='contain' style={styles.trendingTokenLogos} />
                                <Image source={item.chainLogo} resizeMode='contain' style={styles.chainLogo} />
                            </View>
                            <View>
                                <PoppinsText style={styles.trendingTokenName}>{item.name}</PoppinsText>
                                <View style={appStyles.rowBasic}>
                                    <PoppinsText style={styles.trendingTokenSymbol}>{item.symbol}</PoppinsText>
                                    <PoppinsText style={{
                                        ...styles.trendingTokenPriceChange,
                                        color: item.change.includes('+') ? colors.green4 : colors.red1,

                                    }}>{item.change}</PoppinsText>
                                </View>
                            </View>
                        </View>
                        <Image source={Images.swapWithRound} resizeMode='contain' style={styles.swapWithRound} />
                    </View>
                )
            }}
        />
    )
}

const styles = StyleSheet.create({
    // SearchList
    searchItemCard: {
        // width: wp(28),
        borderRadius: 15,
        padding: wp(3),
        backgroundColor: colors.gray40,
        alignSelf: 'flex-start'
    },
    tokenLogo: {
        width: wp(7.5),
        height: wp(7.5),
        marginRight: wp(2),
    },
    tokenName: {
        fontSize: 12,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray93,
    },
    // TrendingTokens
    trendingTokenLogos: {
        width: wp(10),
        height: wp(10),
    },
    chainLogo: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: wp(4),
        height: wp(4),
    },
    trendingTokenName: {
        fontSize: 13,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray95,
    },
    trendingTokenSymbol: {
        fontSize: 12,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray20,
    },
    trendingTokenPriceChange: {
        fontSize: 12,
        fontFamily: Fonts.Poppins.Regular,
        marginLeft: wp(8)
    },
    swapWithRound: {
        width: wp(7),
        height: wp(7),
    }
})