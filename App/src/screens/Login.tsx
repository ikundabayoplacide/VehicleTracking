import { useNavigation } from '@react-navigation/native';
import { Text, View,Image,TextInput,Button, TouchableOpacity,ScrollView} from 'react-native';

export default function Login() {
  const navigation=useNavigation();
  return (
  
  <ScrollView className='mx-4'>
    <View className='flex-1 justify-center mt-7'>
    <View>
      <View>
        <Text className='font-bold text-3xl'>Welcome Back!</Text>
      </View>
    <TextInput className='border-blue-300  border-2 rounded-md my-3 p-1' placeholder='Enter your Username'/> 
    <TextInput className='border-blue-300  border-2 rounded-md my-3 p-1' placeholder='Enter your PassWord'/> 
  </View>
  <View className='mt-6 bg-blue-400 rounded-md'>
    <TouchableOpacity onPress={()=>navigation.navigate('Report')}>
      <Text className='text-center p-2 text-white font-semibold'>Sign In</Text>
    </TouchableOpacity>
  </View>
  <View className='mt-6 justify-center'>
    <Text className='text-center'>Forgot your Password?</Text>
    </View>
    </View>
  </ScrollView>
  
  );
}

