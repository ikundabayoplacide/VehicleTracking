import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { HelloWave } from '../../../components/HelloWave';
import ParallaxScrollView from '../../../components/ParallaxScrollView';

export default function Home() {
  const navigation = useNavigation();

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('../../../assets/Images/partial-react-logo.png')}  // Adjusted path
          className='h-full w-full bottom-0 left-0 absolute'
        />
      }
    >
      <View className='flex-row'>
        <Text className='text-blue-500 font-extrabold text-2xl'>Welcome Back to Home!</Text>
        <HelloWave/>
        <StatusBar style="auto" />
      </View>
      <View>
        <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
          <Text className='text-2xl text-red-500'> Go to Login</Text>
        </TouchableOpacity>
      </View>
    </ParallaxScrollView>
  );
}
