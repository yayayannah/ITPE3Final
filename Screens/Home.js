import React, { useEffect, useState } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import 'react-native-gesture-handler';
import styles from '../Styles/Styles';
import LoadingScreen from './LoadingScreen';
import PracticeTest from './PracticeTest';

const Home = () => {

  const navigation = useNavigation();
  const[isLoading, setIsLoading] = useState(true );
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    fetchData();
  },[]);

  const fetchData = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000 );
  };


  const handleLogout = () => {
    navigation.navigate('Login');
  };



  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

  return (
    <View style={styles.container}>

      { isLoading ? <LoadingScreen/> :(
        <>



          <Text style={styles.welcomeText}>THIS IS HOMEPAGE✮ ⋆ ˚｡𖦹 ⋆｡°✩</Text>

          {/* <TouchableOpacity style={styles.Practice} onPress={ () => navigation.navigate('PracticeTest')}>
            <Text style={styles.textPractice} >
              Practice Test
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.Test} >
            <Text style={styles.textTest} >
              Timed Test
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.sampleBtn} >
            <Text style={styles.textSampleBtn} >
              Sample Button
            </Text>
          </TouchableOpacity> */}

          {/* <Button title="Sample Button 1" color="#EA906C" style={styles.sampleBtn1} /> */}

          <TouchableOpacity style={isPressed && styles.buttonPressed } title="Login" onPress={handleLogout} onPressIn={handlePressIn} onPressOut={handlePressOut}  >
            <View style={styles.logoutBtn} >
              <Text style={styles.loginTxt}> Logout </Text>
            </View>

          </TouchableOpacity>
          {/* <Button title="Logout" onPress={handleLogout} /> */}
        </>
      )}

    </View>
  );
};

export default Home;  