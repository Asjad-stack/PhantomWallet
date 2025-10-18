import React from 'react'
import { routes } from '../constants/routes';
import {
    HistoryDetails, RewardInfo, Security, TermsAndServices, DeleteAccount, WalletConnect, Notifications, ImportTokens,
    Receive, TokenAddress, SendTokens, SendTokenAddress, SendTokensAmount, SendConfirmation, TokenDetails,
    AccountDetails, EditProfile, ManageProfile, EditUserName, FollowersScreen, PrivacyScreen,
    Activities,
    ActivitiesDetails,
    BuyFromHome,
    BuyTokenAmount,
    ScanQrCode,
    EnterSendingAmount,
    SendSummaryScreen,
    SendSuccess,
    PrepMain,
    AddFunds,
} from '../screens/App';
import BottomTabBarNav from './BottomTabNavigator';
import { createStackNavigator } from '@react-navigation/stack';
import { PinScreen } from '../screens/Auth';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName={routes.MainTabs}
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name={routes.MainTabs} component={BottomTabBarNav} />
            <Stack.Screen name={routes.historyDetails} component={HistoryDetails} />
            <Stack.Screen name={routes.rewardInfoScreen} component={RewardInfo} />
            <Stack.Screen name={routes.security} component={Security} />
            <Stack.Screen name={routes.termsOfService} component={TermsAndServices} />
            <Stack.Screen name={routes.deleteAccount} component={DeleteAccount} />
            <Stack.Screen name={routes.walletConnect} component={WalletConnect} />
            <Stack.Screen name={routes.pinScreen} component={PinScreen} />
            <Stack.Screen name={routes.notifications} component={Notifications} />
            <Stack.Screen name={routes.importTokens} component={ImportTokens} />
            <Stack.Screen name={routes.receive} component={Receive} />
            <Stack.Screen name={routes.tokenAddress} component={TokenAddress} />
            <Stack.Screen name={routes.sendTokens} component={SendTokens} />
            <Stack.Screen name={routes.sendTokensAddress} component={SendTokenAddress} />
            <Stack.Screen name={routes.sendTokensAmont} component={SendTokensAmount} />
            <Stack.Screen name={routes.sendConfirmation} component={SendConfirmation} />
            <Stack.Screen name={routes.tokenDetails} component={TokenDetails} />

            {/* // New */}
            <Stack.Screen name={routes.accountDetails} component={AccountDetails} />
            <Stack.Screen name={routes.editProfile} component={EditProfile} />
            <Stack.Screen name={routes.manageProfile} component={ManageProfile} />
            <Stack.Screen name={routes.editUserName} component={EditUserName} />
            <Stack.Screen name={routes.followersScreen} component={FollowersScreen} />
            <Stack.Screen name={routes.privacyScreen} component={PrivacyScreen} />
            <Stack.Screen name={routes.activities} component={Activities} />
            <Stack.Screen name={routes.activitiesDetails} component={ActivitiesDetails} />
            <Stack.Screen name={routes.buyFromHome} component={BuyFromHome} />
            <Stack.Screen name={routes.buyTokenAmount} component={BuyTokenAmount} />
            <Stack.Screen name={routes.scanQrCode} component={ScanQrCode} />
            <Stack.Screen name={routes.enterSendingAmount} component={EnterSendingAmount} />
            <Stack.Screen name={routes.sendSummaryScreen} component={SendSummaryScreen} />
            <Stack.Screen name={routes.sendSuccess} component={SendSuccess} />
            <Stack.Screen name={routes.prepMain} component={PrepMain} />
            <Stack.Screen name={routes.addFunds} component={AddFunds} />
        </Stack.Navigator>
    );
}

export default AppNavigator
