import { useState,useEffect } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import axios from 'axios';
function Past(props) {
  const[data,setData]=useState([]);
  const [message, setMessage] = useState();
  const [messageType, setMessageType] = useState(true);
   const [namedoctor, setNameDoctor] = useState('');
   const [date, setDate] = useState('');
   const [time, setTime] = useState('');
   const [description, setDescription] = useState('');
  useEffect(()=>{
    axios
      .get('http://localhost:3010/appointment/pastappointments')
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        const result = res.data;
        const { name, date, time, description } = result;
        // setNameDoctor(name);
        // setDate(date);
        // setTime(time);
        // setDescription(description);
      })
      .catch((err) => console.log(err));
  },[])
  
  const arr=data.map((data,index)=>{
    return (
      <View style={styles.singledoc}>
        <View style={styles.top}>
          <Image source={require('../assets/img/doctor.png')} style={{ width: 128, height: 128 }} />
          <View>
            <Text style={styles.dochead}>{data.namedoctor}</Text>
            <Text style={styles.docdetail}>{data.description}</Text>
            <Text style={styles.completed}>Completed</Text>
          </View>
          <View>
            <Text style={styles.date}>{data.date}</Text>
            <Text style={styles.time}>{data.time}</Text>
          </View>
        </View>
      </View>
    );
  })
  return (
    <View style={styles.container}>
      {arr}
      {/* <View style={styles.singledoc}>
        <View style={styles.top}>
          <Image source={require('../assets/img/doctor.png')} style={{ width: 128, height: 128 }} />
          <View>
            <Text style={styles.dochead}>{docname}</Text>
            <Text style={styles.docdetail}>{docemail}</Text>
            <Text style={styles.completed}>{docpassword}</Text>
          </View>
          <View>
            <Text style={styles.date}>Date</Text>
            <Text style={styles.time}>Time</Text>
          </View>
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
  },
  singledoc: {
    margin:10,
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
});

export default Past;
