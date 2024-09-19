import { View, Text, TouchableOpacity, Alert, Button } from 'react-native'
import React from 'react'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const Speeding_Reports = () => {
  const Navigation=useNavigation();
  return (
    <ScrollView>
    <View className='p-12 bg-blue-400'>
    <View className='rounded-md bg-white p-6'/>
    </View>
    <View className='rounded-xl shadow-xl shadow-gray-500 p-8 m-3'>
      <View className='flex-row justify-between mt-3'>
        <Text>Vehicle</Text>
        <Text className='font-semibold'>RAE 232 X</Text>
      </View>
      <View className='flex-row justify-between'>
        <Text>GPS</Text>
        <Text className='font-semibold'>09473634978</Text>
      </View>
      <View className='flex-row justify-between'>
        <Text>Owner</Text>
        <Text className='font-semibold'>Hitimana Eric</Text>
      </View>
      <View className='flex-row justify-between'>
        <Text>Date&Time</Text>
        <Text className='font-semibold'>2025/02/01 15:20:31</Text>
      </View>
      <View className='flex-row justify-between'>
        <Text>Geo Coordinates</Text>
        <View>
        <Text className='font-semibold'>lat:-1.80998</Text>
        <Text className='font-semibold'>long:29.923</Text>
        </View>
      </View>
      <View className='flex-row justify-between'>
        <Text>Speed</Text>
        <Text className='font-semibold'>60 km/h</Text>
      </View>
    </View>
    <View className='rounded-xl shadow-xl shadow-gray-500 p-8 m-3'>
      <View className='flex-row justify-between mt-3'>
        <Text>Vehicle</Text>
        <Text className='font-semibold'>RAE 232 X</Text>
      </View>
      <View className='flex-row justify-between'>
        <Text>GPS</Text>
        <Text className='font-semibold'>09473634978</Text>
      </View>
      <View className='flex-row justify-between'>
        <Text>Owner</Text>
        <Text className='font-semibold'>Hitimana Eric</Text>
      </View>
      <View className='flex-row justify-between'>
        <Text>Date&Time</Text>
        <Text className='font-semibold'>2025/02/01 15:20:31</Text>
      </View>
      <View className='flex-row justify-between'>
        <Text>Geo Coordinates</Text>
        <View>
        <Text className='font-semibold'>lat:-1.80998</Text>
        <Text className='font-semibold'>long:29.923</Text>
        </View>
      </View>
      <View className='flex-row justify-between'>
        <Text>Speed</Text>
        <Text className='font-semibold'>60 km/h</Text>
      </View>
    </View>
    <View className='flex-row justify-end  gap-2 mx-6 my-2'>
      <TouchableOpacity className='rounded-full bg-blue-500  h-16 w-16 justify-center items-center '
       onPress={()=>Alert.alert('Welcome to Shre')}>
        <Text className=' text-white '>Share</Text>
      </TouchableOpacity>
      <TouchableOpacity className='rounded-full bg-blue-500  w-16 h-16 justify-center items-center'
      onPress={()=>Alert.alert('Welcome to Print')}>
        <Text className='text-white'>Print</Text>
      </TouchableOpacity>
    </View>
    <Button title='Go to Map screen' onPress={()=>Navigation.navigate('Map')}/>
    </ScrollView>
  )
}

export default Speeding_Reports