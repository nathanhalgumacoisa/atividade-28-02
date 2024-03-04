import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from './src/screen/Home';
import Hair from './src/screen/Hair';
import Beard from './src/screen/Beard';
import AboutMe from './src/screen/AboutMe';

export default function App() {
 const Stack = createNativeStackNavigator();
  return (
   <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Zé Barber",
            headerStyle: {
              backgroundColor: "#7c3b1a",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitleAlign: "center",
            
          }}
        />

        <Stack.Screen
          name="AboutMe"
          component={AboutMe}
          options={{
            title: "Sobre mim",
            headerStyle: {
              backgroundColor: "#E0E0E0",
            },
            headerTintColor: "#000",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            
          }}
        />

        <Stack.Screen
          name="Hair"
          component={Hair}
          options={{
            title: "Cabelos",
            headerStyle: {
              backgroundColor: "#E0E0E0",
            },
            headerTintColor: "#000",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            
          }}
        />

        <Stack.Screen
          name="Beard"
          component={Beard}
          options={{
            title: "Barba",
            headerStyle: {
              backgroundColor: "#E0E0E0",
            },
            headerTintColor: "#000",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            
          }}
        />
      </Stack.Navigator>
   </NavigationContainer>
  );
}

