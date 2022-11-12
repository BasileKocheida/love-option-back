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
    Image,
    View,
    Stack,
    ScrollView
  } from 'native-base';
  import React from 'react';
import { TouchableOpacity } from 'react-native';
  
  const MatchesListScreen = () => {
   
    return (
        <ScrollView style={{flex: 1, backgroundColor: '#1A1B22', padding: 15}}>
          <TouchableOpacity>
            <View style={{flex: 1}}>
                <View style={{flexDirection: 'row', alignSelf: 'center'}}>
                  <Image source={require("../assets/images/user.jpg")} alt="Love Option" style={{width: 100, height: 100, borderRadius: 15, marginBottom:30, alignSelf: 'center' }}
                  />
                  <Text style={{color: '#FFFFFF', fontSize:20, alignSelf:'center',borderRadius:15, padding: 10, marginBottom:30, backgroundColor: 'rgba(255, 77, 103, 0.25)'}}>Score : 0%</Text>
                  <Text style={{color: '#FD6B80', textAlign: "center", fontSize: 20, marginBottom:25}}>Choose a love option !</Text>
                </View>
                <View style={{flexDirection: 'row', alignSelf: 'center'}}>
                  
                </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
    );
  };
  
  export default MatchesListScreen;