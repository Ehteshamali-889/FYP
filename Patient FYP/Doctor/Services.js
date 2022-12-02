import React from 'react'
import { View, StyleSheet, Image, Text } from 'react-native';
const Services = () => {
  return (
    <View style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <View style={{display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'white',width:'10%',padding:10}}>
            <Text style={{fontWeight:'bold',margin:5}}>Services:</Text>
            <Text>Acne Scar</Text>
            <Text>Alopecia</Text>
            <Text>Chemcial Peel</Text>
        </View>
    </View>
  )
}

export default Services