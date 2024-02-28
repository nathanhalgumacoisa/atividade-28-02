import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from './src/screen/Home';
import Hair from './src/screen/Hair';

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
          name="Hair"
          component={Hair}
          options={{
            title: "Cabelo",
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

