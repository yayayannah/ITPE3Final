import React, {useState} from "react";
import { View, Text, } from "react-native";
import questionsData from "../Data/questionsData";
import styles from '../Styles/Styles';

const PracticeTest = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswer, setUserAnswer] = useState('');
    const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);

    // const handleNextQuestion = () => {
    //     const correctAnswer = 
    // }

    return (
        <View style={styles.container}>
{/* 
            {currentQuestionIndex < questionsData.length ? (


            )}; */}


        </View>
    );

};

export default PracticeTest;