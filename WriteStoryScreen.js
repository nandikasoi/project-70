import React from 'react';
import { StyleSheet, Text, View } from 'react-native'; 
import AppHeader from '../components/AppHeader'

export default class WriteStoryScreen extends React.Component {
   render(){
     return(
        <View style={style.textContainer}>
        <AppHeader/>
        <Text style={styles.text}>Story Hub</Text>

        <TouchableOpacity 
            style={[styles.button,{backgroundColor:"pink"}]} 
            onPress={()=>this.goToReadStoryScreen}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>

        </View>
     ) 
   }
}

const styles = StyleSheet.create({
    textContainer:{
      backgroundColor: 'blue',
    },
    text:{
      color: 'white',
      padding: 20,
      fontSize: 22,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    button:{
      justifyContent : 'center',
      alignSelf : 'center',
      borderWidth : 2,
      borderRadius : 15,
      marginTop:200,
      width : 200,
      height:50,
    },
    buttonText : {
      textAlign : 'center',
      color : 'white'
    } 
  });
 