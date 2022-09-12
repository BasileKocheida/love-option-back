import React from 'react';
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import RouteNavigation from './src/navigation';
// import SplashScreen from  "react-native-splash-screen";



const App = () => {

  // Hide Splash screen on app load.
  // React.useEffect(() => {
  //   SplashScreen.hide();
  // });

  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <NavigationContainer>
          <RouteNavigation />
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
};

export default App;