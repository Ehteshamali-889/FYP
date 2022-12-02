import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import style from './Menu.css';
function TempMenu(props) {
  return (
    <View>
      {/* <View>
        {users.map((u, i) => {
          return (
            <View key={i} style={styles.user}>
              <Image style={styles.image} resizeMode="cover" source={u.avatar} />
              <Text style={styles.name}>{u.name}</Text>
            </View>
          );
        })}
      </View> */}
      {/* <View style={{ backgroundColor: 'white' }}> */}
      <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <View
          style={{
            marginTop: '50',
            width: '20%',
            backgroundColor: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image source={require('../assets/doctor.png')} style={{ width: 300, height: 300, borderRadius: '20' }} />
        </View>
        <View
          style={{
            marginTop: '50',
            width: '20%',
            backgroundColor: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text>Doctor</Text>
        </View>
      </View>
      {/* </View> */}
    </View>
  );
}

const styles = StyleSheet.create({});

export default TempMenu;
