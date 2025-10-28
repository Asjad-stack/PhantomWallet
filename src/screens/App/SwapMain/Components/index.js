import { ActivityIndicator, FlatList, Image, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import Spacer, { HorizontalSpacer } from "../../../../components/Spacer";
import PoppinsText from "../../../../components/PoppinsText";
import { Images } from "../../../../Images";
import { colors } from "../../../../constants/colors";
import { Fonts } from "../../../../constants/fonts";
import { appStyles } from "../../../../utilities/appStyles";
import { hp, wp } from "../../../../components/ResponsiveComponent";
import { useState } from "react";
import { trendingTokenHoldersData, trendingTokensTabsOptions } from "../../../../components/dummyData";
import { SimpleRBSheet } from "../../../../components/SImpleBottomSheet";
import { CustomTextInput5 } from "../../../../components/CustomTextInput";

export const InputView = ({

    title,
    editable,
    placeholder,
    value,
    onChangeText,
    balance,
    selectedToken,
    onPressChangeToken,
    Loading,
    dolorValue,
    TitleChain,
    onPressSelectChain,
    selectedChainName,
    selectedChain,
    isMaxrow,
    priceButton,
    onpresPriceButton,
    disable,
    tokenSymbol
}) => {
    return (
        <View style={styles.BackgroundInputview}>
            <Spacer customHeight={hp(1)} />
            <PoppinsText style={styles.title}>{title}</PoppinsText>
            <View style={styles.mainView}>
                <TextInput
                    placeholder={Loading ? '' : '0.0'}
                    value={value}
                    keyboardType={'decimal-pad'}
                    placeholderTextColor={colors.gray4}
                    onChangeText={onChangeText}
                    editable={editable}
                    style={styles.inputStyle}
                />

                {Loading ? (
                    <ActivityIndicator
                        style={styles.activityIndicator}
                        size="small"
                        color={colors.white}
                    />
                ) : null}

                <View style={{}}>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        disabled={disable}
                        onPress={onPressChangeToken}
                        hitSlop={{ top: 25, bottom: 25, left: 25, right: 25 }}
                        style={[appStyles.rowBasic, styles.tokenBgView]}>
                        <Image
                            // source={{ uri: selectedToken?.logoURI }}
                            source={Images.suiRound}
                            resizeMode="contain"
                            style={{
                                ...styles.tokenlogo,
                                borderRadius:
                                    selectedToken?.symbol?.toUpperCase() == 'TRON' ? 0 : 100,
                            }}
                        />
                        <PoppinsText style={styles.symbol}>
                            {tokenSymbol}
                        </PoppinsText>
                    </TouchableOpacity>
                </View>
            </View>
            <Spacer customHeight={hp(0.2)} />
            <PoppinsText
                style={{
                    fontSize: 12,
                    fontFamily: Fonts.Poppins.Regular,
                    color: colors.gray108,
                    textAlign: 'right',
                    paddingRight: wp(5),
                }}>
                {`∼$${(Number(dolorValue) * Number(value)).toFixed(3)}`}{' '}
                <PoppinsText style={{
                    fontSize: 12,
                    fontFamily: Fonts.Poppins.Regular,
                    color: colors.gray108,
                }}>SOL</PoppinsText>
            </PoppinsText>


        </View>
    );
};

export const RowTabs = ({ }) => {
    const [selectedTab, setSelectedTab] = useState('Trending');
    return (
        <View style={appStyles.rowBasic}>
            <TouchableOpacity activeOpacity={0.8} onPress={() => setSelectedTab('Trending')}>
                <PoppinsText style={{
                    ...styles.tabText,
                    color: selectedTab === 'Trending' ? colors.gray63 : colors.gray98,
                }}>{'Trending'}</PoppinsText>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} onPress={() => setSelectedTab('Launches')} style={{ marginLeft: wp(8) }}>
                <PoppinsText style={{
                    ...styles.tabText,
                    color: selectedTab === 'Launches' ? colors.gray63 : colors.gray98,
                }}>{'Launches'}</PoppinsText>
            </TouchableOpacity>
        </View>
    )
}

export const TrendingRowTabs = ({ }) => {
    const [selectedTab, setSelectedTab] = useState(trendingTokensTabsOptions[0]);
    return (
        <View>
            <FlatList
                data={trendingTokensTabsOptions}
                horizontal
                keyExtractor={(item) => item?.id.toString()}
                showsHorizontalScrollIndicator={false}
                removeClippedSubviews={false}
                ItemSeparatorComponent={() => <HorizontalSpacer />}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity activeOpacity={0.8} onPress={() => setSelectedTab(item)} style={{
                            ...styles.trendingTabBgView,
                            backgroundColor: selectedTab?.id === item?.id ? colors.lightPurple13 : colors.gray23,
                        }}>
                            <View style={{ ...appStyles.rowBasic, marginTop: hp(0.4) }}>
                                <PoppinsText style={{
                                    ...styles.trendingTabTitle,
                                    color: selectedTab?.id === item?.id ? colors.gray124 : colors.gray7,
                                }}>{item?.title}</PoppinsText>
                                <Image source={item?.dropDown} resizeMode='contain' style={{ ...styles.dropDown, tintColor: selectedTab?.id === item?.id ? colors.gray124 : colors.gray7 }} />
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>


    )
}

export const LeaderBoardList = ({ }) => {

    const getBadge = (index) => {
        switch (index) {
            case 0: return Images.badgeFirst;
            case 1: return Images.badgeSecond;
            case 2: return Images.badgeThird;
            default: return null;
        }
    };

    return (
        <FlatList
            data={[...trendingTokenHoldersData, ...trendingTokenHoldersData, ...trendingTokenHoldersData]}
            showsVerticalScrollIndicator={false}
            removeClippedSubviews={false}
            contentContainerStyle={{ paddingBottom: wp(20) }}
            ItemSeparatorComponent={() => <Spacer />}

            renderItem={({ item, index }) => {

                const badge = getBadge(index);
                const isPositive = item?.change.startsWith('+');

                return (
                    <TouchableOpacity activeOpacity={0.8} style={appStyles.row}>
                        <View style={appStyles.rowBasic}>
                            {badge ? (
                                <Image source={badge} resizeMode="contain" style={styles.badgeIcon} />
                            ) : (
                                <PoppinsText style={styles.rankNumber}>{index + 1}</PoppinsText>
                            )}
                            <View style={appStyles.rowBasic}>
                                <Image source={item?.logo} resizeMode="contain" style={styles.logo} />
                                <View style={{ marginLeft: wp(3) }}>
                                    <PoppinsText style={styles.name}>{item?.name}</PoppinsText>
                                    <PoppinsText style={styles.mc}>{item?.mc}</PoppinsText>
                                </View>
                            </View>
                        </View>
                        <View style={{ alignItems: 'flex-end' }}>
                            <PoppinsText style={styles.price}>{item?.price}</PoppinsText>
                            <PoppinsText style={styles.change}>{item?.change}</PoppinsText>
                        </View>
                    </TouchableOpacity>
                )
            }}
        />
    )
}

export const AmountDetails = ({ }) => {
    return (
        <View>
            <TouchableOpacity activeOpacity={0.8} onPress={() => { }} style={[appStyles.row, styles.container1]}>
                <View style={appStyles.rowBasic}>
                    <PoppinsText style={styles.titleAmountDetals}>Pricing</PoppinsText>
                    <Image source={Images.infoLogo} resizeMode='contain' style={styles.infoLogo} />
                </View>
                <View style={appStyles.rowBasic}>
                    <PoppinsText style={styles.amountDetailsText}>1SOL204.55 USDC</PoppinsText>
                    <Image source={Images.arrowRight} resizeMode='contain' style={styles.arrowRight} />
                </View>
            </TouchableOpacity>
            <Spacer customHeight={hp(0.2)} />
            <TouchableOpacity activeOpacity={0.8} onPress={() => { }} style={[appStyles.row, styles.container2]}>
                <View style={appStyles.rowBasic}>
                    <PoppinsText style={styles.titleAmountDetals}>Slippage</PoppinsText>
                    <Image source={Images.infoLogo} resizeMode='contain' style={styles.infoLogo} />
                </View>
                <View style={appStyles.rowBasic}>
                    <PoppinsText style={styles.amountDetailsText}>1SOL204.55 USDC</PoppinsText>
                    <Image source={Images.arrowRight} resizeMode='contain' style={styles.arrowRight} />
                </View>
            </TouchableOpacity>
            <Spacer customHeight={hp(0.2)} />
            <TouchableOpacity activeOpacity={0.8} onPress={() => { }} style={[appStyles.row, styles.container2]}>
                <View style={appStyles.rowBasic}>
                    <PoppinsText style={styles.titleAmountDetals}>Price Impact</PoppinsText>
                    <Image source={Images.infoLogo} resizeMode='contain' style={styles.infoLogo} />
                </View>
                <PoppinsText style={styles.amountDetailsPercentage}>9.14% (High)</PoppinsText>
            </TouchableOpacity>
            <Spacer customHeight={hp(0.2)} />
            <TouchableOpacity activeOpacity={0.8} onPress={() => { }} style={[appStyles.row, styles.container3]}>
                <View style={appStyles.rowBasic}>
                    <PoppinsText style={styles.titleAmountDetals}>Fees</PoppinsText>
                    <Image source={Images.infoLogo} resizeMode='contain' style={styles.infoLogo} />
                </View>
                <PoppinsText style={styles.dolorValue}>$0.04</PoppinsText>
            </TouchableOpacity>
        </View>
    )
}

// export const PayTokenBottomSheet = ({ payTokenBottomSheet, title, value, onChangeText }) => {
//     return (
//         <SimpleRBSheet refRBSheet={payTokenBottomSheet} height={hp(50)}>
//             <View style={appStyles.row}>
//                 <PoppinsText style={styles.rbsheetTitle}>{title}</PoppinsText>
//                 <Image source={Images.cross} resizeMode='contain' style={styles.cross} />
//             </View>
//             <Spacer customHeight={hp(1.5)} />
//             <CustomTextInput5 value={value} onChangeText={onChangeText} leftImage={Images.searchWhite} placeholder={'Search'} placeholderTextColor={colors.gray4} inputStyle={styles.rbsheetInputStyle} containerStyle={styles.rbsheetInputContainer} />

//         </SimpleRBSheet>
//     )
// }

const styles = StyleSheet.create({
    // InputView
    activityIndicator: {
        position: 'absolute',
        left: 10,
        top: '50%',
        transform: [{ translateY: -12 }],
    },
    titleView: {
        flexDirection: 'row',
        marginVertical: hp(1),
    },
    titleText: {
        fontSize: 14,
        color: colors.gray1,
        fontFamily: Fonts.Poppins.Medium,
        marginRight: wp(2),
    },
    chainView: {
        flexDirection: 'row',
        borderRadius: 50,
        alignSelf: 'flex-start',
        paddingHorizontal: wp(2),
        paddingVertical: wp(0.5),
        backgroundColor: colors.gray40,

    },
    chainText: {
        fontSize: 12,
        color: colors.gray1,
        fontFamily: Fonts.Poppins.Medium,
    },
    DownIcon: {
        width: wp(2.5),
        height: 5,
        marginLeft: wp(1),
        alignSelf: 'center',
    },
    selectedChain: {
        width: wp(4),
        height: wp(4),
        borderRadius: wp(4),
        marginRight: wp(2),
    },
    title: {
        fontSize: 12,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray37,
        paddingHorizontal: wp(2)
    },
    mainView: {
        flexDirection: 'row',
        // width: wp(92),
        paddingHorizontal: wp(1),
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    BackgroundInputview: {
        backgroundColor: colors.gray40,
        borderRadius: 10,
        padding: hp(1)
    },
    inputStyle: {
        width: wp(50),
        height: hp(5),
        color: colors.gray122,
        fontSize: 18,
        fontFamily: Fonts.Poppins.Regular,
        // backgroundColor: 'green',
        textAlignVertical: 'center'

    },
    tokenBgView: {
        borderRadius: 18,
        paddingHorizontal: wp(1),
        paddingVertical: wp(0.5),
        backgroundColor: colors.gray94,
        marginRight: wp(2),
    },
    tokenlogo: {
        width: wp(7.5),
        height: wp(7.5),
    },
    symbol: {
        fontSize: 12,
        fontFamily: Fonts.Poppins.Bold,
        color: colors.gray31,
        paddingHorizontal: wp(2),
        marginTop: hp(0.3)
    },
    arrowDown: {
        width: wp(2.5),
        height: 5,
        marginRight: wp(2),
        tintColor: colors.gray31,
    },
    balance: {
        fontSize: 12,
        fontFamily: Fonts.Poppins.Medium,
        color: colors.gray4,
    },
    // RowTabs
    tabText: {
        fontSize: 17,
        fontFamily: Fonts.Poppins.SemiBold,
    },
    // TrendingRowTabs
    trendingTabBgView: {
        height: wp(6),
        paddingHorizontal: wp(4),
        borderRadius: 9,
    },
    trendingTabTitle: {
        fontSize: 12,
        fontFamily: Fonts.Poppins.Regular,
    },
    dropDown: {
        width: wp(2),
        height: 3,
        marginLeft: wp(2),
        marginTop: hp(0.2),
    },
    // LeaderBoardList
    badgeIcon: {
        width: wp(4.5),
        height: wp(5),
    },
    rankNumber: {
        fontSize: 14,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray60,
        marginLeft: wp(1)
    },
    logo: {
        width: wp(10.5),
        height: wp(10.5),
        marginLeft: wp(4)
    },
    name: {
        fontSize: 13,
        fontFamily: Fonts.Poppins.Bold,
        color: colors.gray49,
    },
    mc: {
        fontSize: 11,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray123,
    },
    price: {
        fontSize: 13,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray87,
    },
    change: {
        fontSize: 12,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.green16,
    },
    // AmountDetails
    container1: {
        padding: wp(3),
        backgroundColor: colors.gray23,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12
    },
    titleAmountDetals: {
        fontSize: 13,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray28,
    },
    infoLogo: {
        width: wp(3),
        height: wp(3),
        marginLeft: wp(2)
    },
    amountDetailsText: {
        fontSize: 13,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray50,
    },
    arrowRight: {
        width: wp(1.5),
        height: wp(2.5),
        marginLeft: wp(4)
    },
    container2: {
        padding: wp(3),
        backgroundColor: colors.gray23,
    },
    container3: {
        padding: wp(3),
        backgroundColor: colors.gray23,
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12
    },
    amountDetailsPercentage: {
        fontSize: 13,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.yellow3,
        textAlign: 'right'
    },
    dolorValue: {
        fontSize: 13,
        fontFamily: Fonts.Poppins.Regular,
        color: colors.gray108,
        textAlign: 'right'
    },
    // PayTokenBottomSheet
    rbsheetTitle: {
        fontSize: 17,
        fontFamily: Fonts.Poppins.SemiBold,
        color: colors.gray83,
    },
    cross: {
        width: wp(4),
        height: wp(4),
    },
    rbsheetInputStyle: {
        width: wp(72),
        alignSelf: 'center',
        textAlign: 'left',
        paddingHorizontal: wp(3),
    },
    rbsheetInputContainer: {
        backgroundColor: colors.gray68,
    }
})