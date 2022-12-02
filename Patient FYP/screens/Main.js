import React from 'react';
import { View, StyleSheet, Text, Image,ScrollView } from 'react-native';

function Main(props) {
  return (
    <ScrollView style={styles.container} showsHorizontalScrollIndicator={false}>
      <View style={styles.mainbox}>
        <View style={styles.innerbox}>
          <Image source={require('../assets/img/calendar.png')} style={{ width: 128, height: 128 }} />
          <Text style={styles.maintext} onPress={() => navigation.navigate('SignUp')}>View Appointments</Text>
        </View>
        <View style={styles.innerbox}>
          <Image source={require('../assets/img/nurse.png')} style={{ width: 128, height: 128 }} />
          <Text style={styles.maintext}>Find Doctor</Text>
        </View>
      </View>
      <View style={styles.mainbox}>
        <View style={styles.innerbox}>
          <Image source={require('../assets/img/user.png')} style={{ width: 128, height: 128 }} />
          <Text style={styles.maintext}>Profile</Text>
        </View>
        <View style={styles.innerbox}>
          <Image source={require('../assets/img/coin.png')} style={{ width: 128, height: 128 }} />
          <Text style={styles.maintext}>Payment</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {},
  mainbox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 40,
    marginTop: 12,
  },
  innerbox: {
    display:"flex",
    gap:20,
    margin: 30,
    padding: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  maintext:{
    fontWeight:"bold",
    fontSize:18,
    textAlign:"center"
  }
});

export default Main;