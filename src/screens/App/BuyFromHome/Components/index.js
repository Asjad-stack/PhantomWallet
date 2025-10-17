import { FlatList, Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { hp, wp } from '../../../../components/ResponsiveComponent'
import { colors } from '../../../../constants/colors'
import Spacer from '../../../../components/Spacer'
import PoppinsText from '../../../../components/PoppinsText'
import { Fonts } from '../../../../constants/fonts'
import { tokensData } from '../../../../components/dummyData'
import { appStyles } from '../../../../utilities/appStyles'
import { Images } from '../../../../Images'

export const SendTokenCard = ({ tokenLogo, tokenName, tokenSymbol, onPress }) => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={styles.cardView}>
            <Spacer customHeight={hp(1)} />
            <View style={{ width: wp(11) }}>
                <Image source={tokenLogo} resizeMode='contain' style={styles.tokenLogo} />
                <Image source={Images.solanaLogo} resizeMode='contain' style={styles.popularChainLogo} />
            </View>
            <Spacer customHeight={hp(1)} />
            <PoppinsText style={styles.tokenName}>{tokenName}</PoppinsText>
            <PoppinsText style={styles.tokenSymbol}>{tokenSymbol}</PoppinsText>
        </TouchableOpacity >
    )
}

export const PopularTokensList = ({ searchText, setSearchText, onPressToken }) => {
    const filteredTokens = tokensData.filter(item =>
        item.tokenName.toLowerCase().includes(searchText.toLowerCase())
    );
    return (
        <FlatList
            data={filteredTokens}
            showsVerticalScrollIndicator={false}
            removeClippedSubviews={false}
            ItemSeparatorComponent={() => <Spacer customHeight={hp(1)} />}
            contentContainerStyle={{ paddingBottom: hp(20) }}
            renderItem={({ item, index }) => {
                return (
                    <TouchableOpacity activeOpacity={0.8} onPress={() => onPressToken(item)} style={[styles.popularTokenCard, appStyles.rowBasic]}>
                        <View style={{ marginRight: wp(3) }}>
                            <Image source={item?.tokenLogo} resizeMode='contain' style={styles.popularTokenLogo} />
                            <Image source={item?.tokenLogo} resizeMode='contain' style={styles.popularChainLogo} />
                        </View>
                        <View>
                            <PoppinsText style={styles.tokenName}>{item?.tokenName}</PoppinsText>
                            <PoppinsText style={styles.tokenSymbol}>{item?.tokenSymbol ?? 'SOL'}</PoppinsText>
                        </View>
                    </TouchableOpacity>
                )
            }}
        />
    )
}

const styles = StyleSheet.create({
    cardView: {
        width: wp(44),
        alignSelf: 'center',
        borderRadius: 13,
        paddingHorizontal: wp(4.5),
        paddingVertical: hp(1.6),
        backgroundColor: colors.gray23
    },
    tokenLogo: {
        width: wp(10.5),
        height: wp(10.5),
        borderRadius: 100
    },
    tokenName: {
        fontSize: 13,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray64
    },
    tokenSymbol: {
        fontSize: 13,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray64
    },
    // PopularTokensList
    popularTokenCard: {
        borderRadius: 13,
        padding: wp(3),
        backgroundColor: colors.gray23
    },
    popularTokenLogo: {
        width: wp(10.5),
        height: wp(10.5),
        borderRadius: 100
    },
    popularChainLogo: {
        width: wp(4),
        height: wp(4),
        position: 'absolute',
        bottom: 0,
        right: 0
    }
})

