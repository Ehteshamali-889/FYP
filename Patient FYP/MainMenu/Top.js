import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { Button,IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
function Top(props) {
  const navigation = useNavigation();
  return (
    <View>
      <View style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'row' }}>
        <View style={styles.iconitem}>
          <Button>
            <IconButton
              mode="contained"
              icon="account-circle"
              color="#fff"
              size={50}
              onPress={() => navigation.navigate('ViewProfile')}
            />
          </Button>
          {/* <IconButton
            mode="contained"
            icon="account-circle"
            color="#fff"
            size={50}
            onPress={() => navigation.navigate('ViewProfile')}
          /> */}
        </View>
        <View style={styles.iconitem}>
          <Button>
            <IconButton
              mode="contained"
              icon="comment-plus"
              color="#fff"
              size={50}
              onPress={() => navigation.navigate('Chat')}
            />
          </Button>
          {/* <IconButton
            mode="contained"
            icon="comment-plus"
            color="#fff"
            size={50}
            onPress={() => console.log('Pressed')}
          /> */}
        </View>
        <View style={styles.iconitem}>
          <Button onPress={() => navigation.navigate('Add')}>
            <IconButton
              mode="contained"
              icon="shield-search"
              color="#fff"
              size={50}
              onPress={() => navigation.navigate('Search')}
            />
          </Button>
          {/* <IconButton
            mode="contained"
            icon="shield-search"
            color="#fff"
            size={50}
            onPress={() => console.log('Pressed')}
          /> */}
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

export default Top;
