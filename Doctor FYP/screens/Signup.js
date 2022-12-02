import { useState,useContext } from 'react';
import Yup from 'yup';
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
import axios from 'axios';

import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons';

import { View, TouchableOpacit, ActivityIndicator } from 'react-native';
// import { UserContext } from './UserContext';

const { brand, darkLight, primary } = Colors;

const SignUp = ({ navigation }) => {
  // const { user, setUser } = useContext(UserContext);
  const [hidePassword, setHidePassword] = useState(true);
  const [hideRePassword, setHideRePassword] = useState(true);
  const [message, setMessage] = useState();
  const [messageType, setMessageType] = useState(true);

  const handleSignUp = (credentials, setSubmitting) => {
    handleMessage(null);
    const url = 'http://localhost:3010/doctor/signup';
    axios
      .post(url, credentials)
      .then((response) => {
        const result = response.data;
        console.log("result",result)
        const { message, status, data } = result;
        console.log('data',data);

        // set user id use context
        console.log("id",data._id)
        localStorage.setItem('doctorid', data._id,24 * 60 * 60 * 1000);
        console.log('local id', localStorage.getItem('doctorid'));
        // setUser(data._id)

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
        handleMessage("Error",error);
      });
  };
  const handleMessage = (message, type = 'FAILED') => {
    setMessage(message);
    setMessageType(type);
  };
  const validate = (values) => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!regex.test(values.email)) {
      errors.email = 'Invalid Email';
    }
    if (!values.fullName) {
      errors.fullName = 'Full Name is required';
    } else if (values.fullName.length < 6) {
      errors.fullName = 'Full Name too short.Minimum Length is 6.';
    }

    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 8) {
      errors.password = 'Password too short.Minimum Length is 6.';
    }

    if (!values.confirmPassword) {
      errors.confirmPassword = 'Confirm Password is required';
    } else if (values.confirmPassword.length < 8) {
      errors.confirmPassword = 'Confirm Password too short';
    }
    if(values.password!=values.confirmPassword){
      errors.confirmPassword = 'Confirm Password must match Password';
    }

    return errors;
  };
  
  return (
    <StyledContainer>
      <StatusBar style="dark" />
      <InnerContainer>
        <PageTitle>Doctor App</PageTitle>
        <SubTitle>Account SignUp</SubTitle>

        <Formik
          initialValues={{ fullName: '', email: '', password: '', confirmPassword: '' }}
          validate={validate}
          onSubmit={(values, { setSubmitting }) => {
            if (values.fullName == '' && values.email == '' && values.password == '' && values.confirmPassword == '') {
              handleMessage('Please fill all the fields');
              setSubmitting(false);
            } 
            else {
              handleSignUp(values, setSubmitting);
            }
            // if (values.fullName == '') {
            //   handleMessage('Please provide the Full Name For Example Ehtesham Ali');
            // }
            // if (values.email == '') {
            //   handleMessage('Please provide the email For Example user@gmail.com');
            // }
            // if (values.password == '') {
            //   handleMessage('Please provide the password');
            // }
            // if (values.confirmPassword == '') {
            //   handleMessage('Please provide the confirm password');
            // }
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values, isSubmitting, errors, touched }) => (
            <StyledFormArea>
              <MyTextInput
                label="Full Name"
                icon="person"
                placeholder="John Smith"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('fullName')}
                onBlur={handleBlur('fullName')}
                value={values.fullName}
              />
              {errors.fullName && touched.fullName && (
                <span style={{ color: 'red', fontSize: '16', marginTop: '5' }}>{errors.fullName}</span>
              )}
              <MyTextInput
                label="Email Address"
                icon="mail"
                placeholder="andyj@gmail.com"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
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
              <MyTextInput
                label="Confirm Password"
                icon="lock"
                placeholder="***************"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                value={values.confirmPassword}
                secureTextEntry={hideRePassword}
                isPassword={true}
                hidePassword={hideRePassword}
                setHidePassword={setHideRePassword}
              />
              {errors.confirmPassword && touched.confirmPassword && (
                <span style={{ color: 'red', fontSize: '16', marginTop: '5' }}>{errors.confirmPassword}</span>
              )}
              <MsgBox type={messageType}>{message}</MsgBox>
              {!isSubmitting && (
                <StyledButton onPress={handleSubmit}>
                  <ButtonText>SignUp</ButtonText>
                </StyledButton>
              )}
              {isSubmitting && (
                <StyledButton disabled={true}>
                  <ActivityIndicator size="large" color={primary} />
                </StyledButton>
              )}
              {/* <StyledButton onPress={handleSubmit}>
                <ButtonText>SignUp</ButtonText>
              </StyledButton> */}
              <Line />

              <ExtraView>
                <ExtraText>Already have an account?</ExtraText>
                <TextLink onPress={() => navigation.navigate('Login')}>
                  <TextLinkContent>Login</TextLinkContent>
                </TextLink>
              </ExtraView>
            </StyledFormArea>
          )}
        </Formik>
      </InnerContainer>
    </StyledContainer>
  );
};
const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, isDate, showDatePicker, ...props }) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={brand} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      {!isDate && <StyledTextInput {...props} />}
      {isDate && (
        <TouchableOpacity onPress={showDatePicker}>
          <StyledTextInput {...props} />
        </TouchableOpacity>
      )}
      {isPassword && (
        <RightIcon onPress={() => setHidePassword(!hidePassword)}>
          <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight} />
        </RightIcon>
      )}
    </View>
  );
};

export default SignUp;
