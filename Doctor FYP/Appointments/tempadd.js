import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Platform, Modal, Pressable } from 'react-native';
// import DateTimePicker from '@react-native-community/datetimepicker';
import DatePicker from 'react-native-neat-date-picker';
import { TimePickerModal } from 'react-native-paper-dates';
import { TextInput, Portal, Text, Button, Provider } from 'react-native-paper';
import axios from 'axios';

// import TimePicker from 'react-native-simple-time-picker';
function Add({ route, navigation }) {
  const [modalVisible, setModalVisible] = useState(false);

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  today = yyyy + '/' + mm + '/' + dd;
  const [date, setDate] = useState(today);
  var today = new Date(),
    currenttime = today.getHours() + ':' + today.getMinutes();
  // console.log("currenttime",currenttime)
  const [time, setTime] = useState(currenttime);
  // console.log("time",time)
  var FirstKey;
  var secondKey;
  const [visible, setVisible] = React.useState(false);
  const [datevisible, setDateVisible] = useState(false);
  const showModal = () => setDateVisible(true);
  const hideModal = () => setDateVisible(false);
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '400',
    height: '400',
    padding: '25',
  };
  const [doctorname, setDoctorName] = useState('');
  const [description, setDescription] = useState('');
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
      var newtime = FirstKey + ':' + secondKey;
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
  };

  return (
    <View style={styles.container}>
      <Text>Add Appointment</Text>
      <View style={styles.parent}>
        <TextInput
          mode="outlined"
          value={doctorname}
          placeholder="Enter Doctor Name"
          onChange={(e) => setDoctorName(e.target.value)}
        />
        <TextInput
          value={description}
          mode="outlined"
          placeholder="Provide Short Description"
          onChange={(e) => setDescription(e.target.value)}
        />
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
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
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
                current="2020-07-13"
                selected="2020-07-23"
                mode="calendar"
                minuteInterval={30}
                style={styles.mybox}
              />
              <Pressable style={[styles.button, styles.buttonClose]} onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable style={[styles.button, styles.buttonOpen]} onPress={() => setModalVisible(true)}>
          <Text style={styles.textStyle}>Show Modal</Text>
        </Pressable>
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
        <Button onPress={() => setVisible(true)}>Pick time</Button>
      </View>
      <TouchableOpacity onPress={() => postUser()} style={styles.mybtn}>
        <Text style={styles.mtxt}>Set Appointment</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    width: 300,
    height: 300,
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
