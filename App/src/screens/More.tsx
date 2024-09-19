import { View, Text, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'
import { Dimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Alters from './Alters'

const { height } = Dimensions.get('window');

const More = () => {
  const Navigation=useNavigation();
  return (
    <ScrollView className='flex-1 bg-blue-300'>
      
      <View style={{ minHeight: height }} className="bg-white mt-36">
        <View className='flex flex-row flex-wrap justify-between gap-3 mt-10'>
          
          <View className='bg-white p-7 w-[48%] rounded-lg shadow-xl shadow-black'>
          <TouchableOpacity onPress={()=>Alert.alert('Welcome to Certificates')}>
            <Ionicons name='star' size={30} color="blue" className='text-center'/>
            <Text className='text-center font-semibold m-2'>Certificates</Text>
            </TouchableOpacity>
          </View>
          <View className='bg-white p-7 w-[48%] rounded-lg shadow-xl shadow-black'>
            <TouchableOpacity onPress={()=>Alert.alert('This will display Privacy')}>
            <Ionicons name='eye-off' size={30} color="blue" className='text-center'/>
            <Text className='text-center font-semibold m-2'>Privacy Policy</Text>
            </TouchableOpacity>
          </View>
          <View className='bg-white p-7 w-[48%] rounded-lg shadow-xl shadow-black'>
            <TouchableOpacity onPress={()=>Alert.alert('This will show all about website')}>
            <Ionicons name='globe-outline' size={30} color="blue" className='text-center'/>
            <Text className='text-center font-semibold m-2'>Full Website</Text>
            </TouchableOpacity>
          </View>
          <View className='bg-white p-7 w-[48%] rounded-lg shadow-xl shadow-black'>
            <TouchableOpacity onPress={()=>Alert.alert('This will show all about Contacts')}>
            <Ionicons name='call' size={30} color="blue" className='text-center'/>
            <Text className='text-center font-semibold m-2'>Contact Us</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View className='bg-blue-400 p-5'>
        <TouchableOpacity onPress={()=>Navigation.navigate('Search')}>
          <Text className='text-center text-white text-xl font-semibold'>Get In Touch</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default More;
