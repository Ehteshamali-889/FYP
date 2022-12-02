import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { Button,IconButton } from 'react-native-paper';
import Doctors from './Doctors';
import Payment from './Payment';


import Top from './Top';
import AllAppointments from './All Appointments';
function Menu() {
 
  return (
    <View>
      <Top />
      <Doctors />
      <AllAppointments />
      {/* <Payment /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  iconitem:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'black',
    width:'5%',
    borderRadius:50
  }
});

export default Menu;
