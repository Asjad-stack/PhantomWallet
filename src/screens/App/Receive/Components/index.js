import { FlatList, Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { hp, wp } from '../../../../components/ResponsiveComponent'
import { Images } from '../../../../Images'
import { appStyles } from '../../../../utilities/appStyles'
import { Fonts } from '../../../../constants/fonts'
import { colors } from '../../../../constants/colors'
import { tokensData } from '../../../../components/dummyData'
import PoppinsText from '../../../../components/PoppinsText'
import Spacer from '../../../../components/Spacer'

export const ReceiveTokensList = ({ onPressToken, onPressScanner, onPressCopy }) => {
    return (
        <FlatList
            data={tokensData}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <Spacer customHeight={hp(1)} />}
            removeClippedSubviews={false}
            contentContainerStyle={{ paddingBottom: hp(70) }}
            renderItem={({ item, index }) => {
                return (
                    <TouchableOpacity activeOpacity={0.8} onPress={() => onPressToken(item)} style={styles.tokenCardBgView}>
                        <View style={appStyles.row}>
                            <View style={appStyles.rowBasic}>
                                <Image source={item?.tokenLogo} resizeMode='contain' style={styles.tokenLogo} />
                                <View>
                                    <PoppinsText style={styles.tokenName}>{item?.tokenName}</PoppinsText>
                                    <PoppinsText style={styles.tokenAddress}>{item?.tokenAddress}</PoppinsText>
                                </View>
                            </View>
                            <View style={appStyles.rowBasic}>
                                <TouchableOpacity activeOpacity={0.8} onPress={() => onPressScanner(item)}>
                                    <Image source={Images.scannerLogo} resizeMode='contain' style={styles.scanner} />
                                </TouchableOpacity>
                                <TouchableOpacity activeOpacity={0.8} onPress={() => onPressCopy(item)}>
                                    <Image source={Images.copyWithRound} resizeMode='contain' style={styles.copyWithRound} />
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
    tokenCardBgView: {
        width: wp(92),
        // height: wp(18),
        paddingHorizontal: wp(3),
        paddingVertical: hp(2),
        borderRadius: 12,
        backgroundColor: colors.gray23,
        alignSelf: 'center'
    },
    tokenLogo: {
        width: wp(10.5),
        height: wp(10.5),
        marginRight: wp(3)
    },
    tokenName: {
        fontSize: 13,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray7
    },
    tokenAddress: {
        fontSize: 12,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray24
    },
    scanner: {
        width: wp(9),
        height: wp(9)
    },
    copyWithRound: {
        width: wp(9),
        height: wp(9),
        marginLeft: wp(3)
    }
})