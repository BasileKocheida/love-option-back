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
import { MatchListNavigator } from '../navigation/StackNavigation';
  
  const MatchesListScreen = ({ navigation }) => {
   
    return (
        <ScrollView style={{flex: 1, backgroundColor: '#1A1B22', padding: 15}}>
          <TouchableOpacity onPress={() => navigation.navigate('MatchScreen')}>
            <View style={{flex: 1, margin: 5}}>
                <View style={{flexDirection: 'row', alignSelf: 'center', justifyContent: 'space-between', width: '100%', borderColor: '#FD6B80', borderWidth: 1.5, borderRadius: 15, padding: 5}}>
                  <Image source={require("../assets/images/user.jpg")} alt="Love Option" style={{width: 100, height: 100, borderRadius: 15, alignSelf: 'center' }}
                  />
                  <Box style={{justifyContent: 'space-around'}}>
                    <Text style={{color: '#FD6B80', textAlign: "center", fontSize: 20}}>Infos</Text>
                    <Text style={{color: '#FD6B80', textAlign: "center", fontSize: 20}}>First name</Text>
                    <Text style={{color: '#FD6B80', textAlign: "center", fontSize: 20}}>Age</Text>
                  </Box>
                  <Text style={{color: '#FFFFFF', fontSize:20, alignSelf:'center',borderRadius:15, padding: 10, backgroundColor: 'rgba(255, 77, 103, 0.25)'}}>Score : 0%</Text>
                </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{flex: 1, margin: 5}}>
                <View style={{flexDirection: 'row', alignSelf: 'center', justifyContent: 'space-between', width: '100%', borderColor: '#FD6B80', borderWidth: 1.5, borderRadius: 15, padding: 5}}>
                  <Image source={require("../assets/images/user.jpg")} alt="Love Option" style={{width: 100, height: 100, borderRadius: 15, alignSelf: 'center' }}
                  />
                  <Box style={{justifyContent: 'space-around'}}>
                    <Text style={{color: '#FD6B80', textAlign: "center", fontSize: 20}}>Infos</Text>
                    <Text style={{color: '#FD6B80', textAlign: "center", fontSize: 20}}>First name</Text>
                    <Text style={{color: '#FD6B80', textAlign: "center", fontSize: 20}}>Age</Text>
                  </Box>
                  <Text style={{color: '#FFFFFF', fontSize:20, alignSelf:'center',borderRadius:15, padding: 10, backgroundColor: 'rgba(255, 77, 103, 0.25)'}}>Score : 0%</Text>
                </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{flex: 1, margin: 5}}>
                <View style={{flexDirection: 'row', alignSelf: 'center', justifyContent: 'space-between', width: '100%', borderColor: '#FD6B80', borderWidth: 1.5, borderRadius: 15, padding: 5}}>
                  <Image source={require("../assets/images/user.jpg")} alt="Love Option" style={{width: 100, height: 100, borderRadius: 15, alignSelf: 'center' }}
                  />
                  <Box style={{justifyContent: 'space-around'}}>
                    <Text style={{color: '#FD6B80', textAlign: "center", fontSize: 20}}>Infos</Text>
                    <Text style={{color: '#FD6B80', textAlign: "center", fontSize: 20}}>First name</Text>
                    <Text style={{color: '#FD6B80', textAlign: "center", fontSize: 20}}>Age</Text>
                  </Box>
                  <Text style={{color: '#FFFFFF', fontSize:20, alignSelf:'center',borderRadius:15, padding: 10, backgroundColor: 'rgba(255, 77, 103, 0.25)'}}>Score : 0%</Text>
                </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{flex: 1, margin: 5}}>
                <View style={{flexDirection: 'row', alignSelf: 'center', justifyContent: 'space-between', width: '100%', borderColor: '#FD6B80', borderWidth: 1.5, borderRadius: 15, padding: 5}}>
                  <Image source={require("../assets/images/user.jpg")} alt="Love Option" style={{width: 100, height: 100, borderRadius: 15, alignSelf: 'center' }}
                  />
                  <Box style={{justifyContent: 'space-around'}}>
                    <Text style={{color: '#FD6B80', textAlign: "center", fontSize: 20}}>Infos</Text>
                    <Text style={{color: '#FD6B80', textAlign: "center", fontSize: 20}}>First name</Text>
                    <Text style={{color: '#FD6B80', textAlign: "center", fontSize: 20}}>Age</Text>
                  </Box>
                  <Text style={{color: '#FFFFFF', fontSize:20, alignSelf:'center',borderRadius:15, padding: 10, backgroundColor: 'rgba(255, 77, 103, 0.25)'}}>Score : 0%</Text>
                </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{flex: 1, margin: 5}}>
                <View style={{flexDirection: 'row', alignSelf: 'center', justifyContent: 'space-between', width: '100%', borderColor: '#FD6B80', borderWidth: 1.5, borderRadius: 15, padding: 5}}>
                  <Image source={require("../assets/images/user.jpg")} alt="Love Option" style={{width: 100, height: 100, borderRadius: 15, alignSelf: 'center' }}
                  />
                  <Box style={{justifyContent: 'space-around'}}>
                    <Text style={{color: '#FD6B80', textAlign: "center", fontSize: 20}}>Infos</Text>
                    <Text style={{color: '#FD6B80', textAlign: "center", fontSize: 20}}>First name</Text>
                    <Text style={{color: '#FD6B80', textAlign: "center", fontSize: 20}}>Age</Text>
                  </Box>
                  <Text style={{color: '#FFFFFF', fontSize:20, alignSelf:'center',borderRadius:15, padding: 10, backgroundColor: 'rgba(255, 77, 103, 0.25)'}}>Score : 0%</Text>
                </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
    );
  };
  
  export default MatchesListScreen;