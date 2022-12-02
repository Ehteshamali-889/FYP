import React ,{ useState, useEffect } from 'react';
import { View, StyleSheet, Image, Text, Alert, TouchableOpacity } from 'react-native';
import { Button,IconButton } from 'react-native-paper';
import axios from 'axios';
// import Page from './404';
import Page from '../Appointments/404'

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';

import { useNavigation } from '@react-navigation/native';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';



const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

// import AwesomeAlert from 'react-native-awesome-alerts';
function CryptoList({ users,updateUsers}) {

  const navigation = useNavigation();
  const [open, setOpen] = React.useState(false);
  console.log('local id', localStorage.getItem('doctorid'));

    const currentid=localStorage.getItem('doctorid');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const deleteUserData = async (id) => {
    axios
      .delete('http://localhost:3010/appointment/removeappointment/' + id)
      .then((res) => {
        console.log(res.data);
        console.log(id);
      })
      .catch((err) => console.log(err));
    // await deletePatient(id);
    handleClose();
    // getAllUsers();
    const response = await axios.get(
      "http://localhost:3010/appointment/futuredoctorappointments/"+currentid
    );
    updateUsers(response.data);
    alert("Deleted")
    window.location.reload(); 
    // navigation.navigate('Home')
    // navigation.navigate('New')
  }

  
    
 

  const arr = users.map((data, index) => {
    var doctorId = data._id;
    return (
      
      <View key={index} style={{backgroundColor:'white',padding:10,margin:30}}>
        
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
        <Button mode='outlined' onPress={handleClickOpen}>Cancel Appointment</Button>

        <Dialog
                            open={open}
                            TransitionComponent={Transition}
                            keepMounted
                            onClose={handleClose}
                            aria-describedby="alert-dialog-slide-description"
                        >
                            <DialogTitle>{"Delete Patient"}</DialogTitle>
                            <DialogContent>
                            <DialogContentText id="alert-dialog-slide-description">
                                Do you confirm to delete Appointment record?
                            </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                            <Button onPress={handleClose}>Cancel</Button>
                            <Button onPress={() => deleteUserData(data._id)}>Confirm</Button>
                            </DialogActions>
                        </Dialog>

                    <Button mode='outlined' onPress={() => {

                      navigation.navigate('EditAppointment', {
                        id:data._id,
                        name: data.namedoctor,
                        description: data.description,
                        date:data.date,
                        time:data.time
                      });
                      }}>Reschedule Appointment</Button>
        </View>
        
      </View>
    );
  });
  return (
    <View style={styles.container}>
      <Text style={{fontWeight:'bold',fontSize:32,marginTop:50}}>Future Appointments</Text>
      {arr.length==0?(<Page />) :(arr)}
      
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
  
  top: {
    flexDirection: 'row',
    padding: 20,
    gap: 40,
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

export default CryptoList;
