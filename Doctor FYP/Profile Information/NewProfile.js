import React from 'react'
import { View, StyleSheet, Text, Image,ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button,IconButton } from 'react-native-paper';
import ViewEducation from '../Education/ViewEducation';
import ViewInfo from '../BasicInfo/ViewInfo';

const NewProfile = () => {
    const navigation = useNavigation();
  return (
    <View>
        <ViewEducation />

    </View>
    
  )
}

const styles = StyleSheet.create({
    firstbox:{
        display:'flex',justifyContent:'center',alignItems:'center',height:'50vh',flexDirection:'row',gap:20
    },
    secondbox:{
        display:'flex',justifyContent:'center',alignItems:'center',height:'20vh',flexDirection:'row',gap:20
    },
    subbox:{
        justifyContent:'center',backgroundColor:'white',alignItems:'center',padding:20,width:'20%'
    },
    maintext:{
      fontWeight:"bold",
      fontSize:18,
      textAlign:"center",
      marginTop:20
    }
  });
  
export default NewProfile