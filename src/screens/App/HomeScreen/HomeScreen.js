import { TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles'
import Spacer from '../../../components/Spacer'
import { hp, wp } from '../../../components/ResponsiveComponent'
import { MainContainerApp } from '../../../components/MainContainer'
import { AccountCard, BalanceCard, HorizontalSrcoll, PrepView, RowTabs, TokensCard, TokensTabs } from './Components'
import { routes } from '../../../constants/routes'
import tokenDataService from '../../../services/tokenDataService'
import { Images } from '../../../Images'
import PoppinsText from '../../../components/PoppinsText'
import useHomeScreen from './Hooks'
import { appStyles } from '../../../utilities/appStyles'

const HomeScreen = (props) => {

    const { selectedTab, setSelectedTab } = useHomeScreen();

    const [tokenData, setTokenData] = useState([]);
    const [totalBalance, setTotalBalance] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    // Fetch token data using the service
    const fetchTokenData = async () => {
        try {
            setIsLoading(true);
            setError(null);

            const result = await tokenDataService.fetchTokenData();

            console.log('HomeScreen result:', result);

            if (result.error) {
                setError(result.error);
                setTokenData([]);
                setTotalBalance(0);
            } else {
                setTokenData(result.tokenData);
                setTotalBalance(result.totalBalance);
            }
        } catch (error) {
            console.error('Error in HomeScreen fetchTokenData:', error);
            setError('Failed to fetch token data');
            setTokenData([]);
            setTotalBalance(0);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        // Fetch token data when component mounts
        fetchTokenData();
    }, []);

    // Format total balance for display
    const formattedTotalBalance = `$${totalBalance.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })}`;

    return (
        <MainContainerApp style={{ paddingHorizontal: wp(4) }}>
            <Spacer customHeight={hp(6)} />
            <AccountCard
                profile={Images.profile1}
                accountName="@FreshWallet7" accountNumber={'Account 1'}
                rightImage1={Images.clock} rightImage2={Images.searchWhite}
                onPressRightImage1={() => { }}
                onPressRightImage2={() => { }}
                onPressAccount={() => props?.navigation.navigate(routes.accountDetails)}
            />

            <View>
                <Spacer customHeight={hp(1)} />
                <BalanceCard />


                <Spacer customHeight={hp(1)} />
                <RowTabs onPressTab={(item) => {
                    console.log('RowTabs item:', item);
                    if (item?.id === 1) {
                        props?.navigation.navigate(routes.receive)
                    } else if (item?.id === 2) {
                        props?.navigation.navigate(routes.sendTokens)
                    }
                    else if (item?.id === 3) {
                        props?.navigation.navigate(routes.swapMain)
                    }
                    else if (item?.id === 4) {
                        props?.navigation.navigate(routes.buyFromHome)
                    }
                }} />

                <Spacer />
                <HorizontalSrcoll onPress={(item) => { }} onPressCross={(item) => { }} />
            </View>

            <Spacer customHeight={hp(1.5)} />
            <View style={appStyles.row}>
                <PoppinsText style={styles.prepTitle}>Perps</PoppinsText>
                <TouchableOpacity activeOpacity={0.8} onPress={() => props?.navigation.navigate(routes.prepMain)}>
                    <PoppinsText style={styles.manageText}>Manage</PoppinsText>
                </TouchableOpacity>
            </View>
            <Spacer customHeight={hp(0.5)} />
            <PrepView />

            <Spacer customHeight={hp(3)} />
            <TokensTabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

            <Spacer customHeight={hp(0.8)} />
            <TokensCard
                tokenData={tokenData}
                isLoading={isLoading}
                onPressToken={(item) => props?.navigation.navigate(routes.tokenDetails, { tokenData: item })}
            />

        </MainContainerApp>
    )
}

export default HomeScreen
