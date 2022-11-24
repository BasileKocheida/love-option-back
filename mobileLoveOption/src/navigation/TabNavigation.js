import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { store } from '../store/store';
import { NestedNavigator } from '../navigation/StackNavigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AuthSlice from '../reducers/AuthSlice';
import LoginScreen from '../screens/LoginScreen';
import { useSelector } from 'react-redux';
import DailyMatchScreen from '../screens/DailyMatchScreen';
import MatchesListScreen from '../screens/MatchesListScreen';
import MatchScreen from '../screens/MatchScreen';
import HomeScreen from '../screens/Home';

// import SplashScreen from  "react-native-splash-screen";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {

  // const isAuthenticated = useSelector((state)=>state.auth.isAuthenticated)
  // console.log(isAuthenticated)
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: 'black' },
        tabBarLabelStyle: { color: '#fff' },
      }}>
      <Tab.Screen
        options={{
          tabBarLabel: 'home',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={20}
              color={'#fff'}
            />
          ),
        }}
        name="HomeScreen"
        component={HomeScreen}
      />
      <Tab.Screen
        name="DailyMatchScreen"
        component={DailyMatchScreen}
      />
      <Tab.Screen
        name="MatchesListScreen"
        component={MatchesListScreen}
      />
      <Tab.Screen
        name="MatchScreen"
        component={MatchScreen}
      />
    </Tab.Navigator>

  );
};

export default TabNavigator;