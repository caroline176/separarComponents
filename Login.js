
import {View, ImageBackground} from 'react-native';
import LoginText from '../Component/LoginText';
import LoginImage from '../Component/LoginImage';
import LoginButton from '../Component/LoginButton';
import LoginInput from '../Component/LoginInput';

export default function Login() {
    return (
       <ImageBackground>
           <LoginText />
           <LoginImage />
           <LoginInput />
           <LoginButton />
        </ImageBackground>
     
    );
  }