import {Text, View} from 'react-native';
import { styles } from '../styles/stylesheet';

export default function LoginText () {
    return (
      <View style={styles.LoginText}>
      <Text style={styles.textLoginText}>Faça seu Login</Text>
      </View>
    )
}