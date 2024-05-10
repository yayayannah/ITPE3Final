import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, TouchableOpacity, Image , Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import 'react-native-gesture-handler';
import styles from '../Styles/Styles';
import LottieView from 'lottie-react-native';

const Login = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isPressed, setIsPressed] = useState(false);

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin') {
      navigation.navigate('Home');
    } else {
      Alert.alert('Login Failed', 'Incorrect username or password');
    }
  };

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

  return (
    <View style={styles.container}>

      <View style={styles.puzzleContainer} > 
        <Image source={require('../assets/puzzle-piece.png')}
                style={styles.puzzle}
        />
      </View>


      <TextInput
        style={styles.userinput}
        placeholder="Username"
        onChangeText={text => setUsername(text)}
        value={username}
      />
      <TextInput
        style={styles.passinput}
        placeholder="Password"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry
      />

      <TouchableOpacity style={isPressed && styles.buttonPressed } title="Login" onPress={handleLogin}  onPressIn={handlePressIn} onPressOut={handlePressOut} >
        <View style={styles.loginBtn} >
          <Text style={styles.loginTxt}> Login </Text>
        </View>

      </TouchableOpacity>

      {/* <Button title="Login" onPress={handleLogin} 
              style={styles.loginBtn}
       /> */}
    </View>
  );
};


export default Login;