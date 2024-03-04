import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function Fade() {
    const navigation = useNavigation()
  return (
    <View>
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate("Fade")}
      >
        <Text>Voltar para lista de cabelos</Text>
      </TouchableOpacity>
    </View>
  )
}