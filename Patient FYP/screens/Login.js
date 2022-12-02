import { useContext, useState } from 'react';
import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  PageTitle,
  SubTitle,
  StyledFormArea,
  LeftIcon,
  StyledInputLabel,
  StyledTextInput,
  RightIcon,
  Colors,
  StyledButton,
  ButtonText,
  MsgBox,
  Line,
  ExtraView,
  ExtraText,
  TextLink,
  TextLinkContent,
} from './../components/styles';
import { StatusBar } from 'expo-status-bar';

import { Formik } from 'formik';

import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons';

import { View, ActivityIndicator } from 'react-native';

const { brand, darkLight, primary } = Colors;

import axios from 'axios';
// import { UserContext } from './UserContext';

const Login = ({ navigation }) => {
  // const { user, setUser } = useContext(UserContext);
  const [hidePassword, setHidePassword] = useState(true);
  const [message, setMessage] = useState();
  const [messageType, setMessageType] = useState(true);
  const handleLogin = (credentials, setSubmitting) => {
    handleMessage(null);
    const url = 'http://localhost:3010/patient/signin';
    axios
      .post(url, credentials)
      .then((response) => {
        const result = response.data;
        const { message, status, data } = result;
        if(data){
          console.log('data', data);
          console.log('data id',data[0]._id);
          // const temp=data[0]._id
          // setUser(temp)
          // debugger;
          // console.log("user",user)
          localStorage.setItem('patientid', data[0]._id,24 * 60 * 60 * 1000);
          console.log('local id', localStorage.getItem('patientid'));
        }
        
        if (status !== 'SUCCESS') {
          handleMessage(message, status);
        } else {
          navigation.navigate('Nav', { ...data[0] });
        }
        // navigation.navigate('Welcome', { ...data[0] });
        setSubmitting(false);
      })
      .catch((error) => {
        console.log(error);
        setSubmitting(false);
        handleMessage('An error occured.Check your network and try again.');
      });
  };
  const handleMessage = (message, type = 'FAILED') => {
    setMessage(message);
    setMessageType(type);
  };
  // const handleGoogleSignin=()=>{
  //   const config = { clientId:`771470911317 - hpt2kaid56shk5fe6eq8os4ldkjudkan.apps.googleusercontent.com` };
  // }
  const validate = (values) => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!regex.test(values.email)) {
      errors.email = 'Invalid Email';
    }
    

    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 6) {
      errors.password = 'Password too short.Minimum Length is 6.';
    }


    return errors;
  };

  return (
      <StyledContainer>
        <StatusBar style="dark" />
        <InnerContainer>
          <PageLogo resizeMode="cover" source={require('./../assets/img/hand.png')} />
          <PageTitle>Patient App</PageTitle>
          <SubTitle>Account Login</SubTitle>
          <Formik
            initialValues={{ email: '', password: '' }}
            validate={validate}
            onSubmit={(values, { setSubmitting }) => {
              if (values.email == '' || values.password == '') {
                handleMessage('Please fill all the fields');
                setSubmitting(false);
              } else {
                handleLogin(values, setSubmitting);
              }
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values, isSubmitting, errors, touched }) => (
              <StyledFormArea>
                <MyTextInput
                  label="Email Address"
                  icon="mail"
                  placeholder="andyj@gmail.com"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  keyboardType="email-address"
                />
                {errors.email && touched.email && (
                  <span style={{ color: 'red', fontSize: '16', marginTop: '5' }}>{errors.email}</span>
                )}
                <MyTextInput
                  label="Password"
                  icon="lock"
                  placeholder="***************"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry={hidePassword}
                  isPassword={true}
                  hidePassword={hidePassword}
                  setHidePassword={setHidePassword}
                />
                {errors.password && touched.password && (
                  <span style={{ color: 'red', fontSize: '16', marginTop: '5' }}>{errors.password}</span>
                )}
                <MsgBox type={messageType}>{message}</MsgBox>
                {!isSubmitting && (
                  <StyledButton onPress={handleSubmit}>
                    <ButtonText>Login</ButtonText>
                  </StyledButton>
                )}
                {isSubmitting && (
                  <StyledButton disabled={true}>
                    <ActivityIndicator size="large" color={primary} />
                  </StyledButton>
                )}
                <Line />
                {/* <StyledButton google={true} onPress={handleSubmit}>
                  <Fontisto name="google" color={primary} size={25} />
                  <ButtonText google={true}>Sign in with Google</ButtonText>
                </StyledButton> */}
                <ExtraView>
                  <ExtraText>Donot have an account already?</ExtraText>
                  <TextLink onPress={() => navigation.navigate('SignUp')}>
                    <TextLinkContent>SignUp</TextLinkContent>
                  </TextLink>
                </ExtraView>
              </StyledFormArea>
            )}
          </Formik>
        </InnerContainer>
      </StyledContainer>
  );
};
const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, ...props }) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={brand} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props} />
      {isPassword && (
        <RightIcon onPress={() => setHidePassword(!hidePassword)}>
          <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight} />
        </RightIcon>
      )}
    </View>
  );
};

export default Login;
