import * as React from 'react';
import {Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import DailyMatchScreen from '../screens/DailyMatchScreen';
import MatchesListScreen from '../screens/MatchesListScreen';

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator > 
       <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
      />
       <Stack.Screen
        name="DailyMatchScreen"
        component={DailyMatchScreen}
      />
      <Stack.Screen
        name="MatchesListScreen"
        component={MatchesListScreen}
      />
    </Stack.Navigator>
  );
}
export {HomeNavigator};

// Ajouter une autre stack si besoin
