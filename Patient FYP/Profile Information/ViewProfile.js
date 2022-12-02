import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { Button, IconButton } from 'react-native-paper';
import ViewTop from './ViewTop';

function ViewProfile() {
  return (
    <View>
      <ViewTop />
      
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

export default ViewProfile;
