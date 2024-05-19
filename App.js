import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

import Login from './Screens/Login';
import Home from './Screens/Home';
import Splash from './Screens/SplashScreen';
import PracticeTest from './Screens/PracticeTest';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}} />
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Practice" component={PracticeTest}/>
        <Stack.Screen name="Home" component={Home} options={{ title: 'Home' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;