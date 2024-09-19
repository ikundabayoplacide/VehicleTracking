import { View, Text, Button } from 'react-native'
import React from 'react'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import { Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const { height } = Dimensions.get('window');

const Search = () => {
  const navigate=useNavigation();
  return (
    <ScrollView className='flex-1 bg-blue-400'>
      <View  style={{ minHeight:height}} className="bg-white mt-20"> 
        <View className='m-5 border rounded-md p-2'>
            <TextInput placeholder='Search'/>
        </View>
        <View className='mx-7 shadow-lg p-10 rounded-lg'>
            <View className='justify-between flex-row'>
            <Text className='text-md font-semibold'>RAG 951 P</Text>
            <Ionicons name='arrow-forward' size={25} color='blue'/>
            </View>
            <View className='flex-row justify-between'>
                <Text className='text-black'><Ionicons name='alert-circle' size={17} className='mt-5'/> State</Text>
                <Text  className='text-blue-500'> Moving</Text>
            </View>
            <View className='flex-row justify-between'>
          <Text className='text-md'><Ionicons name='speedometer' size={15}/> Speed</Text>
           <Text className='text-blue-400'>20 Km/h</Text>
            </View>
            <View className='flex-row justify-between'>
                <Text className='text-md'><Ionicons name='warning' size={15}/> status</Text>
                <Text className='text-gray-400'>Online</Text>
              </View>
              <View className='flex-row justify-between'>
                <Text className='text-md'><Ionicons name='document-text' size={16}/>Certificate Validity</Text>
                <Text className='font-semibold text-sm'>Validity(20days)</Text>
              </View>
              <View className='flex-row justify-between'>
       <Text className='text-md'><Ionicons name='time-outline' size={20}/> Last Update</Text>
       <Text className='text-md'> 15/09/2024</Text>
              </View>
        </View>
        <View className='mx-7 shadow-lg p-10 rounded-lg'>
            <View className='justify-between flex-row'>
            <Text className='text-md font-semibold'>RAF 202 X</Text>
            <Ionicons name='arrow-forward' size={25} color='blue'/>
            </View>
            <View className='flex-row justify-between'>
                <Text className='text-black'><Ionicons name='alert-circle' size={17} className='mt-5'/> State</Text>
                <Text  className='text-blue-500'> Moving</Text>
            </View>
            <View className='flex-row justify-between'>
          <Text className='text-md'><Ionicons name='speedometer' size={15}/> Speed</Text>
           <Text className='text-blue-400'>20 Km/h</Text>
            </View>
            <View className='flex-row justify-between'>
                <Text className='text-md'><Ionicons name='warning' size={15}/> status</Text>
                <Text className='text-gray-400'>Online</Text>
              </View>
              <View className='flex-row justify-between'>
                <Text className='text-md'><Ionicons name='document-text' size={16}/>Certificate Validity</Text>
                <Text className='font-semibold text-sm'>Validity(20days)</Text>
              </View>
              <View className='flex-row justify-between'>
       <Text className='text-md'><Ionicons name='time-outline' size={20}/> Last Update</Text>
       <Text className='text-md'> 15/09/2024</Text>
              </View>
        </View>
        <View className='mx-7 shadow-lg p-10 rounded-lg'>
            <View className='justify-between flex-row'>
            <Text className='text-md font-semibold'>RAA 132 T</Text>
            <Ionicons name='arrow-forward' size={25} color='blue'/>
            </View>
            <View className='flex-row justify-between'>
                <Text className='text-black'><Ionicons name='alert-circle' size={17} className='mt-5'/> State</Text>
                <Text  className='text-blue-500'> Moving</Text>
            </View>
            <View className='flex-row justify-between'>
          <Text className='text-md'><Ionicons name='speedometer' size={15}/> Speed</Text>
           <Text className='text-blue-400'>20 Km/h</Text>
            </View>
            <View className='flex-row justify-between'>
                <Text className='text-md'><Ionicons name='warning' size={15}/> status</Text>
                <Text className='text-gray-400'>Online</Text>
              </View>
              <View className='flex-row justify-between'>
                <Text className='text-md'><Ionicons name='document-text' size={16}/>Certificate Validity</Text>
                <Text className='font-semibold text-sm'>Validity(20days)</Text>
              </View>
              <View className='flex-row justify-between'>
       <Text className='text-md'><Ionicons name='time-outline' size={20}/> Last Update</Text>
       <Text className='text-md'> 15/09/2024</Text>
              </View>
        </View>
      </View>
      <Button title='Go to Alter' onPress={()=>navigate.navigate('Alters')}/>
    </ScrollView>
  )
}

export default Search