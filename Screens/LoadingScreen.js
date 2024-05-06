import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import styles from '../Styles/Styles';

function LoadingScreen({ navigation }) {

    return (
        <View style={[styles.loadingContainer, styles.horizontal]}>
            <ActivityIndicator size="large" color="#B4B4B8" />
        </View>


    );

}

export default LoadingScreen;