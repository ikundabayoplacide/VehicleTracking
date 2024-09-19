import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { DataTable } from "react-native-paper";

const Speed_Statistics = () => {
  return (
    <ScrollView>
      <View className="flex-row justify-between">
        <View className="m-4">
          <Image
            source={require("../../../assets/Images/Car_Logo.jpg")}
            className="w-20 h-16 rounded-full"
          />
          <Text>Logo</Text>
        </View>
        <View className="m-5">
          <Text>Hello</Text>
          <Text>Speed: 75 km/h</Text>
          <Text>Time: 12:30</Text>
        </View>
      </View>
      <View className="border-gray-400 border-b-2 opacity-50" />
      <View className="my-2">
        <Text className="text-center">VEHICLE TRACKING REPORTS</Text>
      </View>
      <View className="border-b-2 border-gray-400 opacity-50" />

      <View className="flex-1">
        <ScrollView horizontal>
          <DataTable>
            <DataTable.Header className="bg-slate-300 gap-4">
              <DataTable.Title>Vehicle</DataTable.Title>
              <DataTable.Title>GPS No</DataTable.Title>
              <DataTable.Title>Vehicle Owner</DataTable.Title>
              <DataTable.Title>Date&Time</DataTable.Title>
              <DataTable.Title>Geo Cordinate</DataTable.Title>
              <DataTable.Title>Speed</DataTable.Title>
            </DataTable.Header>

            <DataTable.Row className="gap-4 bg-gray-400">
              <DataTable.Cell >RAE</DataTable.Cell>
              <DataTable.Cell >236546</DataTable.Cell>
              <DataTable.Cell>Hitimana</DataTable.Cell>
              <DataTable.Cell>2025/4/20</DataTable.Cell>
              <DataTable.Cell className="text-blue-500">lat:2425</DataTable.Cell>
              <DataTable.Cell>20</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row className="gap-4 bg-gray-400">
              <DataTable.Cell>RAE</DataTable.Cell>
              <DataTable.Cell >236546</DataTable.Cell>
              <DataTable.Cell>Hitimana</DataTable.Cell>
              <DataTable.Cell>2025/4/20</DataTable.Cell>
              <DataTable.Cell className="text-blue-500">lat:2425</DataTable.Cell>
              <DataTable.Cell>20</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row className="gap-4 bg-gray-400">
              <DataTable.Cell>RAE</DataTable.Cell>
              <DataTable.Cell >236546</DataTable.Cell>
              <DataTable.Cell>Hitimana</DataTable.Cell>
              <DataTable.Cell>2025/4/20</DataTable.Cell>
              <DataTable.Cell className="text-blue-500">lat:2425</DataTable.Cell>
              <DataTable.Cell>20</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row className="gap-4 bg-gray-400">
              <DataTable.Cell>RAE</DataTable.Cell>
              <DataTable.Cell >236546</DataTable.Cell>
              <DataTable.Cell>Hitimana</DataTable.Cell>
              <DataTable.Cell>2025/4/20</DataTable.Cell>
              <DataTable.Cell className="text-blue-500">lat:2425</DataTable.Cell>
              <DataTable.Cell>20</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row className="gap-4 bg-gray-400">
              <DataTable.Cell>RAE</DataTable.Cell>
              <DataTable.Cell >236546</DataTable.Cell>
              <DataTable.Cell>Hitimana</DataTable.Cell>
              <DataTable.Cell>2025/4/20</DataTable.Cell>
              <DataTable.Cell className="text-blue-500">lat:2425</DataTable.Cell>
              <DataTable.Cell>20</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row className="gap-4 bg-gray-400">
              <DataTable.Cell>RAE</DataTable.Cell>
              <DataTable.Cell >236546</DataTable.Cell>
              <DataTable.Cell>Hitimana</DataTable.Cell>
              <DataTable.Cell>2025/4/20</DataTable.Cell>
              <DataTable.Cell className="text-blue-500">lat:2425</DataTable.Cell>
              <DataTable.Cell>20</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row className="gap-4 bg-gray-400">
              <DataTable.Cell>RAE</DataTable.Cell>
              <DataTable.Cell >236546</DataTable.Cell>
              <DataTable.Cell>Hitimana</DataTable.Cell>
              <DataTable.Cell>2025/4/20</DataTable.Cell>
              <DataTable.Cell className="text-blue-500">lat:2425</DataTable.Cell>
              <DataTable.Cell>20</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row className="gap-4 bg-gray-400">
              <DataTable.Cell>RAE</DataTable.Cell>
              <DataTable.Cell >236546</DataTable.Cell>
              <DataTable.Cell>Hitimana</DataTable.Cell>
              <DataTable.Cell>2025/4/20</DataTable.Cell>
              <DataTable.Cell className="text-blue-500">lat:2425</DataTable.Cell>
              <DataTable.Cell>20</DataTable.Cell>
            </DataTable.Row>
          </DataTable>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default Speed_Statistics;
