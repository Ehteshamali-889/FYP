import React,{useState,useEffect} from 'react'
import { View, StyleSheet, Image, Text } from 'react-native';
import { Button,IconButton } from 'react-native-paper';
import Add from '../Appointments/Add';
import Education from './Education';
import Services from './Services';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { useRoute } from '@react-navigation/native';

const ViewSingle = ({route}) => {
    // const route = useRoute();
    const navigation = useNavigation();
    const doctorid=route.params.docId
    const[data,setData]=useState([]);
    const [price,setPrice]=useState('2000');
  useEffect(()=>{
    axios
      .get('http://localhost:3010/doctor/alldoctor/'+doctorid)
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
        <View key={index}>
        <View style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center',flexDirection:'row' ,marginLeft:120,marginRight:120}}>
        <Image source={require('../assets/img/doctor.png')} style={{ width: 120, height: 120 }} />
        <View>
                <Text>Experience</Text>
                <Text>{data.experience}</Text>
            </View>
        </View>
        <View style={{textAlign:'center',marginTop:15}}>  
            <Text style={{fontSize:24,fontWeight:'600'}}>{data.name}</Text>
            <Text>{data.speciality}</Text>
        </View>
        <View style={{textAlign:'center',marginTop:15}}>
            <Text>Fee:</Text>
            <Text style={{fontWeight:'bold'}}>Rs {price}</Text>
        </View>

        {/* <View style={{textAlign:'center',marginTop:15}}>
            <Text style={{fontWeight:'bold'}}>Services:</Text>
            <Text>Acne Scar</Text>
            <Text>Alopecia</Text>
            <Text>Chemcial Peel</Text>    
        </View> */}
        
        {/* <View style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <View style={{display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'white',width:'10%'}}>
            <Text style={{fontWeight:'bold'}}>Services:</Text>
            <Text>Acne Scar</Text>
            <Text>Alopecia</Text>
            <Text>Chemcial Peel</Text>
        </View>
        </View> */}
        <View style={{marginTop:20}}>
        <Services />
        </View>

        <View style={{marginTop:20}}>
        <Education />
        </View>
        
        
        
        
        <View style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <View style={{width:'50%',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <Button mode='contained' onPress={() => navigation.navigate('Add',{
              docId:data._id,
              docName:data.name,
              price:price
            })} style={{margin:10,marginTop:20,marginBottom:20}}>
                        Book Appointment
            </Button>
        </View>
        </View>
        
    </View>
      
    );
  })
  return (
    // <View>
    //     <View style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center',flexDirection:'row' ,marginLeft:120,marginRight:120}}>
    //     <Image source={require('../assets/img/doctor.png')} style={{ width: 120, height: 120 }} />
    //     <View>
    //             <Text>Experience</Text>
    //             <Text>Years</Text>
    //         </View>
    //     </View>
    //     <View style={{textAlign:'center',marginTop:15}}>  
    //         <Text style={{fontSize:24,fontWeight:'600'}}>Doctor Ahmed</Text>
    //         <Text>Speciality</Text>
    //     </View>
    //     <View style={{textAlign:'center',marginTop:15}}>
    //         <Text>Fee:</Text>
    //         <Text style={{fontWeight:'bold'}}>Rs 2000</Text>
    //     </View>

    //     {/* <View style={{textAlign:'center',marginTop:15}}>
    //         <Text style={{fontWeight:'bold'}}>Services:</Text>
    //         <Text>Acne Scar</Text>
    //         <Text>Alopecia</Text>
    //         <Text>Chemcial Peel</Text>    
    //     </View> */}
        
    //     {/* <View style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
    //     <View style={{display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'white',width:'10%'}}>
    //         <Text style={{fontWeight:'bold'}}>Services:</Text>
    //         <Text>Acne Scar</Text>
    //         <Text>Alopecia</Text>
    //         <Text>Chemcial Peel</Text>
    //     </View>
    //     </View> */}
    //     <View style={{marginTop:20}}>
    //     <Services />
    //     </View>

    //     <View style={{marginTop:20}}>
    //     <Education />
    //     </View>
        
        
        
        
    //     <View style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
    //     <View style={{width:'50%',display:'flex',justifyContent:'center',alignItems:'center'}}>
    //         <Button mode='contained' onPress={() => navigation.navigate('Add')} style={{margin:10,marginTop:20,marginBottom:20}}>
    //                     Book Appointment
    //         </Button>
    //     </View>
    //     </View>
        
    // </View>
    <View>
        {arr}
    </View>
  )
}

export default ViewSingle