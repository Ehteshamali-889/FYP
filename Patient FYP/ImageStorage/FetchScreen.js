import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'

const FetchScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text} >FetchScreen</Text>
      <Image style={styles.image}
      source={{
        uri:'https://firebasestorage.googleapis.com/v0/b/imageupload-fyp.appspot.com/o/9K6jbRERERERERERERGSH2KOYiIiIiIiIiIiIyM4xUUxERERERERERERk55goJiIiIiIiIiIiIrJzTBQTERERERERERER2TkmiomIiIiIiIiIiIjsHBPFRERERERERERERHaOiWIiIiIiIiIiIiIiO8dEMREREREREREREZGdY6KYiIiIiIiIiIiIyM4xUUxERERERERERERk55goJiIiIiIiIiIiIrJzTBQTERERERERERER2TkmiomIiIiIiIiIiIjsHBPFRERERERERERERHaOiWIiIiIiIiIiIiIiuwb8H3Y1IZvf0mGaAAAAAElFTkSuQmCC?alt=media&token=e3e1dd70-da02-430d-9fd6-0233f11642b1'
      }}
       />
    </View>
  )
}

export default FetchScreen
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#fff',
      alignItems:'center',
      justifyContent:'center'
    },
    image:{
        width:400,
        height:300,
        resizeMode:'contain',
        borderRadius:50
    },
    text:{
        marginBottom:15,
        fontWeight:'bold',
        fontSize:20
    }
  });