import { Button, TouchableOpacity, View, Text } from "react-native";
import { styles } from '../styles/stylesheet';



export default function LoginButton() {
    return (

      <View>
          <TouchableOpacity
          style={styles.btn}
          onPress={() => console.log("Você pressionou o botão")}
          >

          <Text>Press Here</Text>
          </TouchableOpacity>
      
        </View>

    );  
}