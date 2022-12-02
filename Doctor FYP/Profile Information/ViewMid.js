import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import Button from '@mui/material/Button';
import { useNavigation } from '@react-navigation/native';
import ViewEducation from '../Education/ViewEducation';

import axios from 'axios';

function ViewMid() {
  const [education,setEducation]=useState('');
  const [year,setYear]=useState('');
  const [grade,setGrade]=useState('');
  const [country,setCountry]=useState('');
    console.log('local id', localStorage.getItem('doctorid'));
    const currentid=localStorage.getItem('doctorid')
  //   useEffect(() => {
        
  //     getdata();
      

  //     return () => {
  //         console.log("This will be logged on unmount");
  //     }
  // }, []);
  const getdata=()=>{
      fetch(`http://localhost:3010/education/allEducation/${currentid}`)
      .then((response) => response.json())
      .then((data) => console.log(data));
  
      // const response = await axios.get(
      //     `http://localhost:3010/education/allEducation/${currentid}`
      // );

      setEducation(response.data.name);
      setYear(response.data.year);
      setGrade(response.data.grade);
      setCountry(response.data.country);
      
  }
  return (
    <View>
      
      <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <View>
          <h1>Education</h1>
        </View>
        {/* <Button icon="comment-edit" mode="contained" onPress={() => navigation.navigate('EditProfile')}>
          Edit Profile
        </Button> */}
        <View>
          <Text style={{ fontSize: 40 }}>Name: {education}</Text>
        </View>
        <View>
          <Text style={{ fontSize: 40 }}>Year: {year}</Text>
        </View>
        <View>
          <Text style={{ fontSize: 40 }}>Country: {country}</Text>
        </View>
        <View>
          <Text style={{ fontSize: 40 }}>Grade: {grade}</Text>
        </View>
        <Button onClick={()=>getdata()}>Get Data</Button>
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

export default ViewMid;
