import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Activities, HistoryScreen, HomeScreen, SearchScreen, Settings, SwapMain } from '../screens/App';
import { routes } from '../constants/routes';
import { StyleSheet, TouchableOpacity, View, Image, Platform, } from 'react-native';
import { hp, wp } from '../components/ResponsiveComponent';
import { Images } from '../Images';
import { appStyles } from '../utilities/appStyles';
import { colors } from '../constants/colors';
import Spacer from '../components/Spacer';

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
            width: wp(100),
            backgroundColor: colors.bottomTabsBgColor,
            borderTopWidth: 0,
            elevation: 0,
            shadowOpacity: 0,
            paddingHorizontal: wp(4),
            alignSelf: 'center',
            // borderTopWidth: 1,
            // borderTopColor: colors.black,
            marginBottom: Platform.OS == 'android' ? hp(1.5) : 0,
            paddingBottom: hp(5),
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
                  padding: wp(4),
                  alignSelf: 'center',
                  borderTopWidth: props?.onPress ? 1 : 0, borderTopColor: props?.focused ? colors.lightPurple17 : 'transparent'
                }}
              />
            ),
            tabBarIcon: ({ focused }) =>
              <View style={{}}>
                <Image
                  source={focused ? Images.homeActiveBtn : Images.homeUnActiveBtn}
                  style={focused ? styles.activeTab : styles.unActiveTab}
                  resizeMode={'contain'}
                />
              </View>
          }}
        />

        {/* <Tab.Screen
          name={routes.historyScreen}
          component={HistoryScreen}
          options={{
            tabBarButton: (props) => (
              console.log(props, 'propspropspropspropspropspropspropspropsprops'),
              <TouchableOpacity
                {...props}
                activeOpacity={1}
                style={{
                  padding: wp(4),
                  alignSelf: 'center',
                  // borderTopWidth: focused ? 1 : 0,
                  // borderTopColor: focused ? colors.lightPurple17 : 'transparent'
                }}
              />
            ),
            tabBarIcon: ({ focused }) =>
              <View style={{}}>
                <View style={{}}>
                  <Image source={focused ? Images.wifiUnActiveBtn : Images.wifiUnActiveBtn} tintColor={focused ? colors.lightPurple14 : colors.gray125} style={focused ? styles.activeTab : styles.unActiveTab} resizeMode="contain" />
                </View>
              </View>
          }}
        /> */}


        <Tab.Screen
          name={routes.activities}
          component={Activities}
          options={{
            tabBarButton: (props) => (
              <TouchableOpacity
                {...props}
                activeOpacity={1}
                style={{
                  padding: wp(4),
                  alignSelf: 'center',

                }}
              />
            ),
            tabBarIcon: ({ focused }) =>
              <View style={{}}>
                <View style={{}}>
                  <Image source={focused ? Images.historyUnActiveBtn : Images.historyUnActiveBtn} tintColor={focused ? colors.lightPurple14 : colors.gray125} style={focused ? styles.activeTab : styles.unActiveTab} resizeMode="contain" />
                </View>
              </View>
          }}
        />

        <Tab.Screen
          name={routes.swapMain}
          component={SwapMain}
          options={{
            tabBarButton: (props) => (
              <TouchableOpacity
                {...props}
                activeOpacity={1}
                style={{
                  padding: wp(4),
                  alignSelf: 'center',
                }}
              />
            ),
            tabBarIcon: ({ focused }) =>
              <View style={{}}>
                <View style={{}}>
                  <Image source={focused ? Images.swapActiveBtn : Images.swapUnActiveBtn} style={focused ? styles.activeTab : styles.unActiveTab} resizeMode="contain" />
                </View>
              </View>
          }}
        />

        <Tab.Screen
          name={routes.searchScreen}
          component={SearchScreen}
          options={{
            tabBarButton: (props) => (
              <TouchableOpacity
                {...props}
                activeOpacity={1}
                style={{
                  padding: wp(4),
                  alignSelf: 'center',

                }}
              />
            ),
            tabBarIcon: ({ focused }) =>
              <View style={{}}>
                <View style={{}}>
                  <Image source={focused ? Images.searchActiveBtn : Images.seacrhUnActiveBtn} style={focused ? styles.activeTab : styles.unActiveTab} resizeMode="contain" />
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
    // paddingBottom: hp(3),
  },
  activeTab: {
    width: wp(5),
    height: wp(5),
    alignSelf: 'center'
  },
  unActiveTab: {
    width: wp(5),
    height: wp(5),
    alignSelf: 'center'
  }
});




