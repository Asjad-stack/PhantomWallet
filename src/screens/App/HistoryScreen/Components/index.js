import { FlatList, StyleSheet, Image, TouchableOpacity, View, ImageBackground } from 'react-native'
import React from 'react'
import { historyData } from '../../../../components/dummyData'
import { Images } from '../../../../Images'
import { hp, wp } from '../../../../components/ResponsiveComponent'
import PoppinsText from '../../../../components/PoppinsText'
import Spacer from '../../../../components/Spacer'
import { Fonts } from '../../../../constants/fonts'
import { colors } from '../../../../constants/colors'
import { appStyles } from '../../../../utilities/appStyles'

export const HistoryCard = ({ onPressToken, transactions = [] }) => {

    // Always use the passed transactions (real data)
    const dataToUse = transactions || [];

    return (
        <FlatList
            data={dataToUse}
            showsVerticalScrollIndicator={false}
            removeClippedSubviews={false}
            keyExtractor={(item, index) => {
                const base = item?.txHash || item?.id || index;
                return `${base}-${item?.timestamp || ''}-${index}`;
            }}
            contentContainerStyle={{}}
            ListEmptyComponent={() => {
                return (
                    <View style={styles.emptyContainer}>
                        <Image source={Images.noHistory} resizeMode='contain' style={styles.noHistory} />
                        <Spacer />
                        <PoppinsText style={styles.noHistoryText}>No Transactions Yet</PoppinsText>
                        <Spacer customHeight={hp(1)} />
                        <PoppinsText style={styles.noHistoryDesc}>Your activity will appear here once you start using the wallet.</PoppinsText>
                        <Spacer customHeight={hp(2)} />
                        <TouchableOpacity activeOpacity={0.8} style={styles.refreshButton} onPress={() => { }}>
                            <Image source={Images.refreshHistory} resizeMode='contain' style={styles.refreshHistory} />
                        </TouchableOpacity>
                    </View>
                )
            }}
            renderItem={({ item, index }) => {

                console.log('=== HistoryCard RenderItem ===',item);

                const showDateHeader = index === 0 ||
                    dataToUse[index - 1].date !== item.date;

                return (
                    <View key={`row-${item?.txHash || item?.id || index}`}>
                        {showDateHeader && (
                            <>
                                <Spacer customHeight={hp(1)} />
                                <PoppinsText style={styles.dateText}>{item?.date}</PoppinsText>
                                <Spacer customHeight={hp(1)} />
                            </>
                        )}
                        <TouchableOpacity activeOpacity={0.8} onPress={() => onPressToken(item)} style={{ paddingVertical: hp(0.6) }}>
                            <ImageBackground source={Images.authMainRoundBox} resizeMode='contain' style={styles.authMainRoundBox}>
                                <View style={appStyles.row}>
                                    <View style={appStyles.rowBasic}>
                                        <Image source={item?.statusLogo} resizeMode='contain' style={styles.statusLogo} />
                                        <View>
                                            <PoppinsText style={styles.status}>{item?.status}</PoppinsText>
                                            <Spacer customHeight={hp(0.5)} />
                                            <PoppinsText style={styles.address}>{item?.address}</PoppinsText>
                                        </View>
                                    </View>
                                    <View style={{ alignItems: 'flex-end' }}>
                                        <PoppinsText style={{
                                            ...styles.amount,
                                            // color: item?.amount?.includes('+') ? colors.green : colors.red
                                            color: colors.gray7
                                        }}>
                                            {item?.amount}
                                        </PoppinsText>
                                        <Spacer customHeight={hp(0.5)} />
                                        <PoppinsText style={{
                                            ...styles.usdValue,
                                            color: item?.usdValue?.includes('+') ? colors.green : colors.red
                                        }}>
                                            {item?.usdValue}
                                        </PoppinsText>
                                    </View>
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>
                )
            }}
        />
    )
}


const styles = StyleSheet.create({
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: hp(70)
    },
    noHistory: {
        width: wp(60),
        height: hp(30),
        alignSelf: 'center'
    },
    noHistoryText: {
        fontSize: 18,
        fontFamily: Fonts.Poppins.Medium,
        color: colors.white,
        textAlign: 'center'
    },
    noHistoryDesc: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray6,
        textAlign: 'center',
        paddingHorizontal: wp(10),
    },
    refreshButton: {
        alignItems: 'center',
    },
    refreshHistory: {
        width: wp(40),
        height: hp(6),
    },

    dateText: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.Medium,
        color: colors.gray6,
    },

    authMainRoundBox: {
        height: hp(8),
        paddingHorizontal: wp(4),
        justifyContent: 'center',
    },
    statusLogo: {
        width: wp(8),
        height: wp(8),
        marginRight: wp(3)
    },
    status: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.Medium,
        color: colors.white
    },
    address: {
        fontSize: 12,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray6
    },
    amount: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.Medium,
    },
    usdValue: {
        fontSize: 12,
        fontFamily: Fonts.Poppins.Regular,
    },
})