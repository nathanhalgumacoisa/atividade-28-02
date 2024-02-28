import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";


export default function Hair() {
    const navigation = useNavigation()
  return (
    <View>
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate("Home")}
      >
        <Text>Voltar para Home</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#F5FCFF",
      alignItems: "center",
      justifyContent: "center",
    },
    navButton: {
      marginTop: 20,
      padding: 10,
      backgroundColor: "lightgray",
      color: "black",
      borderRadius: 5,
    },
  });