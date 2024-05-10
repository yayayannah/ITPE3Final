import React from "react";
import { StyleSheet  } from "react-native";

const Styles = StyleSheet.create({

    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white'
    },
    userinput: {
      height: 50,
      width: '90%',
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
      width: '90%',
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
      height: 50,
      width: 270,
      backgroundColor: "#BACD92",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 20,
      // elevation: 4,
    },
    logoutBtn: {
      height: 50,
      width: 270,
      backgroundColor: "#C40C0C",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 20,
    },
    loginTxt: {
      textTransform: 'uppercase',
      color: "#fff",
      fontSize: 20,
      fontWeight: '700',
    },
    loadingContainer: {
      flex: 1,
      justifyContent: 'center'
    },
    welcomeText: {
      fontWeight: '700',
      justifyContent: 'center',
      margin: 10,
      fontSize: 20,
    },
    splashContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
      backgroundColor: 'white',
    },
    horizontal: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10,
    },
    puzzle: {
      height: '200',
      aspectRatio: 1,
      resizeMode: 'cover',
      flex: 1,
      marginBottom: 40,
      marginLeft: 25,
      marginTop: 0,
      alignItems: "center",
      justifyContent: "center", 
    },
    puzzleContainer: {
      height: 200,
      aspectRatio: 1,

    },
    loadingImage: {
      width: 200, // Adjust the width and height according to your needs
      height: 200,
    },
    gifContainer: {
      height: 200,
      aspectRatio: 1,
    },
    loadText: {
      fontSize: 15,
      justifyContent: "center",
      textAlign: "center"

    },
    buttonPressed: {
      elevation: 5,
    }


    
  });

  export default Styles;
  