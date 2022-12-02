import React,{useState,useEffect} from 'react'
import { View, StyleSheet, Image, Text } from 'react-native';
import { Button,IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const DoctorCard = (props) => {
  const navigation = useNavigation();
  const[data,setData]=useState([]);
  const [name,setNameDoctor]=useState('');
  const [doctorspeciality,setSpeciality]=useState('');
  const [doctoryears,setYears]=useState('');
  useEffect(()=>{
    axios
      .get('http://localhost:3010/doctor/alldoctor')
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        const result = res.data;
        const { name, speciality, years } = result;
        setNameDoctor(name);
        setSpeciality(speciality);
        setYears(years);
      })
      .catch((err) => console.log(err));
  },[])

  const arr=data.map((data,index)=>{
    return (
      <View style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center',flexDirection:'row' ,marginLeft:120,marginRight:120
    ,backgroundColor: 'white',width:'15%'
    }} >
    {/* Card Start */}
    <View>
        <View style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-evenly',marginTop:15}}>  
        {/* Card Top */}
            <Image source={require('../assets/img/doctor.png')} style={{ width: 40, height: 40 }} />
            <View>
                <Text>Experience</Text>
                <Text>{data.years}</Text>
            </View>
        </View>
        <View style={{textAlign:'center',marginTop:15}}>  
            <Text style={{fontSize:24,fontWeight:'600'}}>{data.name}</Text>
            <Text>S{data.speciality}</Text>
        </View>
        
        <Button mode={props.type} onPress={() => navigation.navigate('ViewSingle')} style={{margin:10,marginTop:20,marginBottom:20}}>
                    Book Appointment
        </Button>
    </View>
    
    {/* Card End */}
    </View>
      
    );
  })
  
  return (
    // <View style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center',flexDirection:'row' ,marginLeft:120,marginRight:120
    // ,backgroundColor: 'white',width:'15%'
    // }} >
    // {/* Card Start */}
    // <View>
    //     <View style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-evenly',marginTop:15}}>  
    //     {/* Card Top */}
    //         <Image source={require('../assets/img/doctor.png')} style={{ width: 40, height: 40 }} />
    //         <View>
    //             <Text>Experience</Text>
    //             <Text>Years</Text>
    //         </View>
    //     </View>
    //     <View style={{textAlign:'center',marginTop:15}}>  
    //         <Text style={{fontSize:24,fontWeight:'600'}}>Doctor Ahmed</Text>
    //         <Text>Speciality</Text>
    //     </View>
        
    //     <Button mode={props.type} onPress={() => navigation.navigate('ViewSingle')} style={{margin:10,marginTop:20,marginBottom:20}}>
    //                 Book Appointment
    //     </Button>
    // </View>
    
    // {/* Card End */}
    // </View>
    {arr}
  )
}

export default DoctorCard