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
    Stack
  } from 'native-base';
  import React, { useState } from 'react';
  
  const MatchScreen = () => {
   
    return (
        <View style={{flex: 1, backgroundColor: '#1A1B22', padding: 15}}>
          <Image source={require("../assets/images/user.jpg")} alt="Love Option" style={{width: "60%", height: 250, borderRadius: 15, marginBottom:30, alignSelf: 'center' }}
          />
          <Text style={{color: '#FFFFFF', fontSize:20, alignSelf:'center',borderRadius:15, padding: 10, marginBottom:30, backgroundColor: 'rgba(255, 77, 103, 0.25)'}}>Score : 0%</Text>
          <Text style={{color: '#FD6B80', textAlign: "center", fontSize: 20, marginBottom:25}}>Choose a love option !</Text>
          <View style={{flex: 1}}>
            <View style={{flexDirection: 'row', alignSelf: 'center'}}>
              <Button style={{backgroundColor: '#FD6B80', borderColor:"#FE5870", borderRadius:50, width:150, margin:10}}>
                <Text style={{color: '#FFFFFF'}}>Go to play</Text>
              </Button>
              <Button style={{backgroundColor: '#FD6B80', borderColor:"#FE5870", borderRadius:50, width:150, margin:10}}>
                <Text style={{color: '#FFFFFF'}}>Choose a quizz</Text>
              </Button>
            </View>
            <View style={{flexDirection: 'row', alignSelf: 'center'}}>
              <Button style={{backgroundColor: '#FD6B80', borderColor:"#FE5870", borderRadius:50, width:150, margin:10}}>
                <Text style={{color: '#FFFFFF'}}>Matches list</Text>
              </Button>
              <Button style={{backgroundColor: '#FD6B80', borderColor:"#FE5870", borderRadius:50, width:150, margin:10}}>
                <Text style={{color: '#FFFFFF'}}>See profile</Text>
              </Button>
            </View>
          </View>
        </View>
    );
  };
  
  export default MatchScreen;