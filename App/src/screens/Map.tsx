import { View, Text, ImageBackground, Alert, TouchableOpacity, Button } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Map = () => {
    const Navigate=useNavigation();
    return (
     <ImageBackground source={require('../../../assets/Images/map.png')} 
        style={{flex:1}}>
 <ScrollView contentContainerStyle={{flex:1}}>
     <View className='bg-white my-7 mx-4 rounded-xl p-2 flex-row gap-2'>
        <Ionicons name='menu' color="black" size={32} onPress={()=>Alert.alert('See More')}/>
        <Text className='text-black font-bold justify-center items-center text-2xl'>RAG 951 P</Text>
     </View>

<View className=' mx-3 bg-transparent gap-2 items-end' >
<TouchableOpacity className='rounded-full h-16 w-16 bg-white justify-center items-center'>
<Ionicons name='menu'color="black" size={30}/>
</TouchableOpacity>
<TouchableOpacity className='rounded-full h-16 w-16 bg-white justify-center items-center'>
<Ionicons name='globe-outline'color="black" size={30}/>
</TouchableOpacity>
<TouchableOpacity className='rounded-full h-16 w-16 bg-white justify-center items-center'>
<Ionicons name='ellipsis-vertical'color="black" size={30}/>
</TouchableOpacity>
<TouchableOpacity className='rounded-full h-16 w-16 bg-white justify-center items-center'>
<Ionicons name='close-sharp'color="black" size={30}/>
</TouchableOpacity>
</View>

<ScrollView className='my-2 p-2 flex-1 bg-white'>
    <View className='flex-row justify-between'>
    <View className='m-3 flex-row gap-2'>
     <Ionicons name='key' color="black" size={26}/>
     <Text className='text-black font-semibold text-2xl'>RAG591P</Text>
    </View>
    <View className='mx-4 my-3'>
        <Ionicons name='share-social' size={26} color="blue"/>
    </View>
    </View>
    <View className="border-gray-400 border-b-2 opacity-50" />
    <View className='mx-3 my-3'>
    <View className='flex-row justify-between gap-2'>
        <Text>Day</Text>
        <Text>2024/09/17</Text>
    </View>
    <View className='flex-row justify-between gap-2'>
        <Text>Time</Text>
        <Text>18h 37 20</Text>
    </View>
    <View className='flex-row justify-between gap-2'>
        <Text>Speed</Text>
        <Text>20km/h</Text>
    </View>
    <View className='flex-row justify-between gap-2'>
        <Text>Status</Text>
        <Text className='text-green-500'>Online</Text>
    </View>
    <View className='flex-row justify-between gap-2'>
        <Text>Internet Data</Text>
        <Text>2G</Text>
    </View>
    </View>
    <View className="border-gray-400 border-b-2 opacity-50" />
    <View className='m-3'>
    <View className='flex-row justify-between'>
    <Text>Latitude</Text>
    <Text>1.23456789</Text>
    </View>
    <View className='flex-row justify-between'>
    <Text>Longitude</Text>
    <Text>30.0343</Text>
    </View>
    </View>
    <Button title='Go to Statistics' onPress={()=>Navigate.navigate('Statistics')}/>
    </ScrollView>    
    </ScrollView>
    </ImageBackground>
  );
};

export default Map