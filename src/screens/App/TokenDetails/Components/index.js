import { FlatList, Image, ImageBackground, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { tokenDetailsInfoData } from '../../../../components/dummyData'
import Spacer from '../../../../components/Spacer'
import { appStyles } from '../../../../utilities/appStyles'
import PoppinsText from '../../../../components/PoppinsText'
import { colors } from '../../../../constants/colors'
import { hp, wp } from '../../../../components/ResponsiveComponent'
import { Fonts } from '../../../../constants/fonts'
import { Images } from '../../../../Images'
import LinearGradient from 'react-native-linear-gradient'

export const InfoCard = ({ }) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={tokenDetailsInfoData}
                keyExtractor={(item) => item?.id.toString()}
                showsVerticalScrollIndicator={false}
                removeClippedSubviews={false}
                ItemSeparatorComponent={() => <Spacer customHeight={hp(3)} />}
                contentContainerStyle={styles.flatListContainer}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.detailItem}>
                            <View style={appStyles.row}>
                                <PoppinsText style={styles.title}>{item?.title}</PoppinsText>
                                <PoppinsText style={styles.desc}>{item?.desc}</PoppinsText>
                            </View>
                        </View>
                    )
                }}
            />
        </View>

    )
}

export const HistoryCard = ({ onPressToken, transactions = [] }) => {

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
            contentContainerStyle={{}}

            renderItem={({ item, index }) => {

                console.log('=== HistoryCard RenderItem ===', item);

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

export const RowTimeIntervals = ({ selectedTab, setSelectedTab }) => {
    return (
        <ImageBackground
            source={Images.tokenDetailsTimeBgImage}
            style={styles.backgroundImage}
            imageStyle={styles.backgroundImageStyle}>
            <View style={styles.tabsContainer}>
                {/* 1H Tab */}
                <TouchableOpacity
                    style={[styles.tab, selectedTab === '1H' && styles.selectedTab]}
                    onPress={() => setSelectedTab('1H')}
                >
                    {selectedTab === '1H' ? (
                        <LinearGradient
                            colors={['#0EDDEF', '#9F13D3']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={styles.gradientText}
                        >
                            <PoppinsText style={styles.selectedText}>
                                1H
                            </PoppinsText>
                        </LinearGradient>
                    ) : (
                        <PoppinsText style={styles.tabText}>1H</PoppinsText>
                    )}
                </TouchableOpacity>

                {/* 1D Tab */}
                <TouchableOpacity
                    style={[styles.tab, selectedTab === '1D' && styles.selectedTab]}
                    onPress={() => setSelectedTab('1D')}
                >
                    {selectedTab === '1D' ? (
                        <LinearGradient
                            colors={['#0EDDEF', '#9F13D3']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={styles.gradientText}
                        >
                            <PoppinsText style={styles.selectedText}>
                                1D
                            </PoppinsText>
                        </LinearGradient>
                    ) : (
                        <PoppinsText style={styles.tabText}>1D</PoppinsText>
                    )}
                </TouchableOpacity>

                {/* 1W Tab */}
                <TouchableOpacity
                    style={[styles.tab, selectedTab === '1W' && styles.selectedTab]}
                    onPress={() => setSelectedTab('1W')}
                >
                    {selectedTab === '1W' ? (
                        <LinearGradient
                            colors={['#0EDDEF', '#9F13D3']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={styles.gradientText}
                        >
                            <PoppinsText style={styles.selectedText}>
                                1W
                            </PoppinsText>
                        </LinearGradient>
                    ) : (
                        <PoppinsText style={styles.tabText}>1W</PoppinsText>
                    )}
                </TouchableOpacity>

                {/* 1M Tab */}
                <TouchableOpacity
                    style={[styles.tab, selectedTab === '1M' && styles.selectedTab]}
                    onPress={() => setSelectedTab('1M')}
                >
                    {selectedTab === '1M' ? (
                        <LinearGradient
                            colors={['#0EDDEF', '#9F13D3']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={styles.gradientText}
                        >
                            <PoppinsText style={styles.selectedText}>
                                1M
                            </PoppinsText>
                        </LinearGradient>
                    ) : (
                        <PoppinsText style={styles.tabText}>1M</PoppinsText>
                    )}
                </TouchableOpacity>

                {/* 1Y Tab */}
                <TouchableOpacity
                    style={[styles.tab, selectedTab === '1Y' && styles.selectedTab]}
                    onPress={() => setSelectedTab('1Y')}
                >
                    {selectedTab === '1Y' ? (
                        <LinearGradient
                            colors={['#0EDDEF', '#9F13D3']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={styles.gradientText}
                        >
                            <PoppinsText style={styles.selectedText}>
                                1Y
                            </PoppinsText>
                        </LinearGradient>
                    ) : (
                        <PoppinsText style={styles.tabText}>1Y</PoppinsText>
                    )}
                </TouchableOpacity>

                {/* ALL Tab */}
                <TouchableOpacity
                    style={[styles.tab, selectedTab === 'ALL' && styles.selectedTab]}
                    onPress={() => setSelectedTab('ALL')}
                >
                    {selectedTab === 'ALL' ? (
                        <LinearGradient
                            colors={['#0EDDEF', '#9F13D3']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={styles.gradientText}
                        >
                            <PoppinsText style={styles.selectedText}>
                                ALL
                            </PoppinsText>
                        </LinearGradient>
                    ) : (
                        <PoppinsText style={styles.tabText}>ALL</PoppinsText>
                    )}
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}


const styles = StyleSheet.create({
    // InfoCard
    container: {
        borderWidth: 1,
        borderColor: colors.borderColor1,
        backgroundColor: colors.blueBgColor,
        padding: wp(3),
        borderRadius: 16
    },
    flatListContainer: {
        flexGrow: 1,
        paddingHorizontal: wp(2),
        paddingVertical: hp(1),
    },
    detailItem: {
        minHeight: hp(2),
        justifyContent: 'center',
    },
    title: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray7,
    },
    desc: {
        fontSize: 12,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.white,
    },
    // HistoryCard
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // height: hp(70)
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

    // RowTimeIntervals
    // backgroundImage: {
    //     width: '100%',
    //     height: 50,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    // },
    // backgroundImageStyle: {
    //     resizeMode: 'stretch',
    // },
    // tabsContainer: {
    //     flexDirection: 'row',
    //     borderRadius: 8,
    //     backgroundColor: 'transparent',
    //     overflow: 'hidden',
    // },
    // tab: {
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     paddingVertical: 10,
    // },
    // tabText: {
    //     fontSize: 14,
    //     color: colors.gray8,
    // },
    // selectedText: {
    //     // backgroundColor: 'transparent',
    //     // borderRadius: 20,
    // },
    // gradientText: {
    //     paddingVertical: 5,
    //     paddingHorizontal: wp(3),
    //     borderRadius: 8,
    //     backgroundColor: 'transparent',
    // },



    backgroundImage: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundImageStyle: {
        resizeMode: 'stretch',
    },
    tabsContainer: {
        flexDirection: 'row',
        borderRadius: 8,
        backgroundColor: 'transparent',
        overflow: 'hidden',
    },
    tab: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
    },
    tabText: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray8,
    },
    selectedTab: {
        backgroundColor: 'transparent',
    },
    gradientText: {
        paddingVertical: 5,
        paddingHorizontal: wp(3),
        borderRadius: 8,
        backgroundColor: 'transparent',
    },
    selectedText: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.white,
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
    },
})