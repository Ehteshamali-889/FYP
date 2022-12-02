import React from 'react'
import { View, StyleSheet, Text, Image,ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button,IconButton } from 'react-native-paper';

const Nav = () => {
    const navigation = useNavigation();
  return (
    <View>
        <View style={styles.firstbox}>
            <View style={styles.subbox}>
            <Image source={require('../assets/img/calendar.png')} style={{ width: 128, height: 128 }} />
            <Button mode='outlined' style={styles.maintext} onPress={() => navigation.navigate('AllAppointments')}>View Appointments</Button>
            </View>

            <View style={styles.subbox}>
            <Image source={require('../assets/img/nurse.png')} style={{ width: 128, height: 128 }} />
            <Button mode='outlined' style={styles.maintext} onPress={() => navigation.navigate('AllDoctors')}>View Doctors</Button>
            </View>
            
        </View>
        <View style={styles.secondbox}>
            <View style={styles.subbox}>
            <Image source={require('../assets/img/user.png')} style={{ width: 128, height: 128 }} />
            <Button mode='outlined' style={styles.maintext} onPress={() => navigation.navigate('ViewTop')}>View Profile Info</Button>
            </View>

            <View style={styles.subbox}>
            <Image source={require('../assets/img/coin.png')} style={{ width: 128, height: 128 }} />
            <Button mode='outlined' style={styles.maintext} onPress={() => navigation.navigate('AllPayments')}>View Payments Info</Button>
            </View>
            
        </View>

    </View>
    
  )
}

const styles = StyleSheet.create({
    firstbox:{
        display:'flex',justifyContent:'center',alignItems:'center',height:'50vh',flexDirection:'row',gap:20
    },
    secondbox:{
        display:'flex',justifyContent:'center',alignItems:'center',height:'20vh',flexDirection:'row',gap:20
    },
    subbox:{
        justifyContent:'center',backgroundColor:'white',alignItems:'center',padding:20,width:'20%'
    },
    maintext:{
      fontWeight:"bold",
      fontSize:18,
      textAlign:"center",
      marginTop:20
    }
  });
  
export default Nav