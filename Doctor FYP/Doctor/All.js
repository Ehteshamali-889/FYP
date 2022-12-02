import React,{useState,useEffect} from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-web';
import { Button,IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
function All(props) {
  const navigation = useNavigation();
  const[data,setData]=useState([]);
  useEffect(()=>{
    axios
      .get('http://localhost:3010/doctor/alldoctor')
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        const result = res.data;
        const { _id,name, speciality, experience } = result;
      
      })
      .catch((err) => console.log(err));
  },[])

  const arr=data.map((data,index)=>{
    return (
      <View key={index} style={styles.container}>
      <View style={styles.singledoc}>
        <View style={styles.top}>
          <Image source={require('../assets/img/doctor.png')} style={{ width: 128, height: 128 }} />
          <View>
            <Text style={styles.dochead}>{data.name}</Text>
            <Text style={styles.docdetail}>{data.speciality}</Text>
          </View>
        </View>
        <View style={styles.bottom}>
          {/* <TouchableOpacity style={styles.resbtn}>
            <Text style={styles.restxt}>Read More</Text>
          </TouchableOpacity> */}
          <Button mode="contained" onPress={() =>  navigation.navigate('ViewSingle', {
            myid: `${data._id}`,
          })} style={{margin:10,marginBottom:20}}>
                    Read More
          </Button>
          <Button mode="contained" onPress={() => navigation.navigate('Add')} style={{margin:10,marginBottom:20}}>
                    Book Appointment
          </Button>
        </View>
      </View>
    </View>
      
    );
  })
  
      
  return (
    // <View style={styles.container}>
    //   <View style={styles.singledoc}>
    //     <View style={styles.top}>
    //       <Image source={require('../assets/img/doctor.png')} style={{ width: 128, height: 128 }} />
    //       <View>
    //         <Text style={styles.dochead}>Dr. John Doe</Text>
    //         <Text style={styles.docdetail}>Sepecialization</Text>
    //       </View>
    //     </View>
    //     <View style={styles.bottom}>
    //       {/* <TouchableOpacity style={styles.resbtn}>
    //         <Text style={styles.restxt}>Read More</Text>
    //       </TouchableOpacity> */}
    //       <Button mode="contained" onPress={() => navigation.navigate('ViewSingle')} style={{margin:10,marginBottom:20}}>
    //                 Read More
    //       </Button>
    //       <Button mode="contained" onPress={() => navigation.navigate('Add')} style={{margin:10,marginBottom:20}}>
    //                 Book Appointment
    //       </Button>
    //     </View>
    //   </View>
    // </View>
    <View>
      {arr}
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

export default All;
