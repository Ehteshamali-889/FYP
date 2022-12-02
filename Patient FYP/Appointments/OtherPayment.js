import React,{useState} from 'react';
import { View, StyleSheet, Image, Text, Alert, TouchableHighlight } from 'react-native';
import { Button, IconButton, Avatar,TextInput } from 'react-native-paper';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

import { useNavigation } from '@react-navigation/native';

import Toast from 'react-native-toast-message';

import axios from 'axios';

const OtherPayment = ({route}) => {
  const navigation = useNavigation();
  const myaid=route.params.aid;
  console.log('Appointment',myaid);
  const mypatientid=route.params.pid;
  console.log('Patient',mypatientid);
  const myamount=route.params.amount;
  console.log('Amount',myamount)
  const mydoctor=route.params.doctorid;
  console.log('Doctor',mydoctor)

    const [paytype, setPayType] = useState("");
    const [phonenumber, setPhoneNumber] = useState("");
    const [accountholder, setAccountHolder] = useState("");
    const [Pic,setPic]=useState('');
    const uploadImage=()=>{
        let options={
            mediaType:'photo',
            quality:1,
            includeBase64:true
        }
        launchImageLibrary(options,response=>{
            if ( response.didCancel ) {
             Alert.alert('Cancelled image selection');
            } 
            else if ( response.errorCode == 'permission' ) {
             Alert.alert( ' permission not satisfied ' ) ;
            } else if ( response.errorCode == ' others ' ) {
            Alert.alert( response.errorMessage ) ;
            } else if ( response.assets [ 0 ] .filesize > 2097152 ) {
            Alert.alert ('Maximum image size exceeded Please choose image under 2 MB' ,[ { text : ' OK ' } ] ,
            ) ;
            } else {
            setPic ( response.assets [ 0 ] .base64 ) ;
            }
        })
    }
    const removeImage=()=>{
        setPic('');
      }
    // const addappointment=()=>{
    //   console.log("Added Appointment")
    // }

    const addappointment = async() => {
      // console.log("Email:"+validate(email));
      // console.log("Length:"+checklength(password));
      console.log("Added Appointment")

      axios.all([
        axios.post('http://localhost:3010/payment/addPayment', {
          paidby:mypatientid,
          paidto:mydoctor,
          name:accountholder,
          phonenumber:phonenumber,
          type:paytype,
          amount:myamount,
        }), 
        axios.patch(`http://localhost:3010/appoinment/updateuser/${myaid}`, {
          "paid":"yes"
        })
      ])
      .then(axios.spread((data1, data2) => {
        // output of req.
        console.log('data1', data1, 'data2', data2)
      }));

      Toast.show({
        type: 'success',
        text1: 'Successfully Paid'
      });
      setPayType('');
      setPhoneNumber('');
      setAccountHolder('');
      // axios({
      //   method: 'POST',
      //   url: 'http://localhost:3010/payment/addPayment',
      //   data: {
          // paidby:mypatientid,
          // paidto:mydoctor,
          // name:accountholder,
          // phonenumber:phonenumber,
          // type:paytype,
          // amount:myamount,
      //   },
      //   headers: {
      //     Accept: 'application/json',
      //     'Content-Type': 'application/json',
      //   },
      // })
      //   .then(function (response) {
      //     console.log('response', JSON.stringify(response.data));
          
      //   })
      //   .catch(function (error) {
      //     console.log('error', error);
      //   });
      //   const response = await axios.patch(
      //     "http://localhost:3010/payment/updateuser/"+mypatientid
      // );
      // console.log('response',response)
        // axios({
        //   method: 'PATCH',
        //   url: 'http://localhost:3010/payment/updateuser/'+mypatientid,
        //   data: {
        //     paid:'yes'
        //   },
        //   headers: {
        //     Accept: 'application/json',
        //     'Content-Type': 'application/json',
        //   },
        // })
        //   .then(function (response) {
        //     console.log('response', JSON.stringify(response.data));
            
        //   })
        //   .catch(function (error) {
        //     console.log('error', error);
        //   });
  
        


        // var bodyFormData = new FormData();
        // bodyFormData.append('testimage', Pic);
        // axios({
        //   method: 'POST',
        //   url: 'http://localhost:3010/payment/uploadimg',
        //   data: {
        //     picname:"image1",
        //     image:bodyFormData
        //   },
        //   headers: { "Content-Type": "multipart/form-data" },
        // })
        //   .then(function (response) {
        //     console.log('response', JSON.stringify(response.data));
            
        //   })
        //   .catch(function (error) {
        //     console.log('error', error);
        //   });

        
        // Toast.show({
        //   type: 'success',
        //   text1: 'Successfully Added Your Appointment'
        // });
        // setOpen(true);
        // setDescription('');
    };
    // const onSubmit=()=>{
    //   const formData=new FormData()
    //     formData.append('testimage',Pic);
    //     axios.post("http://localhost:3010/payment/uploadimg",formData,{
    //       picname:"image1",
    //       img:Pic
    //     }).then(res=>{
    //       console.log(res)
    //     })
    // }

  return (
    <View style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:30}}>
        <Text style={{fontSize:32,fontWeight:'bold'}}>Other Payment</Text>
        <TextInput
        mode='outlined'
        label="Payment Method Type"
        placeholder="Like Easypaisa,JazzCash and any Other"
        value={paytype}
        onChangeText={paytype => setPayType(paytype)}
        style={{width:'30%'}}
        />
        <TextInput
        mode='outlined'
        label="Phone Number"
        placeholder="+92 316 9988 777"
        value={phonenumber}
        onChangeText={phonenumber => setPhoneNumber(phonenumber)}
        style={{width:'30%'}}
        />
        <TextInput
        mode='outlined'
        label="Account Title"
        placeholder="Ehtesham Ali"
        value={accountholder}
        onChangeText={accountholder => setAccountHolder(accountholder)}
        style={{width:'30%'}}
        />
        {/* <View style={styles.centerContent}>
        <TouchableHighlight onPress={() => alert('pressed')} underlayColor="rgba ( 0,0,0,0 )">
          <Avatar.Image size={250} source={{ uri: 'data:image/png;base64,' + Pic }} />
        </TouchableHighlight>
      </View> */}
      
      {/* <View style={[styles.centerContent,{marginTop:25,flexDirection:'row'}]}>
        <Button mode="contained" onPress={() => uploadImage()}>
          Upload Image
        </Button>
        <Button mode="outlined"
        style={{marginLeft:20}}
        onPress={() => removeImage()}>
          Remove Image
        </Button>
      </View> */}
      <Button style={{marginTop:30}} icon="plus-circle" mode="contained" onPress={() => addappointment()}>
          Submit
      </Button>
      <Toast ref={(ref)=>{Toast.setRef(ref)}}  />
    </View>
  )
}

const styles = StyleSheet.create({
    centerContent:{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      marginTop:30,
    }
  });

export default OtherPayment