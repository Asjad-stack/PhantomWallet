import { FlatList, Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Spacer, { HorizontalSpacer } from '../../../../components/Spacer'
import { tokensData, tokenTabsSelectionData, youPayTokensData } from '../../../../components/dummyData'
import PoppinsText from '../../../../components/PoppinsText'
import { Fonts } from '../../../../constants/fonts'
import { colors } from '../../../../constants/colors'
import { hp, wp } from '../../../../components/ResponsiveComponent'
import { appStyles } from '../../../../utilities/appStyles'
import { Images } from '../../../../Images'

export const TokenTabsSelection = () => {
    const [selectedTab, setSelectedTab] = useState(1)
    return (
        <FlatList
            data={tokenTabsSelectionData}
            horizontal
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => <HorizontalSpacer />}
            renderItem={({ item }) => {
                return (
                    <TouchableOpacity activeOpacity={0.8} onPress={() => setSelectedTab(item.id)} style={{
                        ...styles.tab,
                        backgroundColor: selectedTab === item?.id ? colors.lightPurple12 : colors.gray23
                    }}>
                        <PoppinsText style={{
                            ...styles.title,
                            color: selectedTab === item?.id ? colors.gray118 : colors.gray26
                        }}>{item?.title}</PoppinsText>
                    </TouchableOpacity>
                )
            }}
        />
    )
}

export const TokensList = ({ onPressToken }) => {

    return (
        <FlatList
            data={youPayTokensData}
            showsVerticalScrollIndicator={false}
            removeClippedSubviews={false}
            ItemSeparatorComponent={() => <Spacer customHeight={hp(1.5)} />}
            contentContainerStyle={{ paddingBottom: hp(20) }}
            renderItem={({ item, index }) => {

                return (
                    <TouchableOpacity activeOpacity={0.8} onPress={() => onPressToken(item)} style={[{ ...styles.tokenCardBgView, }]}>
                        <View style={appStyles.row}>
                            <View style={appStyles.rowBasic}>
                                <Image source={item?.tokenLogo} resizeMode='contain' style={styles.tokenLogo} />
                                <View>
                                    <PoppinsText style={styles.tokenName}>{item?.tokenName}</PoppinsText>
                                    <PoppinsText style={styles.cryptoAmount}>{item?.cryptoAmount}</PoppinsText>
                                </View>
                            </View>
                            <View style={appStyles.rowBasic}>
                                <View>
                                    <PoppinsText style={styles.dollarAmont}>{item?.dollarAmont}</PoppinsText>
                                    <PoppinsText style={styles.change24Value}>{item?.change24Value}</PoppinsText>
                                </View>
                                <TouchableOpacity activeOpacity={0.8}>
                                    <Image source={Images.infoLogo} resizeMode='contain' style={styles.infoLogo} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableOpacity>

                )
            }}
        />

    )
}


const styles = StyleSheet.create({
    // TokenTabsSelection
    tab: {
        height: wp(7),
        borderRadius: 8.75,
        paddingHorizontal: wp(4),
        paddingVertical: hp(0.2)
    },
    title: {
        fontSize: 13,
        fontFamily: Fonts.Poppins.Regular,
        textAlign: 'center',
        marginTop: hp(0.4)
    },
    // TokensList
    tokenCardBgView: {
        padding: wp(4),
        borderRadius: 12,
        backgroundColor: colors.gray23
    },
    tokenLogo: {
        width: wp(10.5),
        height: wp(10.5),
        marginRight: wp(3)
    },
    tokenName: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.Medium,
        color: colors.gray26
    },
    cryptoAmount: {
        fontSize: 12,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray37
    },
    dollarAmont: {
        fontSize: 13,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray19,
        textAlign: 'right'
    },
    change24Value: {
        fontSize: 11,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.green14,
        textAlign: 'right'
    },
    infoLogo: {
        width: wp(3.5),
        height: wp(3.5),
        marginLeft: wp(3)
    }

})