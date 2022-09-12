import * as React from 'react';
import {Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LoginScreen from '../screens/LoginScreen';

function HomeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function NavTabs() {
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
          tabBarIcon: ({focused}) => (
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
          tabBarIcon: ({focused}) => (
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
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default NavTabs;
