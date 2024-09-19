import { View, Text, TouchableOpacity, Button, TextInput } from "react-native";
import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import DateTimePicker from "react-native-modal-datetime-picker";
import Icon from "react-native-vector-icons/FontAwesome";

const Report = () => {
  const navigation = useNavigation();
  const [Selectedvalue, SetSelectedvalue] = useState();
  const [ActiveView, SetActiveView] = useState("Speeding");

  const [showStartPicker, setShowStartPicker] = useState(false);
  const [showEndPicker, setShowEndPicker] = useState(false);

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const toggleStartPicker = () => {
    setShowStartPicker(!showStartPicker);
  };

  const toggleEndPicker = () => {
    setShowEndPicker(!showEndPicker);
  };

  const handleStartConfirm = (date) => {
    setStartDate(date);
    setShowStartPicker(false);
  };

  const handleEndConfirm = (date) => {
    setEndDate(date);
    setShowEndPicker(false);
  };

  return (
    <ScrollView>
      <View className="flex-row bg-blue-400 justify-between px-4 py-2">
        <TouchableOpacity onPress={() => SetActiveView("Speeding")}>
          <Text
            className={`text-center p-2 mt-2 font-semibold text-2xl ${
              ActiveView === "Speeding" ? "text-white" : ""
            }`}
          >
            Speeding
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => SetActiveView("Periodic")}>
          <Text
            className={`text-center p-2 mt-2 font-semibold text-2xl ${
              ActiveView === "Periodic" ? "text-white" : ""
            }`}
          >
            Periodic
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => SetActiveView("Custom")}>
          <Text
            className={`text-center p-2 mt-2 font-semibold text-2xl ${
              ActiveView === "Custom" ? "text-white" : ""
            }`}
          >
            Custom
          </Text>
        </TouchableOpacity>
      </View>
      <Text></Text>

      {ActiveView === "Speeding" && (
        <View className="flex justify-between gap-4 mt-10 px-4">
          <TextInput
            className="border rounded-md p-3"
            placeholder="Enter Plate Number"
          />
          <View className="border rounded-md">
            <Picker
              selectedValue={Selectedvalue}
              onValueChange={(itemValue) => SetSelectedvalue(itemValue)}
            >
              <Picker.Item label="Select Speed" value="" />
              <Picker.Item label="[0-59km/h]" value="low" />
              <Picker.Item label="[60-120km/h]" value="medium" />
              <Picker.Item label="[121-240km/h]" value="high" />
            </Picker>
          </View>
          <TouchableOpacity>
            <Button
              title="Proceed"
              onPress={() => navigation.navigate("UserDetails")}
            />
          </TouchableOpacity>
        </View>
      )}

      {ActiveView === "Periodic" && (
        <View className="flex justify-between gap-4 px-4">
          <View className="mx-2">
            <TextInput
              className="border rounded-md p-4"
              placeholder="Enter Plate Number"
            />
          </View>

          <View className="border rounded-md">
            <Picker
              selectedValue={Selectedvalue}
              onValueChange={(itemValue) => SetSelectedvalue(itemValue)}
            >
              <Picker.Item label="Select Time Range" value="" />
              <Picker.Item label="1 Day" value="oneday" />
              <Picker.Item label="2 Days" value="twodays" />
              <Picker.Item label="7 Days" value="sevenday" />
              <Picker.Item label="3 Weeks" value="threeweeks" />
              <Picker.Item label="1 month" value="month" />
            </Picker>
          </View>

          <View>
            <Button title="Proceed" />
          </View>
        </View>
      )}

      {ActiveView === "Custom" && (
        <View className="flex justify-between gap-4 px-4">
          <View className="mt-1">
            <Text className="text-xl">Plate Number:</Text>
            <TextInput
              className="border rounded-md p-4 bg-gray-100"
              placeholder="Enter Plate Number"
            />
          </View>

          <Text className="text-xl">Start Time:</Text>
          <View className="flex flex-row items-center border p-2 rounded-md ">
            <TextInput
              className="p-3 flex-1 bg-gray-100"
              value={startDate.toLocaleDateString()}
              editable={false}
            />
            <TouchableOpacity onPress={toggleStartPicker}>
              <Icon
                name="calendar"
                size={24}
                color="black"
                style={{ marginRight: 8 }}
              />
            </TouchableOpacity>
          </View>

          <Text className="text-xl">End Time:</Text>
          <View className="flex flex-row items-center border p-2 rounded-md ">
            <TextInput
              className="p-3 flex-1 bg-gray-100"
              value={endDate.toLocaleDateString()}
              editable={false}
            />
            <TouchableOpacity onPress={toggleEndPicker}>
              <Icon
                name="calendar"
                size={24}
                color="black"
                style={{ marginRight: 8 }}
              />
            </TouchableOpacity>
          </View>

          <DateTimePicker
            isVisible={showStartPicker}
            mode="date"
            date={startDate}
            onConfirm={handleStartConfirm}
            onCancel={() => setShowStartPicker(false)}
          />

          <DateTimePicker
            isVisible={showEndPicker}
            mode="date"
            date={endDate}
            onConfirm={handleEndConfirm}
            onCancel={() => setShowEndPicker(false)}
          />
        </View>
      )}
    </ScrollView>
  );
};

export default Report;
