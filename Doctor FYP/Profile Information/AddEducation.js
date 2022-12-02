import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { Text, View } from 'react-native-web';
import Button from '@mui/material/Button';
import axios from 'axios'
const AddEducation = () => {
  const [education,setEducation]=useState('');
  const [year,setYear]=useState('');
  const [grade,setGrade]=useState('');
  const [country,setCountry]=useState('');
  console.log('local id', localStorage.getItem('doctorid'));

    const currentid=localStorage.getItem('doctorid');
  const addeducation=()=>{
    axios.all([
      axios.post(`http://localhost:3010/education/addeducation/${currentid}`, {
        name:education,
        year:year,
        country:country,
        grade:grade,
        doctor:currentid
      }), 
      
    ])
    .then(axios.spread((data1) => {
      // output of req.
      console.log('data1', data1)
    }));
    
  }
  return (
    <View style={{display:'flex',justifyContent:"center",alignItems:"center",marginTop:50}}>
        <Text style={{fontSize:24,fontWeight:'bold',margin:10}}>Add Education</Text>
        <TextField style={{margin:10}} id="outlined-basic" label="Education" variant="outlined" onChange={(e) => setEducation(e.target.value)} />
        <TextField style={{margin:10}} id="outlined-basic" label="Graduated Year" variant="outlined" onChange={(e) => setYear(e.target.value)} />
        <TextField style={{margin:10}} id="outlined-basic" label="Country" variant="outlined" onChange={(e) => setCountry(e.target.value)} />
        <TextField style={{margin:10}} id="outlined-basic" label="Grade" variant="outlined" onChange={(e) => setGrade(e.target.value)} />
        <Button variant="contained" onClick={()=>addeducation()}>Submit</Button>
    </View>
  )
}

export default AddEducation