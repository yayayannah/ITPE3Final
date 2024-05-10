import React from 'react';
import {View, ActivityIndicator, Text} from 'react-native';
import styles from '../Styles/Styles';
import LottieView from 'lottie-react-native';

function LoadingScreen({ navigation }) {

    return (
        <View style={styles.container}>
            <View style={styles.gifContainer} >
                <LottieView style={{flex: 1}} source={require('../assets/animatedLoader.json')} autoPlay loop />
                <Text style={styles.loadText} > Loading... </Text>
            </View>
        </View>


    );

}

export default LoadingScreen;