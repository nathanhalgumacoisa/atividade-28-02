import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function Undercut() {
    const navigation = useNavigation()
  return (
    <View>
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate("Undercut")}
      >
        <Text>Voltar para lista de cabelos</Text>
      </TouchableOpacity>
    </View>
  )
}