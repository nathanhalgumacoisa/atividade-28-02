import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function Hair() {
    const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.navButtonHome}
        onPress={() => navigation.navigate("Home")}
      >
        <Text>Voltar para Home</Text>
      </TouchableOpacity>
      <View style={styles.containerCategory}>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate("Caesar")}
        >
          <Image
            style={styles.img}
            source={{
              uri: 'https://i.pinimg.com/736x/90/22/9c/90229cf5de8f8c514a10907b4bfb1eb7.jpg'
            }}
          />
          <Text>Caesar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate("Fade")}
        >
          <Image
            style={styles.img}
            source={{
              uri: 'https://moda20.com.br/wp-content/uploads/2023/09/Tem-Meu-Tamanho_Easy-Resize.com_.jpg'
            }}
          />
          <Text>Fade</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate("Undercut")}
        >
          <Image
            style={styles.img}
            source={{
              uri: 'https://3.bp.blogspot.com/-fcc8-tURRoA/WZLbkJMXArI/AAAAAAAAwKM/KAsdfs9SDHgyrgNQe6HouFj48ZmR8qxyQCLcBGAs/s1600/undercut-texturizado.jpg'
            }}
          />
          <Text>Undercut</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
