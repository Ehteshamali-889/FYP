import React from 'react'
import { View, StyleSheet, Image, Text } from 'react-native';

const ViewInfo = () => {
  return (
    <View style={{display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'white'}}>
        <View style={{display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'white',width:'10%',padding:10}}>
            <Text style={{fontWeight:'bold',margin:5}}>Basic Info:</Text>
            <Text>Name: Doctor Ali</Text>
            <Text>Experience: 2 years</Text>
            <Text>Speciality: ENT</Text>
        </View>
    </View>
  )
}

export default ViewInfo