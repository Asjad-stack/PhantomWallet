import { Image, ScrollView, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MainContainerApp } from '../../../components/MainContainer'
import Spacer from '../../../components/Spacer'
import { hp, wp } from '../../../components/ResponsiveComponent'
import { styles } from './styles'
import { Images } from '../../../Images'
import useTokenDetails from './Hooks'
import PoppinsText from '../../../components/PoppinsText'
import { appStyles } from '../../../utilities/appStyles'
import { PerformanceCard, RowTabs, RowTimeIntervals, StakeOptionRBSheet, TokenDetailsHeader, TokenDetailsInfoCard } from './Components'
import { Graph } from '../../../components/Grpah'
import { RowButtons } from '../../../components/RowButtons'
import { colors } from '../../../constants/colors'
import { routes } from '../../../constants/routes'

const TokenDetails = (props) => {

    const { previousTokenData, selectedTab, setSelectedTab, stakeOptionBottomSheet } = useTokenDetails(props);

    const data = [{ value: 50 }, { value: 80 }, { value: 90 }, { value: 70 }]

    return (
        <MainContainerApp>
            <Spacer customHeight={hp(7)} />
            <View style={styles.mainView}>
                <TokenDetailsHeader leftImage={Images.backArrow} tokenLogo={Images.tokenLogo} tokenName={'Solana'} status={'421 people here'} rightImage={Images.followImage} onPressBackArrow={() => props?.navigation.goBack()} />
                <Spacer />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <PoppinsText style={styles.tokenCurentPrice}>{previousTokenData?.currentPrice}</PoppinsText>

                    <View style={{ ...appStyles.rowBasic, alignSelf: 'center' }}>
                        <PoppinsText style={styles.dollarPrice}>{previousTokenData?.dollarPrice}</PoppinsText>
                        <View style={styles.percentageRoundBox}>
                            <PoppinsText style={styles.percentageText}>{'+2.20%'}</PoppinsText>
                        </View>
                    </View>

                    <Spacer />
                    <Graph />

                    <Spacer />
                    <RowTimeIntervals selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

                    <Spacer />
                    <RowTabs onPressTab={(item) => item?.id == 4 ? stakeOptionBottomSheet?.current?.open() : null} />

                    <Spacer />
                    <PoppinsText style={styles.positionText}>Your Position</PoppinsText>

                    <Spacer />
                    <View style={appStyles.row}>
                        <View style={styles.bgView}>
                            <PoppinsText style={styles.balanceText}>Balance</PoppinsText>
                            <Spacer customHeight={hp(0.5)} />
                            <PoppinsText style={styles.balance}>0.01103</PoppinsText>
                        </View>
                        <View style={styles.bgView}>
                            <PoppinsText style={styles.balanceText}>Value</PoppinsText>
                            <Spacer customHeight={hp(0.5)} />
                            <PoppinsText style={styles.balance}>$2.48</PoppinsText>
                        </View>
                    </View>

                    <Spacer />
                    <View style={[styles.hourBgView, appStyles.row]}>
                        <PoppinsText style={styles.changeReturn}>24h Return</PoppinsText>
                        <PoppinsText style={styles.changeAmount}>+$0.05</PoppinsText>
                    </View>

                    <Spacer />
                    <PoppinsText style={styles.perpsText}>Perps Position</PoppinsText>
                    <Spacer />
                    <View style={[styles.hourBgView, appStyles.rowBasic]}>
                        <Image source={Images.twoRoundsWithCircle} resizeMode='contain' style={styles.twoRoundsWithCircle} />
                        <View>
                            <PoppinsText style={styles.tradeText}>Trade SOL perp</PoppinsText>
                            <PoppinsText style={styles.multiplyText}>Multiply your P&L up to 20x</PoppinsText>
                        </View>
                    </View>

                    <Spacer />
                    <PoppinsText style={styles.perpsText}>Your Stake</PoppinsText>
                    <Spacer />
                    <View style={styles.hourBgView}>
                        <PoppinsText style={styles.stakeText}>Stake with Phantom</PoppinsText>
                        <Spacer customHeight={hp(0.3)} />
                        <PoppinsText style={styles.earnText}>Earn{' '}
                            <PoppinsText style={styles.percentText}>7.10%{' '}</PoppinsText>
                            <PoppinsText style={styles.earnText}>per year</PoppinsText>
                        </PoppinsText>
                        <Spacer />
                        <Image source={Images.graphDotLines} resizeMode='contain' style={styles.graphDotLines} />
                        <Spacer />
                        <View style={{ alignSelf: 'center', paddingHorizontal: wp(4) }}>
                            <RowButtons titlebtn1={'Learn More'} titlebtn2={'Start Earning'} titleColor2={colors.green11} style={styles.btn1Container} styleBtn={styles.btn2Container} />
                        </View>
                    </View>

                    <Spacer />
                    <PoppinsText style={styles.infoText1}>Info</PoppinsText>
                    <Spacer />
                    <TokenDetailsInfoCard />

                    <Spacer />
                    <PoppinsText style={styles.about}>About</PoppinsText>
                    <Spacer customHeight={hp(1)} />
                    <PoppinsText style={styles.desc}>SOL is the native token of the Solana blockchain. Its
                        technical co-founder, Anatoly Yakovenko, was fed
                        up with blockchains that crawled along at snail's p...</PoppinsText>

                    <Spacer />
                    <TouchableOpacity activeOpacity={0.8}>
                        <PoppinsText style={styles.showMore}>Show More</PoppinsText>
                    </TouchableOpacity>

                    <Spacer />
                    <View style={{ ...appStyles.row, width: wp(65) }}>
                        <TouchableOpacity activeOpacity={0.8}>
                            <Image source={Images.website} resizeMode='contain' style={styles.website} />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8}>
                            <Image source={Images.telegram} resizeMode='contain' style={styles.telegram} />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8}>
                            <Image source={Images.twitter} resizeMode='contain' style={styles.twitter} />
                        </TouchableOpacity>
                    </View>

                    <Spacer />
                    <PoppinsText style={styles.performanceText}>24h Performance</PoppinsText>
                    <Spacer />
                    <PerformanceCard />

                    <Spacer />
                    <View style={appStyles.row}>
                        <PoppinsText style={styles.performanceText}>Activity</PoppinsText>
                        <TouchableOpacity activeOpacity={0.8}>
                            <PoppinsText style={styles.showMore}>See More</PoppinsText>
                        </TouchableOpacity>
                    </View>

                    <Spacer />
                    <View style={[styles.hourBgView, appStyles.row]}>
                        <View style={appStyles.rowBasic}>
                            <Image source={Images.solanaLogo} resizeMode='contain' style={styles.twoRoundsWithCircle} />
                            <View>
                                <View style={appStyles.row}>
                                    <PoppinsText style={styles.receivedText}>Received</PoppinsText>
                                    <PoppinsText style={styles.amountCrypto}>+0.01103 SOL</PoppinsText>
                                </View>
                                <PoppinsText style={styles.address}>From CtcB...A8r2</PoppinsText>
                            </View>
                        </View>
                    </View>

                    <Spacer />
                    <PoppinsText style={styles.resText1}>Past performance is not an indicator of future performance.</PoppinsText>

                    <Spacer />
                    <PoppinsText style={styles.resText1}>Estimated APY is based in part on network inflation rates outside of
                        Phantom's control and may decrease over time.</PoppinsText>

                    <Spacer />
                    <PoppinsText style={styles.resText1}>Trading perpetual contracts involves significant risk, including the
                        potential for sudden and total loss of your investment and collateral
                        due to high leverage and market volatility, and may not be suitable for
                        all users. Prices may be influenced by funding rates and liquidity and
                        you may be subiect to automatic liguidations without notice. Market</PoppinsText>

                    <Spacer customHeight={hp(5)} />
                </ScrollView>
            </View>
            <View style={{ paddingBottom: hp(4), backgroundColor: colors.black, alignSelf: 'center' }}>
                <RowButtons titlebtn1={'Buy'} titlebtn2={'Sell'} titleColor1={colors.gray113} titleColor2={colors.gray113} onPressBtn1={() => props?.navigation.navigate(routes.buyMain)} onPressBtn2={() => props?.navigation.navigate(routes.buyMain, { sellTokenFlow: true })} style={styles.bottomBtn1} styleBtn={styles.bottomBtn2} />
            </View>
            <StakeOptionRBSheet stakeOptionBottomSheet={stakeOptionBottomSheet}
                onPress={(item) => {
                    if (item?.id == 1) {
                        stakeOptionBottomSheet?.current?.close();
                        props?.navigation.navigate(routes.enterStakeSolAmount);
                    } else if (item?.id == 2) {
                        stakeOptionBottomSheet?.current?.close();
                        props?.navigation.navigate(routes.stakeTokensEarnAwards);
                    }
                }}
            />
        </MainContainerApp>
    )
}

export default TokenDetails
