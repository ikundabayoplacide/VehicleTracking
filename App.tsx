import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./App/src/screens/Home";
import Login from "./App/src/screens/Login";
import Report from "./App/src/screens/Report";
import UserDetails from "./App/src/screens/UserDetails";
import {
  GestureHandlerRootView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { Alert,View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import More from "./App/src/screens/More";
import Search from "./App/src/screens/Search";
import Alters from "./App/src/screens/Alters";
import Speeding_Reports from "./App/src/screens/Speeding_Reports";
import Map from "./App/src/screens/Map";
import Speed_Statistics from "./App/src/screens/Speed_Statistics";


const Stack = createNativeStackNavigator();

export default function ScreenContainer() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: true,
              headerTitleAlign: "center",
            }}
          />
          <Stack.Screen
            name="UserDetails"
            component={UserDetails}
            options={{ headerTitleAlign: "center" }}
          />
          <Stack.Screen
            name="More"
            component={More}
            options={{ headerTitleAlign: "center", headerRight:()=>(
              <TouchableOpacity onPress={()=>Alert.alert('Click here to get more')}>
              <Ionicons name="ellipsis-vertical" size={24} />
              </TouchableOpacity>
            ) }}
          />
          <Stack.Screen name="Alters" component={Alters}
           options={{headerTitleAlign:'left',
            headerStyle:{backgroundColor:'#4A90E2'},
            headerTintColor:"#FFFFFF",
            headerRight:()=>(
              <View className="flex-row mr-15 gap-4">
              <TouchableOpacity onPress={()=>Alert.alert('This is for search')}>
                <Ionicons name="search" size={24} color="white"/>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>Alert.alert('mozilla')}>
                <Ionicons name="globe-outline" size={24} color="white"/>
              </TouchableOpacity>
              </View>
            ),
           }}/>

          <Stack.Screen name="Search"
          component={Search}
          options={{headerTitleAlign:"center",headerRight:()=>(
          <TouchableOpacity onPress={()=>Alert.alert('Click here to get more')}>
             <Ionicons name="ellipsis-vertical" size={24} />
          </TouchableOpacity>
         ),
          }}/>
          <Stack.Screen
            name="Report"
            component={Report}
            options={{
              headerShown: true,
              title: "Reports",
              headerTitleAlign: "center",headerHeight: "100%",
              headerRight: () => (
                <TouchableOpacity onPress={() => Alert.alert("Confirmed")}>
                  <Ionicons name="ellipsis-vertical" size={24} />
                </TouchableOpacity>
              ),
            }}
          />
          <Stack.Screen name="Map" component={Map} options={{headerTitleAlign:'center',headerShown:false}}/>
          <Stack.Screen name="Statistics" component={Speed_Statistics} options={{headerTitleAlign:'center'}}/>
          
          <Stack.Screen name="Speeding_Reports"
           component={Speeding_Reports} options={{headerTintColor: '#ffff',
            headerTitleAlign: "center",headerHeight: "100%", headerStyle:{backgroundColor:'#4A90E2'},
            headerRight: () => (
              <TouchableOpacity onPress={() => Alert.alert("Check More")}>
                <Ionicons name="ellipsis-vertical" size={24} color="white"/>
              </TouchableOpacity>
            ),
           }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
