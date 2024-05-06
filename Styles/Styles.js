import React from "react";
import { StyleSheet  } from "react-native";

const Styles = StyleSheet.create({

    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
      backgroundColor: 'white'
    },
    userinput: {
      height: 50,
      width: '100%',
      borderColor: 'gray',
      fontSize: 17,
      fontWeight: '500',
      color: '#fff',
      backgroundColor: '#91C8E4',
      borderWidth: 1,
      padding: 10,
      borderRadius: 5,
      marginBottom: 20,
    },
    passinput: {
      height: 50,
      width: '100%',
      borderColor: 'gray',
      fontSize: 17,
      fontWeight: '500',
      color: '#fff',
      backgroundColor: '#FFC300',
      borderWidth: 1,
      padding: 10,
      borderRadius: 5,
      marginBottom: 20,
    },
    loginBtn: {
      backgroundColor: '#007bff',
      paddingVertical: 14,
      paddingHorizontal: 10,
      borderRadius: 5,
      width: '80%',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20,
    },
    loadingContainer: {
      flex: 1,
      justifyContent: 'center'
    },
    welcomeText: {
      fontWeight: '700',
      justifyContent: 'center',
      margin: 10,
      fontSize: 40,
    },
    splashContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
      backgroundColor: 'white',
    },
    // puzzle:{
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   height: '100px',
    //   width: '100px'
    // },
    horizontal: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10,
    },
    puzzle: {
      height: '100%',
      width: '100%',
      resizeMode: 'cover',
    },
    puzzleContainer: {
      width: '60%',
      height: '15%',
      alignContent: "center",

    },
    // sampleBtn1: {
    //   height: 50,
    //   width: '100%',
    //   backgroundColor: '#EA906C',
    //   margin: 10,
    //   padding: 10,
    //   fontSize: 20,
    // },


    
  });

  export default Styles;
  