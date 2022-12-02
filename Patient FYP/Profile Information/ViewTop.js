import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, Text, Dimensions } from 'react-native';
import { Button, IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';


import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

import axios from 'axios';
import AppointmentGraph from './AppointmentGraph';
import PaymentGraph from './PaymentGraph';
function ViewTop() {
    const navigation = useNavigation();
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    console.log('local id', localStorage.getItem('patientid'));
    const currentid=localStorage.getItem('patientid')
    useEffect(() => {
        
      getdata();

      return () => {
          console.log("This will be logged on unmount");
      }
  }, []);
  const getdata=async()=>{
      const response = await axios.get(
          "http://localhost:3010/patient/getuser/"+currentid
      );

      setName(response.data.name);
      setEmail(response.data.email);
  }
  return (
    <View>
      <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <View>
          <h1>My Profile</h1>
        </View>
        {/* <Button icon="comment-edit" mode="contained" onPress={() => navigation.navigate('EditProfile')}>
          Edit Profile
        </Button> */}
        <View style={{flexDirection:'row',margin:30,gap:30}}>
          <Text style={{ fontSize: 24,fontWeight:'bold' }}>Name:</Text>
          <Text style={{ fontSize: 24}}>{name}</Text>
        </View>
        <View style={{flexDirection:'row',margin:10,paddingLeft:120,gap:30}}>
          <Text style={{ fontSize: 24,fontWeight:'bold' }}>Email:</Text>
          <Text style={{ fontSize: 24}}>{email}</Text>
        </View>
        <View style={{margin:20}}>
          <Text style={{fontSize: 24,fontWeight:'bold'}}>
            Statistics
          </Text>
        </View>
        <View style={{display:'flex',flexDirection:'row',gap:50}}> 
        <AppointmentGraph />
        <PaymentGraph />
        </View>
        
        {/* <View>
          <h1>My Profile</h1>
        </View>
        <Text>Image Here</Text>
        <Button icon="comment-edit" mode="contained" onPress={() => navigation.navigate('EditProfile')}>
          Edit Profile
        </Button>
        <View>
          <Text style={{ fontSize: 40 }}>Name: Ehtesham Ali</Text>
        </View>
        <View>
          <Text style={{ fontSize: 40 }}>Email: user@gmail.com</Text>
        </View> */}
        {/* <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
          <View style={{ display: 'flex', flexDirection: 'row', gap: 30, width: '0.2' }}>
            <Text>Payment method</Text>
            <Text>Icon</Text>
          </View>
          <Text style={{ alignSelf: 'flex-start' }}>Easypaisa</Text>
        </View>
        <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
          <View style={{ display: 'flex', flexDirection: 'row', gap: 30, width: '0.2' }}>
            <Text>Total Payment</Text>
            <Text>Icon</Text>
          </View>
          <Text style={{ alignSelf: 'flex-start' }}>1000</Text>
        </View> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  iconitem: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    width: '5%',
    borderRadius: 50,
  },
});

export default ViewTop;
