import React,{useState} from 'react';
import { View, StyleSheet, Image, Text, Alert, TouchableHighlight } from 'react-native';
import { Button, IconButton, Avatar } from 'react-native-paper';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
// import {Avatar} from 'react-native-paper'
// import { Picker } from 'react-native-web';
function Upload() {
    const [Pic,setPic]=useState('');
    const uploadImage=()=>{
        let options={
            mediaType:'photo',
            quality:1,
            includeBase64:true
        }
        launchImageLibrary(options,response=>{
            if ( response.didCancel ) {
             Alert.alert('Cancelled image selection');
            } 
            else if ( response.errorCode == 'permission' ) {
             Alert.alert( ' permission not satisfied ' ) ;
            } else if ( response.errorCode == ' others ' ) {
            Alert.alert( response.errorMessage ) ;
            } else if ( response.assets [ 0 ] .filesize > 2097152 ) {
            Alert.alert ('Maximum image size exceeded Please choose image under 2 MB' ,[ { text : ' OK ' } ] ,
            ) ;
            } else {
            setPic ( response.assets [ 0 ] .base64 ) ;
            }
        })
    }
    const removeImage=()=>{
      setPic('');
    }
  return (
    <View>
      <View style={styles.centerContent}>
        <TouchableHighlight onPress={() => alert('pressed')} underlayColor="rgba ( 0,0,0,0 )">
          <Avatar.Image size={250} source={{ uri: 'data:image/png;base64,' + Pic }} />
        </TouchableHighlight>
      </View>
      <View style={[styles.centerContent,{marginTop:25,flexDirection:'row'}]}>
        <Button mode="contained" onPress={() => uploadImage()}>
          Upload Image
        </Button>
        <Button mode="contained"
        style={{marginLeft:20}}
        onPress={() => removeImage()}>
          Remove Image
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  centerContent:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    marginTop:100,
  }
});

export default Upload;

