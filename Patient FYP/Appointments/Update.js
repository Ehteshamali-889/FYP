import React from 'react';
import { View, StyleSheet, TouchableOpacity, TextInput,Text } from 'react-native';

function Update({ route,navigation }) {
    const { id,name, email } = route.params;
    function updatedata(id) {
      axios
        .put('http://localhost:3000/doctor/editappointment/' + id + '/' + name + '/' + email)
        .then((res) => {
          console.log(res.data);
          console.log(id);
        })
        .catch((err) => console.log(err));
    }
  return (
    <View style={styles.container}>
      <Text></Text>
      <View>
        <TextInput value={name} placeholder="Date" />
        <TextInput value={email} placeholder="Time" />
        <TouchableOpacity style={styles.cancelbtn}>
          <Text style={styles.restxt} onPress={() => showAlert(doctorId)}>
            Update Appointment
          </Text>
        </TouchableOpacity>
      </View>
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
  cancelbtn: {
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

export default Update;