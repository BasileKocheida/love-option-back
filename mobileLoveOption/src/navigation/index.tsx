import * as React from 'react';
import {Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/Home';

const Tab = createBottomTabNavigator();

function RouteNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {backgroundColor: 'black'},
        tabBarLabelStyle: {color: '#fff'},
      }}>
      <Tab.Screen
        options={{
          tabBarLabel: 'home',
          tabBarIcon: ({focused}: any) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={20}
              color={'#fff'}
            />
          ),
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Login',
          tabBarIcon: ({focused}: any) => (
            <Ionicons
              name={focused ? 'log-in' : 'log-in-outline'}
              size={20}
              color={'#fff'}
            />
          ),
        }}
        name="Login"
        component={LoginScreen}
      />
    </Tab.Navigator>
  );
}

export default RouteNavigation;
