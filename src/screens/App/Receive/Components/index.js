import { FlatList, Image, ImageBackground, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { hp, wp } from '../../../../components/ResponsiveComponent'
import { Images } from '../../../../Images'
import { appStyles } from '../../../../utilities/appStyles'
import { Fonts } from '../../../../constants/fonts'
import { colors } from '../../../../constants/colors'
import { tokensData } from '../../../../components/dummyData'
import PoppinsText from '../../../../components/PoppinsText'

export const ReceiveTokensList = ({ onPressToken }) => {
    return (
        <FlatList
            data={tokensData}
            showsVerticalScrollIndicator={false}
            removeClippedSubviews={false}
            contentContainerStyle={{ paddingBottom: hp(70) }}
            renderItem={({ item, index }) => {
                return (
                    <TouchableOpacity activeOpacity={0.8} onPress={() => onPressToken(item)} style={{ paddingVertical: hp(0.7) }}>
                        <ImageBackground source={Images.authMainRoundBox} resizeMode='contain' style={styles.authMainRoundBox}>
                            <View style={appStyles.row}>
                                <View style={appStyles.rowBasic}>
                                    <Image source={item?.tokenLogo} resizeMode='contain' style={styles.tokenLogo} />
                                    <View>
                                        <PoppinsText style={styles.tokenName}>{item?.tokenName}</PoppinsText>
                                        <PoppinsText style={styles.tokenSymbol}>{item?.tokenSymbol}</PoppinsText>
                                    </View>
                                </View>
                                <Image source={Images.scanner} resizeMode='contain' style={styles.scanner} />

                            </View>
                        </ImageBackground>
                    </TouchableOpacity>

                )
            }}
        />
    )
}


const styles = StyleSheet.create({
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
    scanner: {
        width: wp(6),
        height: wp(6)
    }
})