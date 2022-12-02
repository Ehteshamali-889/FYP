import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { Button, IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

function AllPayments() {
  const navigation = useNavigation();
  return (
    <View>
      <View style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center',flexDirection:'row' ,marginLeft:120,marginRight:120}}>
            <Text style={{fontSize:32,fontWeight:'bold'}}>Payments</Text>
            {/* <Button mode="contained" onPress={() => navigation.navigate('Add')} style={{margin:10,marginTop:20}}>
            Add New Appointment
            </Button> */}
        </View>
      <View style={{ marginTop: 50 }}>
        <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {/* <View style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', gap: 650 }}>
            <View>
              <Text style={{fontSize:32,fontWeight:'bold'}}>Appointments</Text>
            </View>
            <View>
              <Button icon="plus" mode="contained" onPress={() => navigation.navigate('Add')}>
                Add New Appointment
              </Button>
            </View>
          </View> */}

          <View
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
              gap: 300,
            }}
          >
            <View style={{ backgroundColor: 'white', padding: 25, display:'flex',justifyContent:'center',alignItems:'center' }}>
              <IconButton
                mode="contained"
                icon="alert-rhombus"
                color="#000"
                size={50}
              />
              {/* <Text>Number</Text> */}
              <Text>Not Paid</Text>
              <Button mode="outlined" onPress={() => navigation.navigate('ViewAllPayments')} style={{margin:10,marginTop:20}}>
                View All
              </Button>
            </View>
            <View style={{ backgroundColor: 'white', padding: 25, display:'flex',justifyContent:'center',alignItems:'center' }}>
              <IconButton
                mode="contained"
                icon="bookmark-check-outline"
                color="#000"
                size={50}
              />
              {/* <Text>Number</Text> */}
              <Text>Paid</Text>
              <Button mode="outlined" onPress={() => navigation.navigate('AllPaid')} style={{margin:10,marginTop:20}}>
                View All
              </Button>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  iconitem: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    width: '5%',
    borderRadius: 50,
  },
});

export default AllPayments;
