import { Button, HStack, VStack } from 'native-base'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';

interface Props {
    navigation: any;
    goBack: boolean;
}

export default function AppBar (props: Props){

    return (
        <HStack justifyContent={'space-between'} p={4}>
            {props.goBack === true ? (
                <Button variant={"outline"} borderRadius='full' onPress={()=>{
                    props.navigation.goBack()
                }}>
                    <Ionicons
                        name={'arrow-back'}
                        size={20}
                        color={'#fff'}
                    />
                </Button>
            ) : (
                <Button variant={"outline"} borderRadius='full' onPress={() => {
                    // props.navigation.navigate()
                }}>
                    <Ionicons
                        name={'person'}
                        size={20}
                        color={'#fff'}
                    />
                </Button>
            )}
            <Button variant={"outline"}>
                <Ionicons
                    name={'home'}
                    size={20}
                    color={'#fff'}
                />
            </Button>
        </HStack>
    )
}