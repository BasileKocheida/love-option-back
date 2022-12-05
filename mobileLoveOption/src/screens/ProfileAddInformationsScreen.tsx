import { Link } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {primaryColor} from '../utils/colors';
import {
  Box,
  Center,
  VStack,
  FormControl,
  Button,
  HStack,
  Text,
  Image,
  Icon
} from 'native-base';
import React, { useEffect, useState } from 'react';
import { TextInput, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import AppBar from '../components/AppBar/AppBar';
import { login } from '../reducers/AuthSlice';
import { store } from '../store/store';

interface Props {
  navigation: any
}

const ProfileAddInformationsScreen = (props: Props) => {
  
//   const [email, setEmail] = useState<string>('')
//   const [password, setPassword] = useState<string>('')
//   //utiliser le useSelector pour observer/surveiller mon state (avertir à chaque changement de variable)
//   const isAuthenticated = useSelector<any>((state)=>state.auth.isAuthenticated)


  const handleSubmit =  async () => {

    // const result = await store.dispatch(login({email, password}))
    // console.log('PPL', result);
    
  }

  //Surveille le state, le déclenche au 1 er render de loginScreen et quand isAuthenticated change

//   useEffect(()=>{
//     //naviguer vers la page d'accueil
//     if (isAuthenticated == true) {
//       console.log("la", isAuthenticated);
      
//       props.navigation.navigate('MainScreen', {
//         screen: 'HomeScreen'
//       })
//     }
//   }, [isAuthenticated])

  return (
    <Center w="100%" h="100%" style={{backgroundColor: '#1A1B22', paddingTop: 50}}>
    <AppBar navigation={props.navigation} goBack={false} ScreenName="Fill your profile" />
    <Box safeArea p="2" py="2" w="90%" style={{flex:1}}>
      <Image source={require("../assets/images/user1.jpg")} alt="Love Option" style={{width: 100, height: 100, borderRadius:50, alignSelf: "center"}}/>
      <TouchableOpacity style={{alignSelf: "center", marginLeft:70}}>
        <Ionicons name={'add-circle-outline'} size={20} color={primaryColor} />
      </TouchableOpacity>
      <VStack space={3}>
        <FormControl>
          <FormControl.Label style={{left:20}}>Firstname</FormControl.Label>
          <TextInput placeholder='Firstname'  placeholderTextColor="white" style={{backgroundColor: "#23252F", borderColor:"#FE5870",borderRadius:50, borderWidth:2, paddingLeft:20, color:'white'}}/>
        </FormControl>
        <FormControl>
          <FormControl.Label style={{left:20}}>Lastname</FormControl.Label>
          <TextInput placeholder='Lastname'  placeholderTextColor="white" style={{backgroundColor: "#23252F", borderColor:"#FE5870",borderRadius:50, borderWidth:2, paddingLeft:20, color:'white'}}/>
        </FormControl>
        <Button 
          mt="1" 
          style={{backgroundColor: '#FD6B80', borderColor:"#FE5870",borderRadius:50, marginTop:25}}
          onPress={() => {}}>
          <Text style={{color: '#FFFFFF'}}>Next</Text>
        </Button>
      </VStack>
    </Box>
  </Center>
  );
};

export default ProfileAddInformationsScreen;