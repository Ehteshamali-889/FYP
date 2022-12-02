import React from 'react'
import { View,Text } from 'react-native'
import { Button } from 'react-native-paper';

import Icon from 'react-native-vector-icons/Zocial';
import MyIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import { useNavigation } from '@react-navigation/native';
const PaymentAppointment= ({route}) => {
  const navigation = useNavigation();
  const myaid=route.params.aid;
  console.log('Appointment',myaid);
  const mypatientid=route.params.pid;
  console.log('Patient',mypatientid);
  const myamount=route.params.amount;
  console.log('Amount',myamount)
  const mydoctor=route.params.doctorid;
  console.log('Doctor',mydoctor)
  return (
    <View style={{marginTop:250}}>
        
        <View style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:'32px',fontWeight:'bold',marginBottom:30,marginTop:'-50px'}}>Choose Your Payment Method</Text>
          <Button style={{backgroundColor:'#000',color:'black',width:'20%'}} mode="contained" onPress={()=>navigation.navigate("StripePayment")}>
          <Icon style={{color:'white'}} name="stripe" size={30} color="blue" />
          <Text style={{fontSize:24,fontWeight:'bold'}}>Stripe</Text>
          </Button>
        </View>
        <Text style={{textAlign:'center',margin:30,fontSize:32}}> OR </Text>
        <View style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
          <Button style={{backgroundColor:'#000',color:'black',width:'20%'}} mode="contained" onPress={()=>navigation.navigate("OtherPayment",
          {
            aid:myaid,
            pid:mypatientid,
            amount:myamount,
            doctorid:mydoctor
          }
          )}>
          <MyIcon style={{color:'white',marginRight:5,paddingTop:5}} name="account-cash-outline" size={30} color="blue" />
          <Text style={{fontSize:24,fontWeight:'bold'}}>Other</Text>
          </Button>
        </View>
        
    </View>
  )
}

export default PaymentAppointment