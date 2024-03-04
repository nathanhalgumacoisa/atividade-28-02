import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native-web";

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Home</Text>

      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate("AboutMe")}
      >
        <Text>Sobre Mim</Text>
      </TouchableOpacity>

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

      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate("Beard")}
      >
        <Image
          style={styles.img}
          source={{
            uri: 'https://www.worten.pt/i/cc4e7170f147c2e63dbb4e3e2716c92bf15ac0db'
          }}
        />
        <Text>Barba</Text>
      </TouchableOpacity>

      
    </View>
  );
}
