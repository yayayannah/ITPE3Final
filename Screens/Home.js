import React, { useEffect, useState } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import 'react-native-gesture-handler';
import styles from '../Styles/Styles';
import LoadingScreen from './LoadingScreen';

const Home = () => {

  const navigation = useNavigation();
  const[isLoading, setIsLoading] = useState(true  );

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

  return (
    <View style={styles.container}>

      { isLoading ? <LoadingScreen/> :(
        <>
          <Text style={styles.welcomeText}>MAIN MENU</Text>

          {/* <Button title="Sample Button 1" color="#EA906C" style={styles.sampleBtn1} /> */}

          <Button title="Logout" onPress={handleLogout} />
        </>
      )}

    </View>
  );
};

export default Home;  