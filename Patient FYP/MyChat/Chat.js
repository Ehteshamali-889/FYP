import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { Button, IconButton } from 'react-native-paper';

function Chat() {
  return (
    <View>
      <h1>Chat</h1>
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

export default Chat;
