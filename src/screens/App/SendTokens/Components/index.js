import { FlatList, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { tokensData } from '../../../../components/dummyData'
import { hp, wp } from '../../../../components/ResponsiveComponent'
import { Images } from '../../../../Images'
import { appStyles } from '../../../../utilities/appStyles'
import PoppinsText from '../../../../components/PoppinsText'
import { Fonts } from '../../../../constants/fonts'
import { colors } from '../../../../constants/colors'
import Spacer from '../../../../components/Spacer'

export const SendTokensList = ({ onPressToken, searchText }) => {
    const filteredTokens = tokensData.filter((token) => token?.tokenName?.toLowerCase().includes(searchText?.toLowerCase()))
    return (
        <FlatList
            data={filteredTokens}
            showsVerticalScrollIndicator={false}
            removeClippedSubviews={false}
            ItemSeparatorComponent={() => <Spacer customHeight={hp(1)} />}
            contentContainerStyle={{ paddingBottom: hp(70) }}
            renderItem={({ item, index }) => {
                return (
                    <TouchableOpacity activeOpacity={0.8} onPress={() => onPressToken(item)} style={styles.tokenCardBgView}>
                        <View style={appStyles.row}>
                            <View style={appStyles.rowBasic}>
                                <Image source={item?.tokenLogo} resizeMode='contain' style={styles.tokenLogo} />
                                <View>
                                    <PoppinsText style={styles.tokenName}>{item?.tokenName}</PoppinsText>
                                    <PoppinsText style={styles.tokenSymbol}>{'0 BTC'}</PoppinsText>
                                </View>
                            </View>
                            <View>
                                <PoppinsText style={styles.tokenPrice}>{item?.tokenPrice}</PoppinsText>
                                <PoppinsText style={styles.dollarPrice}>{item?.dollarPrice}</PoppinsText>
                            </View>
                        </View>
                    </TouchableOpacity>

                )
            }}
        />
    )
}



const styles = StyleSheet.create({
    tokenCardBgView: {
        width: wp(92),
        // height: wp(18),
        paddingHorizontal: wp(3),
        paddingVertical: hp(1.4),
        borderRadius: 13,
        backgroundColor: colors.gray14,
        alignSelf: 'center',
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
    }
})