import { View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles'
import Spacer from '../../../components/Spacer'
import { hp } from '../../../components/ResponsiveComponent'
import { MainContainerApp } from '../../../components/MainContainer'
import { AccountCard, BalanceCard, HorizontalSrcoll, PrepView, RowTabs, TokensCard, TokensTabs } from './Components'
import { routes } from '../../../constants/routes'
import tokenDataService from '../../../services/tokenDataService'
import { Images } from '../../../Images'
import PoppinsText from '../../../components/PoppinsText'
import useHomeScreen from './Hooks'

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
        <MainContainerApp>
            <Spacer customHeight={hp(6)} />
            <View style={styles.mainView}>
                <Spacer />
                <AccountCard
                    profile={Images.profile1}
                    accountName="@FreshWallet7" accountNumber={'Account 1'}
                    rightImage1={Images.clock} rightImage2={Images.searchWhite}
                    onPressRightImage1={() => { }} onPressRightImage2={() => { }}
                />

                <Spacer />
                <BalanceCard />


                <Spacer />
                <RowTabs onPressTab={(item) => {
                    if (item.text === 'Receive') {
                        props?.navigation.navigate(routes.receive)
                    } else if (item.text === 'Send') {
                        props?.navigation.navigate(routes.sendTokens)
                    }
                }} />

                <Spacer />
                <HorizontalSrcoll onPress={(item) => { }} onPressCross={(item) => { }} />

                <Spacer />
                <PoppinsText style={styles.prepTitle}>Perps</PoppinsText>
                <Spacer customHeight={hp(1)} />
                <PrepView />

                <Spacer customHeight={hp(3)} />
                <TokensTabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

                <Spacer />
                <TokensCard
                    tokenData={tokenData}
                    isLoading={isLoading}
                    onPressToken={(item) => props?.navigation.navigate(routes.tokenDetails, { tokenData: item })}
                />
            </View>
        </MainContainerApp>
    )
}

export default HomeScreen
