import React from 'react';
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { Provider, useStore } from 'react-redux';
import { store } from './src/store/store';
import StackNavigation, { NestedNavigator } from './src/navigation/StackNavigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LoginScreen from './src/screens/LoginScreen';
import AuthSlice from './src/reducers/AuthSlice';
import HomeScreen from './src/screens/Home';

// import SplashScreen from  "react-native-splash-screen";

const Tab = createBottomTabNavigator();

const App = ({navigation}) => {
  
  console.log(store.getState(AuthSlice))
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <NavigationContainer>
          <StackNavigation />
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
};

export default App;