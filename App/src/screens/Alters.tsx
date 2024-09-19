import { View, Text, Button } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const Alters = () => {
    const Navigation=useNavigation();
  return (
    <ScrollView>
      <View className='my-7 mx-3 border border-blue-500 rounded-xl'>
        <View className='flex-row gap-2'>
            <View className='p-1 bg-blue-500 m-3 rounded-lg'>
            <Ionicons name='alert' size={18} color='white'/>
            </View>
            <View className='bg-transparent border border-gray-300 rounded-lg my-2 px-2 py-1 text-center'>
           <Text className='text-black text-md font-semibold'>RAG91P</Text>
            </View>
        </View>
        <View className='flex-row justify-between mx-3'>
            <Text className='text-md'>Status</Text>
            <Text className='text-md'>Email sent</Text>
        </View>
        <View className='flex-row justify-between mx-3'>
            <Text className='text-md'>Date</Text>
            <Text className='text-md'>Mar 30 2024</Text>
            
        </View>
           <View className='flex-row justify-between mx-3'>
            <Text className='text-md'>Time</Text>
            <Text className='text-md'>2h30:22PM</Text>
            </View>
            <View className='flex-row justify-between mx-3 mb-2'>
            <Text className='text-md'>Alarm Type</Text>
            <Text className='text-md text-red-300'>Crash warming</Text>
            </View>
        </View>
        <View className='my-7 mx-3 border border-blue-500 rounded-xl'>
        <View className='flex-row gap-2'>
            <View className='p-1 bg-blue-500 m-3 rounded-lg'>
            <Ionicons name='alert' size={18} color='white'/>
            </View>
            <View className='bg-transparent border border-gray-300 rounded-lg my-2 px-2 py-1 text-center'>
           <Text className='text-black text-md font-semibold'>RAG91P</Text>
            </View>
        </View>
        <View className='flex-row justify-between mx-3'>
            <Text className='text-md'>Status</Text>
            <Text className='text-md'>Email sent</Text>
        </View>
        <View className='flex-row justify-between mx-3'>
            <Text className='text-md'>Date</Text>
            <Text className='text-md'>Mar 30 2024</Text>
            
        </View>
           <View className='flex-row justify-between mx-3'>
            <Text className='text-md'>Time</Text>
            <Text className='text-md'>2h30:22PM</Text>
            </View>
            <View className='flex-row justify-between mx-3 mb-2'>
            <Text className='text-md'>Alarm Type</Text>
            <Text className='text-md text-red-300'>External</Text>
            </View>
        </View>
        <View className='my-7 mx-3 border border-blue-500 rounded-xl'>
        <View className='flex-row gap-2'>
            <View className='p-1 bg-blue-500 m-3 rounded-lg'>
            <Ionicons name='alert' size={18} color='white'/>
            </View>
            <View className='bg-transparent border border-gray-300 rounded-lg my-2 px-2 py-1 text-center'>
           <Text className='text-black text-md font-semibold'>RAG91P</Text>
            </View>
        </View>
        <View className='flex-row justify-between mx-3'>
            <Text className='text-md'>Status</Text>
            <Text className='text-md'>Email sent</Text>
        </View>
        <View className='flex-row justify-between mx-3'>
            <Text className='text-md'>Date</Text>
            <Text className='text-md'>Mar 30 2024</Text>
            
        </View>
           <View className='flex-row justify-between mx-3'>
            <Text className='text-md'>Time</Text>
            <Text className='text-md'>2h30:22PM</Text>
            </View>
            <View className='flex-row justify-between mx-3 mb-2'>
            <Text className='text-md'>Alarm Type</Text>
            <Text className='text-md text-red-300'>Crash warming</Text>
            </View>
        </View>
  <Button title='Go to Speed_Reports' onPress={()=>Navigation.navigate('Speeding_Reports')}/>
    </ScrollView>
  )
}

export default Alters