import {ImageBackground, Image, View} from 'react-native';
import { styles } from '../styles/stylesheet';

const imagem = { uri: 'https://files.tecnoblog.net/wp-content/uploads/2022/09/stable-diffusion-imagem.jpg' }


export default function LoginImage() {
    return (
                  
    <Image
        style={[styles.img, { resizeMode: 'cover' }]}
        source={imagem}
      />

    );
}