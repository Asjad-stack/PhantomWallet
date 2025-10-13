import { Image, ImageBackground, ScrollView, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MainContainerApp } from '../../../components/MainContainer'
import Spacer from '../../../components/Spacer'
import { hp } from '../../../components/ResponsiveComponent'
import { styles } from './styles'
import { MainHeader } from '../../../components/MainHeader'
import { Images } from '../../../Images'
import useTokenDetails from './Hooks'
import PoppinsText from '../../../components/PoppinsText'
import { appStyles } from '../../../utilities/appStyles'
import { HistoryCard, InfoCard, RowTimeIntervals } from './Components'
import { Graph } from '../../../components/Grpah'

const TokenDetails = (props) => {

    const { previousTokenData, loading, sortedTransactions, selectedTab, setSelectedTab } = useTokenDetails(props);

    const data = [{ value: 50 }, { value: 80 }, { value: 90 }, { value: 70 }]

    return (
        <MainContainerApp>
            <Spacer customHeight={hp(6)} />
            <View style={styles.mainView}>
                <MainHeader leftImage={Images.backArrow} title={previousTokenData?.chainName ?? 'Token Details'} onPressLeftImage={() => props?.navigation.goBack()} />
                <Spacer />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <PoppinsText style={styles.tokenCurentPrice}>{previousTokenData?.currentPrice}</PoppinsText>

                    <View style={{ ...appStyles.rowBasic, alignSelf: 'center' }}>
                        <Image source={Images.greenArrowUp} resizeMode='contain' style={styles.greenArrowUp} />
                        <PoppinsText style={styles.dollarPrice}>{previousTokenData?.dollarPrice}</PoppinsText>
                        <ImageBackground source={Images.percentageRoundBox} resizeMode='contain' style={styles.percentageRoundBox}>
                            <PoppinsText style={styles.percentageText}>{'+2.20%'}</PoppinsText>
                        </ImageBackground>
                    </View>
                    <Spacer />
                    <Graph />

                    <Spacer />
                    <RowTimeIntervals selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
                    <Spacer />

                    <PoppinsText style={styles.about}>About</PoppinsText>
                    <Spacer customHeight={hp(1)} />
                    <PoppinsText style={styles.desc}>'Solana (SOL) is a cryptocurrency (a virtual currency) designed to act as money and a form of payment outside the control of any one person, group, or entity.</PoppinsText>
                    <Spacer />
                    <PoppinsText style={styles.positionText}>Your Position</PoppinsText>
                    <Spacer />
                    <TouchableOpacity activeOpacity={0.8} onPress={() => { }} style={{ paddingVertical: hp(0.7) }}>
                        <ImageBackground source={Images.authMainRoundBox} resizeMode='contain' style={styles.authMainRoundBox}>
                            <View style={appStyles.row}>
                                <View style={appStyles.rowBasic}>
                                    <Image source={{ uri: (previousTokenData?.tokenLogo) }} resizeMode='contain' style={styles.tokenLogo} />
                                    <View>
                                        <PoppinsText style={styles.tokenName}>{previousTokenData?.tokenSymbol}</PoppinsText>
                                        <PoppinsText style={styles.tokenSymbol}>{previousTokenData?.tokenName}</PoppinsText>
                                    </View>
                                </View>
                                <View>
                                    <PoppinsText style={styles.tokenPrice}>{previousTokenData?.tokenPrice}</PoppinsText>
                                    <PoppinsText style={styles.dollarPrice}>{previousTokenData?.dollarPrice}</PoppinsText>
                                </View>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                    <Spacer customHeight={hp(1)} />
                    <PoppinsText style={styles.infoText}>Info</PoppinsText>
                    <Spacer customHeight={hp(1)} />
                    <InfoCard />
                    <Spacer />
                    <PoppinsText style={styles.transactionsText}>Transactions History</PoppinsText>
                    <Spacer />
                    <HistoryCard
                        transactions={sortedTransactions}
                        onPressToken={(item) => props?.navigation.navigate(routes.historyDetails, { item: item })}
                    />
                    <Spacer customHeight={hp(5)} />
                </ScrollView>

            </View>
        </MainContainerApp>
    )
}

export default TokenDetails
