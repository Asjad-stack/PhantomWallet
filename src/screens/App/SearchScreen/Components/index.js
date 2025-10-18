import { FlatList, Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { cryptoPairs, searchListData } from '../../../../components/dummyData'
import { hp, wp } from '../../../../components/ResponsiveComponent'
import { colors } from '../../../../constants/colors'
import { appStyles } from '../../../../utilities/appStyles'
import PoppinsText from '../../../../components/PoppinsText'
import { Fonts } from '../../../../constants/fonts'
import Spacer, { HorizontalSpacer } from '../../../../components/Spacer'

export const SearchList = () => {
    return (
        <FlatList
            data={searchListData}
            horizontal
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => <HorizontalSpacer customWidth={wp(2)} />}
            removeClippedSubviews={false}
            renderItem={({ item }) => {
                return (
                    <TouchableOpacity activeOpacity={0.8} onPress={() => { }} style={styles.searchItemCard}>
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

export const TrendingTokens = ({ }) => {
    return (
        <FlatList
            data={cryptoPairs}
            showsVerticalScrollIndicator={false}
            removeClippedSubviews={false}
            ItemSeparatorComponent={() => <Spacer />}
            renderItem={({ item }) => {
                return (
                    <View style={appStyles.row}>
                        <View style={appStyles.rowBasic}>
                            <Image source={item?.icon} resizeMode='contain' style={styles.tokenLogo1} />
                            <View>
                                <PoppinsText style={styles.tokenName}>{item?.tokenName}</PoppinsText>
                                <Spacer customHeight={hp(0.2)} />
                                <PoppinsText style={styles.leverage}>{item?.leverage}</PoppinsText>
                            </View>
                        </View>
                        <View>
                            <PoppinsText style={styles.dollarAmount}>{item?.dollarPrice}</PoppinsText>
                            <Spacer customHeight={hp(0.2)} />
                            <PoppinsText style={styles.percentageAmount}>{item?.change}</PoppinsText>
                        </View>
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
    tokenLogo1: {
        width: wp(10.5),
        height: wp(10.5),
        marginRight: wp(3),
        borderRadius: 100
    },
    tokenName: {
        fontSize: 13,
        fontFamily: Fonts.Poppins.Bold,
        color: colors.gray49,
    },
    leverage: {
        fontSize: 11,
        fontFamily: Fonts.Poppins.SemiBold,
        color: colors.gray61,
    },
    dollarAmount: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.SemiBold,
        color: colors.gray38,
        textAlign: 'right'
    },
    percentageAmount: {
        fontSize: 11,
        fontFamily: Fonts.Poppins.SemiBold,
        color: colors.green3,
        textAlign: 'right'
    },
})

