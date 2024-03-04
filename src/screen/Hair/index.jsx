import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
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
