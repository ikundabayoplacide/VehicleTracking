import { View, Text, ScrollView, Image, Button, Dimensions } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const {height}=Dimensions.get('window');

const UserDetails = () => {
  const Navigation=useNavigation();
  return (
    <ScrollView className="bg-blue-300">
      <View className="justify-center items-center mt-10 z-20">
        <Image
          source={require("../../../assets/Images/birds.jpeg")}
          className="w-24 h-24 rounded-full border-4 border-white"
        />
      </View>

      <View
        className="flex gap-4 mt-[-40px] px-4 bg-white m-2 p-4 mx-7
                   rounded-lg z-10 pt-12 justify-center items-center "
      >
        <Text>Name: John Doe</Text>
        <Text>Age: 25</Text>
        <Text>Email: johndoe@example.com</Text>
        <Text>Kwibuka Yvette</Text>
      </View>

      <View style={{ minHeight: height }} className="justify-between gap-4 z-0 px-1 -mt-[40px] bg-white">
        <View className="flex-row justify-between mx-5 my-16 items-center gap-4">
          <TouchableOpacity>
            <Text className="mx-6 bg-blue-400 rounded-md text-2xl text-white w-32 h-10 text-center">
              Edit Profile
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text className="bg-blue-400 rounded-md text-white text-2xl w-28 h-10 text-center">
              Logout
            </Text>
          </TouchableOpacity>
        </View>
        <View className="border-gray-300 border-b-2 opacity-50" />
       
          <View className="flex-row max-w-fit justify-center gap-4 ">
          <View>
            <View className="p-2 bg-slate-300 items-center rounded-md w-20">
              <Text className="mt-3 text-black">12</Text>
            </View>
            <Text className="mt-3 text-lg font-semibold">Vihicles</Text>
            </View>
            <View>
            <View className="p-2 bg-slate-300 items-center rounded-md w-20">
              <Text className="mt-3 text-black">4</Text>
            </View>
            <Text className="mt-3 text-lg font-semibold text-gray-500">Online</Text>
            </View>
            <View>
            <View className="p-2 bg-slate-300 items-center rounded-md w-20">
              <Text className="mt-3 text-black">2</Text>
             </View>
             <Text className="mt-3 text-lg font-semibold text-yellow-500">Offline</Text>
             </View>
           <View>
            <View className="p-2 bg-slate-300 items-center rounded-md w-20">
              <Text className="mt-3 text-black">2</Text>
            </View>
            <Text className="mt-3 text-lg font-semibold text-red-500">Over Speed</Text>
            </View>
          </View>
          <View className="border-gray-300 border-b-2 opacity-50" />

          <View className="flex-row  my-5 justify-between ">
            <View className="mx-10">
            <View className="p-2 bg-slate-300 items-center rounded-md w-20">
              <Text className="mt-3 text-black">12</Text>
            </View>
            <Text className="mt-3 text-lg font-semibold text-green-500">Valid Certificate</Text>
            </View>
              <View className="mx-10">
              <View className="p-2 bg-slate-300 items-center rounded-md w-20">
              <Text className="mt-3 text-black">4</Text>
              </View>
              <Text className="mt-3 text-lg font-semibold text-red-500">Valid Certificate</Text>
            </View>
            </View>
            <View className="border-gray-300 border-b-2 opacity-50" />
            <View className="flex-row gap-7  my-6 mx-8 ">
            <View>
              <Text className="text-xl underline font-semibold">Font Size</Text>
            </View>
            <View className=" float-end flex">
              <Text className="text-xl font-semibold ">Languages</Text>
            </View>
            </View>
            <Button title="Next page" onPress={()=>Navigation.navigate('More')}/>

      </View>
    </ScrollView>
  );
};

export default UserDetails;
