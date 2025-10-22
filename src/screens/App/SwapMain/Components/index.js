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
    disable
}) => {
    return (
        <View>
            <View>
                {/* <View style={styles.titleView}>
                    <PoppinsText style={styles.titleText}>{TitleChain}</PoppinsText>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        hitSlop={{ top: 25, bottom: 25, left: 25, right: 25 }}
                        onPress={onPressSelectChain}
                        style={styles.chainView}>
                        {selectedChain?.logoURI ? (
                            <FastImage
                                source={{ uri: selectedChain?.logoURI }}
                                style={styles.selectedChain}
                                resizeMode={FastImage.resizeMode.contain}
                            />
                        ) : null}

                        <PoppinsText style={styles.chainText}>
                            {selectedChainName}
                        </PoppinsText>
                        <Image
                            source={Images.arrowDown}
                            resizeMode="contain"
                            style={styles.DownIcon}
                        />
                    </TouchableOpacity>
                </View> */}


                <View style={styles.BackgroundInputview}>
                    <Spacer customHeight={hp(1)} />
                    <PoppinsText style={styles.title}>{title}</PoppinsText>
                    <View style={styles.mainView}>
                        <View style={{ alignItems: 'flex-start' }}>
                            <TextInput
                                placeholder={Loading ? '' : '0.0'}
                                value={value}
                                keyboardType={'decimal-pad'}
                                placeholderTextColor={colors.gray4}
                                onChangeText={onChangeText}
                                editable={editable}
                                style={styles.inputStyle}
                            />
                        </View>

                        {Loading ? (
                            <ActivityIndicator
                                style={styles.activityIndicator}
                                size="small"
                                color={colors.white}
                            />
                        ) : null}

                        <View style={{}}>
                            <TouchableOpacity
                                activeOpacity={0.9}
                                disabled={disable}
                                onPress={onPressChangeToken}
                                hitSlop={{ top: 25, bottom: 25, left: 25, right: 25 }}
                                style={[appStyles.rowBasic, styles.tokenBgView]}>
                                {/* {selectedToken?.logoURI ? ( */}
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
                                {/* ) : null} */}
                                <PoppinsText style={styles.symbol}>
                                    {/* {selectedToken?.symbol
                                    ? selectedToken?.symbol?.toUpperCase()
                                    : 'Select Asset'} */}
                                    Sui
                                </PoppinsText>
                                <Image
                                    source={Images.arrowDown}
                                    resizeMode="contain"
                                    style={styles.arrowDown}
                                />
                            </TouchableOpacity>

                            <Spacer customHeight={hp(1)} />
                            <PoppinsText
                                style={{
                                    fontSize: 12,
                                    fontFamily: Fonts.Poppins.Regular,
                                    color: colors.gray108,
                                    textAlign: 'left',
                                }}>
                                {`∼$${(Number(dolorValue) * Number(value)).toFixed(3)}`}
                            </PoppinsText>
                        </View>

                    </View>

                </View>

                {/* <PoppinsText style={styles.balance}>
                    Balance: {balance}
                </PoppinsText> */}
            </View>

            {/* {selectedToken?.symbol && isMaxrow ? (
                <View style={[appStyles.rowBasic, { paddingTop: hp(2) }]}>
                    <TouchableOpacity
                        onPress={() => onpresPriceButton(25)}
                        style={[
                            priceButton == 25 ? styles.btinView : styles.btinViewdisable,
                            { width: selectedToken?.tags != 'Native' ? wp(21) : wp(29) },
                        ]}>
                        <PoppinsText
                            style={
                                priceButton == 25 ? styles.btntitle : styles.btntitledisable
                            }>
                            {'25%'}
                        </PoppinsText>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => onpresPriceButton(50)}
                        style={[
                            priceButton == 50 ? styles.btinView : styles.btinViewdisable,
                            { width: selectedToken?.tags != 'Native' ? wp(21) : wp(29) },
                        ]}>
                        <PoppinsText
                            style={
                                priceButton == 50 ? styles.btntitle : styles.btntitledisable
                            }>
                            {'50%'}
                        </PoppinsText>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => onpresPriceButton(75)}
                        style={[
                            priceButton == 75 ? styles.btinView : styles.btinViewdisable,
                            { width: selectedToken?.tags != 'Native' ? wp(21) : wp(29) },
                        ]}>
                        <PoppinsText
                            style={
                                priceButton == 75 ? styles.btntitle : styles.btntitledisable
                            }>
                            {'75%'}
                        </PoppinsText>
                    </TouchableOpacity>

                    {selectedToken?.tags != 'Native' ? (
                        <TouchableOpacity
                            onPress={() => onpresPriceButton(100)}
                            style={
                                priceButton == 100 ? styles.btinView : styles.btinViewdisable
                            }>
                            <PoppinsText
                                style={
                                    priceButton == 100 ? styles.btntitle : styles.btntitledisable
                                }>
                                {'MAX'}
                            </PoppinsText>
                        </TouchableOpacity>
                    ) : null}
                </View>
            ) : null} */}
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
        width: wp(92),
        paddingHorizontal: wp(3),
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
        height: hp(6.2),
        color: colors.gray122,
        fontSize: 26,
        fontFamily: Fonts.Poppins.Regular,
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
    }
})