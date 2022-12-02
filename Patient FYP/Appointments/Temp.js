import React from 'react'
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
  } from 'react-native';
   
  // either import the whole module and call as Communications.method()
  import Communications from 'react-native-communications';

const SendEmail = () => {
  return (
    <View style={styles.container}>
    <TouchableOpacity style={styles.mybtn} onPress={() => Communications.phonecall('+923165601796', true)}>
      <View style={styles.holder}>
        <Text style={styles.text}>Make phonecall</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => Communications.email(['webdeveloper3628@gmail.com', 'webdeveloper3628@gmail.com'],null,null,'My Subject','My body text')}>
      <View style={styles.holder}>
        <Text style={styles.text}>Send an email</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => Communications.text('+923165601796')}>
      <View style={styles.holder}>
        <Text style={styles.text}>Send a text/iMessage</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => Communications.web('https://github.com/facebook/react-native')}>
      <View style={styles.holder}>
        <Text style={styles.text}>Open react-native repo on Github</Text>
      </View>
    </TouchableOpacity>
  </View>
  )
}
var styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: 'rgb(253,253,253)',
    },
    holder: {
      flex: 0.25,
      justifyContent: 'center',
    },
    text: {
      fontSize: 32,
    },
    mybtn:{
        backgroundColor:'blue',
        padding:10
    }
  });
   

export default SendEmail