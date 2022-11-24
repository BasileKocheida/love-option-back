import {
    Box,
    Center,
    Heading,
    VStack,
    FormControl,
    Input,
    Link,
    Button,
    HStack,
    Text,
    Image
  } from 'native-base';
import React, { useState } from 'react';
import { TextInput } from 'react-native';
import { useDispatch } from 'react-redux'
import { register } from '../reducers/RegisterSlice';
import { store } from '../store/store';

  
  const RegisterScreen = () => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState<string>('')
    const [plainPassword, setPassword] = useState<string>('')
  
    const handleSubmit =  async() => {
      const result = await store.dispatch(register({email, plainPassword}))
    }
  
    return (
      <Center w="100%" h="100%" style={{backgroundColor: '#1A1B22', paddingTop: 50}}>
        <Box safeArea p="2" py="2" w="90%" style={{flex:1}}>
          <Image source={require("../assets/images/Love_Option.png")} alt="Love Option" style={{width: "100%", height: 150}}
          />
          <Text style={{color: '#FFFFFF', textAlign: "center", fontSize: 15, marginBottom:25}}>Create an account</Text>
          <VStack space={3}>
            <FormControl>
              <FormControl.Label style={{left:20}}>Email ID</FormControl.Label>
              <TextInput placeholder='example@gmail.com' onChangeText={(e) => setEmail(e)} placeholderTextColor="white"  style={{backgroundColor: "#23252F", borderColor:"#FE5870",borderRadius:50, borderWidth:2, paddingLeft:20, color:'white'}}/>
            </FormControl>
            <FormControl>
              <FormControl.Label style={{left:20}}>Password</FormControl.Label>
              <TextInput placeholder='Password' onChangeText={(e) => setPassword(e)} placeholderTextColor="white" style={{backgroundColor: "#23252F", borderColor:"#FE5870",borderRadius:50, borderWidth:2, paddingLeft:20, color:'white'}}/>
            </FormControl>
            <Button 
              mt="1" 
              style={{backgroundColor: '#FD6B80', borderColor:"#FE5870",borderRadius:50, marginTop:25}}
              onPress={() => {handleSubmit()}}>
              <Text style={{color: '#FFFFFF'}}>Sign in</Text>
            </Button>
            <HStack mt="2" justifyContent="center">
              <Text
                fontSize="sm"
                color="white"
                _dark={{
                  color: 'warmGray.200',
                }}>
                Already an account.{' '}
              </Text>
              <Link
                _text={{
                  color: 'white',
                  fontWeight: 'medium',
                  fontSize: 'sm',
                }}
                href="/">
                Sign in
              </Link>
            </HStack>
          </VStack>
        </Box>
      </Center>
    );
  };
  
  export default RegisterScreen;