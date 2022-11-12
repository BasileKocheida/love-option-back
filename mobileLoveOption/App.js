import React from 'react';
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import StackNavigation, { HomeNavigator } from './src/navigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LoginScreen from './src/screens/LoginScreen';

// import SplashScreen from  "react-native-splash-screen";

const Tab = createBottomTabNavigator();


const App = () => {

  // Hide Splash screen on app load.
  // React.useEffect(() => {
  //   SplashScreen.hide();
  // });

  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <NavigationContainer>
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
              name="HomeNavigator"
              component={HomeNavigator}
            />
            <Tab.Screen
              options={{
                tabBarLabel: 'login',
                tabBarIcon: ({focused}) => (
                  <Ionicons
                    name={focused ? 'log-out' : 'log-in'}
                    size={20}
                    color={'#fff'}
                  />
                ),
              }}
              name="LoginScreen"
              component={LoginScreen}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
};

export default App;