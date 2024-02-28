import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native-web";

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate("Hair")}
      >
        <Image
          style={styles.img}
          source={{
            uri: 'https://img77.uenicdn.com/image/upload/v1523878269/service_images/adobestock_120884088.jpg'
          }}
        />
        <Text>Cabelos</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee2b4",
    alignItems: "center",
    justifyContent: "center",
  },

  navButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#ab9680",
    color: "black",
    borderRadius: 5,
  },

  img: {
    width: 200,
    height: 100,
  }
});