import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { Button, IconButton } from 'react-native-paper';

function Payment(props) {
  return (
    <View>
      <View style={{ marginTop: 50 }}>
        <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', gap: 650 }}>
            <View>
              <h1>Payment</h1>
            </View>
            <View>
              <Button icon="plus" mode="contained" onPress={() => console.log('Pressed')}>
                Add New Payment Method
              </Button>
            </View>
          </View>

          <View
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
              gap: 300,
            }}
          >
            <View style={{ backgroundColor: 'white', padding: 25, textAlign: 'center' }}>
              <IconButton
                mode="contained"
                icon="alert-rhombus"
                color="#000"
                size={50}
                onPress={() => console.log('Pressed')}
              />
              <Text>Number</Text>
              <Text>Upcoming</Text>
            </View>
            <View style={{ backgroundColor: 'white', padding: 25, textAlign: 'center' }}>
              <IconButton
                mode="contained"
                icon="bookmark-check-outline"
                color="#000"
                size={50}
                onPress={() => console.log('Pressed')}
              />
              <Text>Number</Text>
              <Text>Completed</Text>
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

export default Payment;
