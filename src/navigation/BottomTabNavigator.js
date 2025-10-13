import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HistoryScreen, HomeScreen, Reward, Settings } from '../screens/App';
import { routes } from '../constants/routes';
import { StyleSheet, TouchableOpacity, View, Image, } from 'react-native';
import { hp, wp } from '../components/ResponsiveComponent';
import { Images } from '../Images';
import { appStyles } from '../utilities/appStyles';
import { colors } from '../constants/colors';

const Tab = createBottomTabNavigator();


function BottomTabBarNav({ navigation }) {
  return (
    <View style={[styles.tabBarBackground, appStyles.row]}>

      <Tab.Navigator
        initialRouteName={routes.homeScreen}
        screenOptions={{
          tabBarShowLabel: false,
          tabBarHideOnKeyboard: false,
          headerShown: false,

          tabBarStyle: {
            width: wp(92),
            height: hp(10),
            backgroundColor: colors.bottomTabsBgColor,
            borderTopWidth: 0,
            elevation: 0,
            shadowOpacity: 0,
            paddingHorizontal: wp(4),
            borderWidth: 1.5,
            borderColor: colors.bottomTabsBorderColor,
            borderRadius: 24,
            alignSelf: 'center',
          }
        }}>

        <Tab.Screen
          name={routes.homeScreen}
          component={HomeScreen}
          options={{
            tabBarButton: (props) => (
              <TouchableOpacity
                {...props}
                activeOpacity={1}
                style={{
                  justifyContent: 'center',
                  padding: wp(4),
                  height: hp(10),
                  alignSelf: 'center',
                }}
              />
            ),
            tabBarIcon: ({ focused }) =>
              <View style={{}}>
                <Image
                  source={focused ? Images.homeActiveTab : Images.homeUnActiveTab}
                  style={focused ? styles.activeTab : styles.unActiveTab}
                  resizeMode={'contain'}
                />
              </View>
          }}
        />

        <Tab.Screen
          name={routes.historyScreen}
          component={HistoryScreen}
          options={{
            tabBarButton: (props) => (
              <TouchableOpacity
                {...props}
                activeOpacity={1}
                style={{
                  justifyContent: 'center',
                  padding: wp(4),
                  height: hp(10),
                  alignSelf: 'center',

                }}
              />
            ),
            tabBarIcon: ({ focused }) =>
              <View style={{}}>
                <View style={{}}>
                  <Image source={focused ? Images.historyActiveTab : Images.historyUnActiveTab} style={focused ? styles.activeTab : styles.unActiveTab} resizeMode="contain" />
                </View>
              </View>
          }}
        />

        <Tab.Screen
          name={routes.rewardScreen}
          component={Reward}
          options={{
            tabBarButton: (props) => (
              <TouchableOpacity
                {...props}
                activeOpacity={1}
                style={{
                  justifyContent: 'center',
                  padding: wp(4),
                  height: hp(10),
                  alignSelf: 'center',
                }}
              />
            ),
            tabBarIcon: ({ focused }) =>
              <View style={{}}>
                <View style={{}}>
                  <Image source={focused ? Images.rewardActiveTab : Images.rewardUnActiveTab} style={focused ? styles.activeTab : styles.unActiveTab} resizeMode="contain" />
                </View>
              </View>
          }}
        />

        <Tab.Screen
          name={routes.settingScreen}
          component={Settings}
          options={{
            tabBarButton: (props) => (
              <TouchableOpacity
                {...props}
                activeOpacity={1}
                style={{
                  justifyContent: 'center',
                  padding: wp(4),
                  height: hp(10),
                  alignSelf: 'center',

                }}
              />
            ),
            tabBarIcon: ({ focused }) =>
              <View style={{}}>
                <View style={{}}>
                  <Image source={focused ? Images.settingActiveTab : Images.settingUnActiveTab} style={focused ? styles.activeTab : styles.unActiveTab} resizeMode="contain" />
                </View>
              </View>
          }}
        />

      </Tab.Navigator>
    </View>
  );
}

export default BottomTabBarNav;

const styles = StyleSheet.create({
  tabBarBackground: {
    width: wp(100),
    height: hp(10),
    flex: 1,
    alignSelf: 'flex-end',
    backgroundColor: colors.bgColor,
    alignSelf: 'center',
    paddingBottom: hp(3),
  },
  activeTab: {
    width: wp(22),
    height: wp(10),
    alignSelf: 'center'
  },
  unActiveTab: {
    width: wp(22),
    height: wp(6),
    alignSelf: 'center'
  }
});