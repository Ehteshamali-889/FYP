import React, { useContext, useState,useRef } from 'react';
import { View, StyleSheet, TouchableOpacity, Platform, Modal,Pressable } from 'react-native';
// import DateTimePicker from '@react-native-community/datetimepicker';
import DatePicker from 'react-native-modern-datepicker';
import { TimePickerModal } from 'react-native-paper-dates';
import { TextInput, Portal, Text, Button, Provider } from 'react-native-paper';
import axios from 'axios';
import Toast from 'react-native-toast-message';
import CustomPayModal from './CustomPayModal';

import Alert from '@mui/material/Alert';

// import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
// import { UserContext } from '../screens/UserContext';

// import TimePicker from 'react-native-simple-time-picker';
function Add({ route, navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const doctorid=route.params.docId;
  const mydoctorname=route.params.docName;
  const myprice=route.params.price;
  console.log("Price",myprice)
  const [open, setOpen] = React.useState(false);
  const [show, setShow] = useState(false);
  // get use context

  // const { user } = useContext(UserContext);
  console.log('local id', localStorage.getItem('doctorid'));

  const currentid=localStorage.getItem('doctorid');
  // console.log("Id",user)
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  today =yyyy +'/'+mm+'/'+dd;
  const [date, setDate] = useState(today);
  var today = new Date(),
  currenttime = today.getHours() + ':' + today.getMinutes();
  // console.log("currenttime",currenttime)
  const [time,setTime]=useState(currenttime)
  // console.log("time",time)
  var FirstKey;
  var secondKey;
  const [visible, setVisible] = React.useState(false);
  const [datevisible, setDateVisible] = useState(false);
  const showModal = () => setDateVisible(true);
  const hideModal = () => setDateVisible(false);
  const containerStyle = { display:"flex",justifyContent:'center',alignItems:"center",width:'400',height:'400',padding:'25'
};
  const [doctorname,setDoctorName]=useState(mydoctorname);
  const [description,setDescription]=useState('');
  const onDismiss = React.useCallback(() => {
    setVisible(false);
  }, [setVisible]);

  const onConfirm = React.useCallback(
    ({ hours, minutes }) => {
      setVisible(false);
      // console.log({ hours, minutes });
      FirstKey = Object.values({ hours, minutes })[0];
      // console.log('Hours', FirstKey);
      secondKey = Object.values({ hours, minutes })[1];
      // console.log("Minutes",secondKey)
      var newtime=FirstKey+":"+secondKey
      setTime(newtime);
    },
    [setVisible],
  );
  const postUser = () => {
    // console.log("Email:"+validate(email));
    // console.log("Length:"+checklength(password));

    axios({
      method: 'POST',
      url: 'http://localhost:3010/appointment/addAppointment',
      data: {
        namedoctor: doctorname,
        date: date,
        time: time,
        description: description,
        completed:'no',
        patient:patientid,
        doctorid:doctorid,
        price:myprice,
        paid:'no'
      },
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(function (response) {
        console.log('response', JSON.stringify(response.data));
        
      })
      .catch(function (error) {
        console.log('error', error);
      });
      // Toast.show({
      //   type: 'success',
      //   text1: 'Successfully Added Your Appointment'
      // });
      setOpen(true);
      setDescription('');
  };

  const paylater=()=>{
    setOpen(false);
    setShow(true)
    debugger;
  }

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <View style={styles.container}>
      <Alert severity="error" style={{display:show?"block":"none"}}  >Your Payment is pending.You can access pending payments in Payment Section.</Alert>
      <h1 style={{ fontSize: '50', fontWeight: 'bold' }}>Add Appointment</h1>
      <View style={styles.parent}>
        <View style={{ margin: 20 }}>
          <TextInput
            mode="outlined"
            value={doctorname}
            placeholder="Enter Doctor Name"
            onChange={(e) => setDoctorName(e.target.value)}
            editable = {false}
          />
        </View>
        <View style={{ margin: 20 }}>
          <TextInput
            value={description}
            mode="outlined"
            placeholder="Provide Short Description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </View>
      </View>
      <View style={styles.parent}>
        {/* <DatePicker
          visible={datevisible}
          options={{
            backgroundColor: '#090C08',
            textHeaderColor: '#FFA25B',
            textDefaultColor: '#F6E7C1',
            selectedTextColor: '#fff',
            mainColor: '#F4722B',
            textSecondaryColor: '#D6C7A1',
            borderColor: 'rgba(122, 146, 165, 0.1)',
          }}
          onDateChange={(selectedDate) => setDate(selectedDate)}
          current="2020-07-13"
          selected="2020-07-23"
          mode="calendar"
          minuteInterval={30}
          style={styles.mybox}
        /> */}
        {/* <Provider>
          <Portal>
            <Modal
              dismissable={true}
              visible={datevisible}
              onDismiss={hideModal}
              contentContainerStyle={containerStyle}
            >
              <Text>Hi</Text>
              
            </Modal>
          </Portal>
          <Button onPress={showModal}>Pick Date</Button>
        </Provider> */}
        {/* <View visible={modalVisible}> */}
        {modalVisible && (
          <>
            <View style={{ position: 'absolute', top: '100px', left: '0px', marginLeft: '-50px',zIndex:3 }}>
              <View style={styles.modalView}>
                <DatePicker
                  options={{
                    backgroundColor: '#090C08',
                    textHeaderColor: '#FFA25B',
                    textDefaultColor: '#F6E7C1',
                    selectedTextColor: '#fff',
                    mainColor: '#F4722B',
                    textSecondaryColor: '#D6C7A1',
                    borderColor: 'rgba(122, 146, 165, 0.1)',
                  }}
                  onDateChange={(selectedDate) => setDate(selectedDate)}
                  current="2022-10-10"
                  selected="2022-10-10"
                  mode="calendar"
                  minuteInterval={30}
                  style={styles.mybox}
                />
                {/* <Pressable style={[styles.button, styles.buttonClose]} onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.textStyle}>Hide Modal</Text>
                </Pressable> */}
                <Button icon="close" mode="contained" onPress={() => setModalVisible(!modalVisible)}>
                  Hide Modal
                </Button>
              </View>
            </View>
          </>
        )}
        {/* </View> */}
        {/* <Pressable style={[styles.button, styles.buttonOpen]} onPress={() => setModalVisible(true)}>
          <Text style={styles.textStyle}>Show Modal</Text>
        </Pressable> */}
        <View style={{ margin: 20 }}>
          <Button icon="calendar-month" mode="contained-tonal" onPress={() => setModalVisible(true)}>
            Pick Date
          </Button>
        </View>
        <View style={{ margin: 20 }}>
          <Button icon="clock-time-three-outline" mode="contained-tonal" onPress={() => setVisible(true)}>
            Pick Time
          </Button>
        </View>
        <TimePickerModal
          visible={visible}
          onDismiss={onDismiss}
          onConfirm={onConfirm}
          hours={12} // default: current hours
          minutes={14} // default: current minutes
          label="Select time" // optional, default 'Select time'
          cancelLabel="Cancel" // optional, default: 'Cancel'
          confirmLabel="Ok" // optional, default: 'Ok'
          animationType="fade" // optional, default is 'none'
          locale={'en'} // optional, default is automically detected by your system
        />
        {/* <Button icon="clock-time-three-outline" mode="contained-tonal" onPress={() => setVisible(true)}>
          Pick Time
        </Button> */}
      </View>
      {/* <TouchableOpacity onPress={() => postUser()} style={styles.mybtn}>
        <Text style={styles.mtxt}>Set Appointment</Text>
      </TouchableOpacity> */}
      <Button style={{zIndex:1}} icon="plus-thick" mode="contained" onPress={() => postUser()}>
        Set Appointment
      </Button>
      <Toast ref={(ref)=>{Toast.setRef(ref)}} style={{width:'500'}}  />
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Successfully Added Your Appointment. Want to Pay Now or Later
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onPress={paylater}>Pay Later</Button>
          <Button onPress={handleClose}>Pay Now</Button>
        </DialogActions>
      </Dialog>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    position:'relative'
  },

  parent: {
    width: '500',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  mybox: {
    width: 300,
    height: 300,
    margin: 20,
    borderRadius: 10,
  },
  centeredView: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // marginTop: 22,
    position:'absolute',
    top:50,
    right:'100px'
  },
  modalView: {
    width: 400,
    height: 450,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default Add;
