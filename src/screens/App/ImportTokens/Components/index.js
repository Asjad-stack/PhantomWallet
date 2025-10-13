import { FlatList, ImageBackground, Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { customTokenList, tokensData } from '../../../../components/dummyData'
import { hp, wp } from '../../../../components/ResponsiveComponent'
import { Images } from '../../../../Images'
import { appStyles } from '../../../../utilities/appStyles'
import PoppinsText from '../../../../components/PoppinsText'
import { Fonts } from '../../../../constants/fonts'
import { colors } from '../../../../constants/colors'
import LinearGradient from 'react-native-linear-gradient'


export const ImportTokensList = ({ onPressToken }) => {
    return (
        <FlatList
            data={tokensData}
            showsVerticalScrollIndicator={false}
            removeClippedSubviews={false}
            contentContainerStyle={{ paddingBottom: hp(70) }}
            renderItem={({ item }) => {
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
                                <View>
                                    <PoppinsText style={styles.tokenPrice}>{item?.tokenPrice}</PoppinsText>
                                    <PoppinsText style={styles.dollarPrice}>{item?.dollarPrice}</PoppinsText>
                                </View>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>

                )
            }}
        />
    )

}

export const CustomTokenList = ({ }) => {
    return (
        <FlatList
            data={customTokenList}
            showsVerticalScrollIndicator={false}
            removeClippedSubviews={false}
            renderItem={({ item, index }) => {
                return (
                    <TouchableOpacity activeOpacity={0.8} onPress={() => { }} style={{ paddingVertical: hp(0.5) }}>
                        <ImageBackground source={Images.authMainRoundBox} resizeMode='contain' style={styles.authMainRoundBox}>
                            <View style={{ paddingHorizontal: wp(2) }}>
                                <PoppinsText style={styles.customTkenName}>{item?.title}</PoppinsText>
                                <PoppinsText style={styles.customTokenSymbol}>{item?.desc}</PoppinsText>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                )
            }}
        />
    )
}

export const RowTabs = ({ selectedTab, setSelectedTab }) => {
    return (
        <ImageBackground
            source={Images.textInputBgImage}
            style={styles.backgroundImage}
            imageStyle={styles.backgroundImageStyle}>
            <View style={styles.tabsContainer}>
                <TouchableOpacity
                    style={styles.tab}
                    onPress={() => setSelectedTab('search')}>
                    {selectedTab === 'search' ? (
                        <LinearGradient
                            colors={['#0EDDEF', '#9F13D3']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={styles.gradient}>
                            <PoppinsText style={{ ...styles.tabText, color: colors.white }}>Search</PoppinsText>
                        </LinearGradient>
                    ) : (
                        <PoppinsText style={{ ...styles.tabText, color: colors.gray8 }}>Search</PoppinsText>
                    )}
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.tab}
                    onPress={() => setSelectedTab('customToken')}>
                    {selectedTab === 'customToken' ? (
                        <LinearGradient
                            colors={['#0EDDEF', '#9F13D3']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={styles.gradient}>
                            <PoppinsText style={{ ...styles.tabText, color: colors.white }}>Custom Token</PoppinsText>
                        </LinearGradient>
                    ) : (
                        <PoppinsText style={{ ...styles.tabText, color: colors.gray8 }}>Custom Token</PoppinsText>
                    )}
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    // ImportTokensList
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
    },

    customTkenName: {
        fontSize: 12,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray8
    },
    customTokenSymbol: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.white
    },

    // RowTabs
    backgroundImage: {
        // width: '100%',
        // height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundImageStyle: {
        resizeMode: 'contain',
    },
    tabsContainer: {
        flexDirection: 'row',
        borderRadius: 25,
        backgroundColor: 'transparent',
        overflow: 'hidden',
        width: wp(92),
        height: wp(11)

    },
    tab: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        width: wp(46)
    },
    gradient: {
        borderRadius: 25,
        paddingVertical: wp(3),
        justifyContent: 'center',
        alignItems: 'center',
        width: wp(46)

    },
    tabText: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.Regular
    },
})