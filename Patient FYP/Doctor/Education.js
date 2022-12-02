import React from 'react'
import { View, StyleSheet, Image, Text } from 'react-native';

const Education = () => {
  return (
    <View style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <View style={{display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'white',width:'10%',padding:10}}>
            <Text style={{fontWeight:'bold',margin:5}}>Education:</Text>
            <Text>MBBS</Text>
            <Text>FCPS</Text>
            <Text>MAACS</Text>
        </View>
    </View>
  )
}

export default Education