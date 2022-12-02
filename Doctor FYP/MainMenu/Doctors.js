import React, { useEffect,useState } from 'react'
import { View, StyleSheet, Image, Text } from 'react-native';
import { Button,IconButton } from 'react-native-paper';
import DoctorCard from './DoctorCard';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
const Doctors = () => {
  const navigation = useNavigation();
  const[data,setData]=useState([]);
  const [doctorname,setNameDoctor]=useState('');
  const [doctorspeciality,setSpeciality]=useState('');
  const [doctoryears,setYears]=useState('');
  useEffect(()=>{
    axios
      .get('http://localhost:3010/patient/homepatients')
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        const result = res.data;
        const { name, speciality, experience } = result;
      
      })
      .catch((err) => console.log(err));
  },[])

  const arr=data.map((data,index)=>{
    return (
    //   <View key={index} style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center',flexDirection:'row' ,marginLeft:120,marginRight:120
    // ,backgroundColor: 'white',width:'20%'
    // }} >
    // {/* Card Start */}
    // <View>
    //     <View style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-evenly',marginTop:15}}>  
    //     {/* Card Top */}
    //         <Image source={require('../assets/img/doctor.png')} style={{ width: 40, height: 40 }} />
    //         <View>
    //             <Text>Experience</Text>
    //             <Text>{data.experience}</Text>
    //         </View>
    //     </View>
    //     <View style={{textAlign:'center',marginTop:15}}>  
    //         <Text style={{fontSize:24,fontWeight:'600'}}>{data.name}</Text>
    //         <Text>{data.speciality}</Text>
    //     </View>
    //     <View style={{display:'flex',flexDirection:'row'}}>
    //     <Button mode='outlined' onPress={() => {navigation.navigate('ViewSingle',{
    //         docId: data._id,
    //       })}} style={{margin:10,marginTop:20,marginBottom:20, width:'30%'}}>
    //                 Book Appointment
    //     </Button>
    //     <Button mode='outlined' onPress={() => {navigation.navigate('ViewSingle',{
    //         docId: data._id,
    //       })}} style={{margin:10,marginTop:20,marginBottom:20}}>
    //                 Book Appointment
    //     </Button>
    //     </View>
        
    // </View>
    
    // {/* Card End */}
    // </View>
    <View key={index} style={{backgroundColor: 'white',padding:10,margin:10,marginLeft:110}}>
      <View style={{textAlign:'center'}}>
        <Text style={{fontSize:24,fontWeight:'600'}}>{data.name}</Text>
      </View>
      
      <View style={{display:'flex',flexDirection:'row',gap:20,padding:10,justifyContent:'center'}}>
        <View>
        <Text style={{color:'grey'}}>Age</Text>
        <Text>{data.age}</Text>
        </View>
        
        <View>
        <Text style={{color:'grey'}}>Gender</Text>
        <Text>{data.experience}</Text>
        </View>
        
      </View>

      <View style={{textAlign:'center'}}>
        <Button mode='outlined' onPress={()=>navigation.navigate("ViewSingle",{
          docId:data._id
        })}>View Details</Button>
      </View>
      
    </View>
      
    );
  })
  return (
    <View>
        <View style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center',flexDirection:'row' ,marginLeft:120,marginRight:120}}>
            <Text style={{fontSize:32,fontWeight:'bold'}}>Patient</Text>
            {/* <Button mode="contained" onClick={() => navigation.navigate('All')} style={{margin:10,marginTop:20}}>
                    View All
            </Button> */}
        </View>
        <View style={{display:'flex',flexDirection:'row',marginTop:10,marginBottom:10}}>
        {arr}
            {/* <DoctorCard type='contained' /> */}
            {/* <DoctorCard type='outlined' /> */}
            {/* <DoctorCard type='outlined' /> */}
        </View>
       
    </View>
  )
}

export default Doctors