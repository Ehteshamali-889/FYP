import { useState, useEffect } from 'react';
import { View, StyleSheet, Image, Text, Alert, TouchableOpacity } from 'react-native';
import { Button,IconButton } from 'react-native-paper';
import axios from 'axios';
import Page from './404';

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';

// import AwesomeAlert from 'react-native-awesome-alerts';
function Future({ navigation }) {
  const [userid, setUserId] = useState('');
  const [data, setData] = useState([]);
  const [displayAlert, setDisplayAlert] = useState(false);
  const [namedoctor, setNameDoctor] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [description,setDescription]=useState('');

  

  // const [description, setDescription] = useState('');
  function deletedata(id) {
    axios
      .delete('http://localhost:3000/doctor/removedoctor/' + id)
      .then((res) => {
        console.log(res.data);
        console.log(id);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    axios
      .get('http://localhost:3010/appointment/futureappointments')
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        const result = res.data;
        const { name, date, time,description } = result;
        setNameDoctor(name);
        setDate(date);
        setTime(time);
        setDescription(description);
      })
      .catch((err) => console.log(err));
  }, [showAlert]);
  const showAlert = (id) => {
    deletedata(id);
    alert('Appointment Cancelled');
    // navigation.navigate('Login');
    location.reload();
  };
  
  // const showAlert = (id) => {
  //   setDisplayAlert(!displayAlert);
  //   setUserId(id)
  // };
  // const hideAlert = () => {
  //   setDisplayAlert(false);
  // };
  // const deleteOnAlert = () => {
  //   setDisplayAlert(false);
  //   deletedata(userid)
  // };

  const arr = data.map((data, index) => {
    var doctorId = data._id;
    return (
      // <View style={styles.singledoc} key={index}>
      //   <View style={styles.top}>
      //     <Image source={require('../assets/img/doctor.png')} style={{ width: 128, height: 128 }} />
      //     <View>
      //       <Text style={styles.dochead}>{data.namedoctor}</Text>
      //       <Text style={styles.docdetail}>{data.description}</Text>
      //       <Text style={styles.completed}>Upcoming</Text>
      //     </View>
      //     <View>
      //       <Text style={styles.date}>{data.date}</Text>
      //       <Text style={styles.time}>{data.time}</Text>
      //     </View>
      //   </View>
      //   <View style={styles.bottom}>
      //     <TouchableOpacity style={styles.cancelbtn}>
      //       <Text style={styles.canceltxt} onPress={() => showAlert(doctorId)}>
      //         Cancel Appointment
      //       </Text>
      //     </TouchableOpacity>
          
      //     <TouchableOpacity style={styles.resbtn}>
      //       <Text
      //         style={styles.restxt}
              // onPress={() => {

              //   navigation.navigate('Update', {
              //     id:doctorId,
              //     name: data.name,
              //     email: data.email,
              //   });
              // }}
      //       >
      //         Reschedule Appointment
      //       </Text>
      //     </TouchableOpacity>
      //   </View>
      // </View>
      <View style={{backgroundColor:'white',padding:10,margin:30}}>
        
        <View style={{display:'flex',flexDirection:'row',gap:30,justifyContent:'center',alignItems:'center'}}>
          <Text style={{fontWeight:'bold',fontSize:24}}>{data.namedoctor}</Text>
          <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',gap:10}}>
            <CalendarMonthIcon />
            <Text>Date: {data.date}</Text>
          </View>
          
          <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',gap:10}}>
          <AccessTimeIcon /> 
          <Text>Time: {data.time}</Text>
          </View>
          
        </View>
        <View style={{display:'flex',flexDirection:'row',gap:30,justifyContent:'center',alignItems:'center',margin:20}}>
          <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',gap:10}}>
          <HeartBrokenIcon />
            <Text>Purpose: {data.description}</Text>
          </View>
          
          <Text style={{backgroundColor:'green',padding:5,color:'white',borderRadius:5}}>Upcoming</Text>
        </View>
        <View style={{display:'flex',flexDirection:'row',gap:10,justifyContent:'center',alignItems:'center'}}>
        <Button mode='outlined'>Cancel Appointment</Button>
        <Button mode='outlined'>Reschedule Appointment</Button>
        </View>
        
      </View>
    );
  });
  return (
    <View style={styles.container}>
      <Text style={{fontWeight:'bold',fontSize:32,marginTop:50}}>Future Appointments</Text>
      {arr.length==0?(<Page />) :(arr)}
      {/* Aweomse alert */}
      {/* <AwesomeAlert
        show={displayAlert}
        showProgress={false}
        title="AwesomeAlert"
        message="I have a message for you!"
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showCancelButton={true}
        showConfirmButton={true}
        cancelText="No, cancel"
        confirmText="Yes, delete it"
        confirmButtonColor="#DD6B55"
        onCancelPressed={() => {
          hideAlert();
        }}
        onConfirmPressed={() => {
          deleteOnAlert();
        }}
      /> */}
      {/* <View style={styles.singledoc}>
        <View style={styles.top}>
          <Image source={require('../assets/img/doctor.png')} style={{ width: 128, height: 128 }} />
          <View>
            <Text style={styles.dochead}>Dr. John Doe</Text>
            <Text style={styles.docdetail}>Appointment Type</Text>
            <Text style={styles.completed}>Upcoming</Text>
          </View>
          <View>
            <Text style={styles.date}>Date</Text>
            <Text style={styles.time}>Time</Text>
          </View>
        </View>
        <View style={styles.bottom}>
          <TouchableOpacity style={styles.cancelbtn}>
            <Text style={styles.canceltxt}>Cancel Appointment</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.resbtn}>
            <Text style={styles.restxt}>Reschedule Appointment</Text>
          </TouchableOpacity>
        </View>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    height:'50vh',
  },
  singledoc: {
    margin: 10,
    // glassmorphism
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  top: {
    flexDirection: 'row',
    padding: 20,
    gap: 40,
  },
  dochead: {
    fontWeight: 'bold',
    fontSize: 36,
  },
  docdetail: {
    fontSize: 20,
  },
  date: {
    fontSize: 20,
  },
  time: {
    fontSize: 20,
  },
  completed: {
    width: 100,
    textAlign: 'center',
    borderRadius: 5,
    marginTop: 10,
    padding: 5,
    borderWidth: 2,
    borderColor: 'black',
  },
  bottom: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  cancelbtn: {
    padding: 10,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    // flex: 1,
  },
  resbtn: {
    // flex:1,
    backgroundColor: 'black',
    padding: 10,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
  },
  restxt: {
    color: 'white',
  },
});

export default Future;
