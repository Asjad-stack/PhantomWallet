import { FlatList, Image, StyleSheet, TouchableOpacity, View, } from 'react-native'
import React from 'react'
import { SimpleRBSheet } from '../../../../components/SImpleBottomSheet'
import Spacer from '../../../../components/Spacer'
import { appStyles } from '../../../../utilities/appStyles'
import PoppinsText from '../../../../components/PoppinsText'
import { Images } from '../../../../Images'
import { Fonts } from '../../../../constants/fonts'
import { colors } from '../../../../constants/colors'
import { hp, wp } from '../../../../components/ResponsiveComponent'
import { buyTokenDetailsOptions } from '../../../../components/dummyData'

export const BuyTokenDetailsBottomSheet = ({ buyTokenDetailsBottomSheetRef }) => {
    return (
        <SimpleRBSheet refRBSheet={buyTokenDetailsBottomSheetRef} height={hp(45)}>
            <View style={appStyles.row}>
                <PoppinsText style={styles.detailsText}>Details</PoppinsText>
                <TouchableOpacity activeOpacity={0.8} onPress={() => buyTokenDetailsBottomSheetRef.current?.close()}>
                    <Image source={Images.cross} resizeMode='contain' style={styles.cross} />
                </TouchableOpacity>
            </View>
            <Spacer />
            <View style={styles.bgView}>
                <FlatList
                    data={buyTokenDetailsOptions}
                    showsVerticalScrollIndicator={false}
                    ItemSeparatorComponent={() => <Spacer />}
                    removeClippedSubviews={false}
                    renderItem={({ item }) => {
                        return (
                            <View style={[appStyles.row]}>
                                <View style={appStyles.rowBasic}>
                                    <PoppinsText style={styles.titleText}>{item.title}</PoppinsText>
                                    <Image source={item.infoLogo} resizeMode='contain' style={styles.infoLogo} />
                                </View>
                                <View style={appStyles.rowBasic}>
                                    <PoppinsText style={styles.rightText}>{item.rightText}</PoppinsText>
                                    <Image source={item.rightArrow} resizeMode='contain' style={styles.rightArrow} />
                                </View>
                            </View>
                        )
                    }}
                />
            </View>
            <Spacer customHeight={hp(0.2)} />
            <View style={styles.bgView1}>
                <View style={[appStyles.row]}>
                    <View style={appStyles.rowBasic}>
                        <PoppinsText style={styles.titleText}>{'Price Impact'}</PoppinsText>
                        <Image source={Images.infoLogo} resizeMode='contain' style={styles.infoLogo} />
                    </View>
                    <PoppinsText style={styles.rightText}>{'--'}</PoppinsText>
                </View>
            </View>
            <Spacer />
            <View style={styles.bgView2}>
                <View style={[appStyles.row]}>
                    <View style={appStyles.rowBasic}>
                        <PoppinsText style={styles.titleText}>{'Fees'}</PoppinsText>
                        <Image source={Images.infoLogo} resizeMode='contain' style={styles.infoLogo} />
                    </View>
                    <PoppinsText style={styles.rightText}>{'$0.04'}</PoppinsText>
                </View>
            </View>
            <Spacer />
            <View style={[appStyles.rowBasic, { paddingHorizontal: wp(4) }]}>
                <PoppinsText style={{ ...styles.quoteText }}>Quote includes a 0.85% Phantom fee</PoppinsText>
                <Image source={Images.infoLogo} resizeMode='contain' style={styles.infoLogo} />
            </View>
        </SimpleRBSheet>
    )
}


const styles = StyleSheet.create({
    bgView: {
        padding: wp(4),
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        backgroundColor: colors.gray40
    },
    bgView1: {
        padding: wp(4),
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        backgroundColor: colors.gray40,
    },
    bgView2: {
        padding: wp(4),
        borderRadius: 12,
        backgroundColor: colors.gray40,
    },
    detailsText: {
        fontSize: 17,
        fontFamily: Fonts.Poppins.SemiBold,
        color: colors.gray19
    },
    cross: {
        width: wp(3.5),
        height: wp(3.5)
    },
    titleText: {
        fontSize: 13,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray36
    },
    infoLogo: {
        width: wp(3),
        height: wp(3),
        marginLeft: wp(2)
    },
    rightText: {
        fontSize: 13,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray61
    },
    rightArrow: {
        width: wp(2),
        height: wp(2.5),
        marginLeft: wp(2)
    },
    quoteText: {
        fontSize: 11,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray6
    }
})