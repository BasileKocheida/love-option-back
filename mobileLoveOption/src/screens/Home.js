import React from 'react';
import {Box, Button, Text, View} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native';
import {primaryColor} from '../utils/colors';
import AppBar from '../components/AppBar/AppBar';

export default function HomeScreen({navigation, props}) {
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <AppBar navigation={navigation} goBack={false} />
      <Text m={5} color={'white'}>
        Home
      </Text>
      <Box alignItems={'center'} justifyContent={'center'}>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#23252F',
              margin: 5,
              height: 150,
              width: 150,
              borderRadius: 15,
              borderWidth: 2,
              borderColor: '#FF4D67',
            }}>
            <TouchableOpacity
              title="Go to DailyMatch"
              value="DailyMatch"
              onPress={() => navigation.navigate('DailyMatchScreen')}>
              <View
                style={{
                  backgroundColor: 'rgba(255, 77, 103, 0.25)',
                  borderRadius: 50,
                  margin: 15,
                  padding: 10,
                  justifyContent: 'center',
                }}>
                <Ionicons
                  style={{textAlign: 'center'}}
                  name={'heart'}
                  size={50}
                  color={primaryColor}
                />
              </View>
              <Text style={{color: primaryColor, textAlign: 'center'}}>
                Match of the day
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#23252F',
              margin: 5,
              height: 150,
              width: 150,
              borderRadius: 15,
              borderWidth: 2,
              borderColor: '#FF4D67',
            }}>
            <TouchableOpacity
              title="Go to Matches list"
              value="MatchList"
              onPress={() => navigation.navigate('MatchesListScreen')}>
              <View
                style={{
                  backgroundColor: 'rgba(255, 77, 103, 0.25)',
                  borderRadius: 50,
                  margin: 15,
                  padding: 10,
                  justifyContent: 'center',
                }}>
                <Ionicons
                  style={{textAlign: 'center'}}
                  name={'list'}
                  size={50}
                  color={'#FF4D67'}
                />
              </View>
              <Text style={{color: '#FF4D67', textAlign: 'center'}}>
                Matches list
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#23252F',
              margin: 5,
              height: 150,
              width: 150,
              borderRadius: 15,
              borderWidth: 2,
              borderColor: '#FF4D67',
            }}>
            <TouchableOpacity>
              <View
                style={{
                  backgroundColor: 'rgba(255, 77, 103, 0.25)',
                  borderRadius: 50,
                  margin: 15,
                  padding: 10,
                  justifyContent: 'center',
                }}>
                <Ionicons
                  style={{textAlign: 'center'}}
                  name={'create'}
                  size={50}
                  color={'#FF4D67'}
                />
              </View>
              <Text style={{color: '#FF4D67', textAlign: 'center'}}>
                Create a new quizz
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#23252F',
              margin: 5,
              height: 150,
              width: 150,
              borderRadius: 15,
              borderWidth: 2,
              borderColor: '#FF4D67',
            }}>
            <TouchableOpacity>
              <View
                style={{
                  backgroundColor: 'rgba(255, 77, 103, 0.25)',
                  borderRadius: 50,
                  margin: 15,
                  padding: 10,
                  justifyContent: 'center',
                }}>
                <Ionicons
                  style={{textAlign: 'center'}}
                  name={'hammer'}
                  size={50}
                  color={'#FF4D67'}
                />
              </View>
              <Text style={{color: '#FF4D67', textAlign: 'center'}}>
                Settings
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Box>
    </View>
  );
}
// }
