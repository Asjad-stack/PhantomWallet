import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { routes } from '../constants/routes';
import AuthNavigator from './AuthNavigator';
import AppNavigator from './AppNavigation';
import { colors } from '../constants/colors';

const { Navigator, Screen } = createNativeStackNavigator();


const Navigation = () => {

    return (
        <NavigationContainer>
            <Navigator screenOptions={{
                headerShown: false, navigationBarColor: "#100D26", contentStyle: { backgroundColor: colors.blueBgColor }, // prevent white flash
                animationEnabled: true,
            }}
                initialRouteName={routes.authStack}>
                <Screen name={routes.authStack} component={AuthNavigator} />
                <Screen name={routes.appStack} component={AppNavigator} />
            </Navigator>
        </NavigationContainer>
    )
}

export default Navigation
