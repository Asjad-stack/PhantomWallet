import { Image, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles'
import Spacer from '../../../components/Spacer'
import { hp } from '../../../components/ResponsiveComponent'
import { Images } from '../../../Images'
import { MainContainerApp } from '../../../components/MainContainer'
import { BalanceCrad, RowTabs, TokensCard } from './Components'
import PoppinsText from '../../../components/PoppinsText'
import { appStyles } from '../../../utilities/appStyles'
import { routes } from '../../../constants/routes'
import tokenDataService from '../../../services/tokenDataService'

const HomeScreen = (props) => {
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
                <TouchableOpacity activeOpacity={0.8} onPress={() => props?.navigation.navigate(routes.notifications)}>
                    <Image source={Images.notificationLogo} resizeMode='contain' style={styles.notificationLogo} />
                </TouchableOpacity>
                <Spacer />
                <BalanceCrad
                    totalBalane={formattedTotalBalance}
                    dollarAmount={'$0.00'}
                    percentageText={'+ 0.0%'}
                />
                <Spacer />
                <RowTabs onPressTab={(item) => {
                    if (item.text === 'Receive') {
                        props?.navigation.navigate(routes.receive)
                    } else if (item.text === 'Send') {
                        props?.navigation.navigate(routes.sendTokens)
                    }
                }} />
                <Spacer />
                <View style={{ ...appStyles.row }}>
                    <PoppinsText style={styles.tokensText}>Tokens</PoppinsText>

                    <View style={appStyles.rowBasic}>
                        <TouchableOpacity activeOpacity={0.8} onPress={() => props?.navigation.navigate(routes.importTokens)}>
                            <Image source={Images.threeVerticalDots} resizeMode='contain' style={styles.threeVerticalDots} />
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={0.8} onPress={fetchTokenData}>
                            <Image source={Images.refresh} resizeMode='contain' style={styles.threeVerticalDots} />
                        </TouchableOpacity>
                    </View>
                </View>
                {isLoading && (
                    <View style={{ alignItems: 'center', paddingVertical: hp(0.3) }}>
                        <PoppinsText style={{ color: 'white' }}>Loading token data...</PoppinsText>
                    </View>
                )}
                {error && (
                    <View style={{ alignItems: 'center', paddingVertical: hp(2) }}>
                        <PoppinsText style={{ color: 'red' }}>Error: {error}</PoppinsText>
                    </View>
                )}
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
