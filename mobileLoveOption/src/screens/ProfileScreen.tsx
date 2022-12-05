import React from 'react';
import {View, Text, Button, Center, HStack, VStack} from 'native-base';
import AppBar from "../components/AppBar/AppBar";
import {store} from "../store/store";
import {logout} from "../reducers/AuthSlice";

interface Props {
  navigation: any;
}

export default function ProfileScreen(props: Props) {
  return (
    <View bgColor={'black'} h={'100%'}>
      <AppBar
        ScreenName={'Profil'}
        navigation={props.navigation}
        goBack={true}
      />
      <VStack h={'100%'} alignItems={'center'} justifyContent={'center'}>
        <Text color={'#fff'}>Profile Screen</Text>
        <Button
          w={300}
          colorScheme={'success'}
          onPress={async () => {
            props.navigation.navigate('ProfileAddInformationsScreen');
          }}>
          <Text>Complétion du profil</Text>
        </Button>
        <Button
          w={300}
          colorScheme={'danger'}
          onPress={async () => {
            await store.dispatch(logout());
            props.navigation.navigate('LoginScreen');
          }}>
          <Text>Deconnexion</Text>
        </Button>
      </VStack>
    </View>
  );
}
