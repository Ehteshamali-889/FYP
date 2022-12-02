import React,{useState,useMemo} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Colors } from './../components/styles';

const { primary, tertiary } = Colors;

import Login from '../screens/Login';
import SignUp from '../screens/Signup';
import Welcome from '../screens/Welcome';
import Verification from '../screens/LinkVerification';
import Main from '../screens/Main';
import Past from '../Appointments/Past';
import Future from '../Appointments/Future';
import All from '../Doctor/All';
import Update from '../Appointments/Update';
import Add from '../Appointments/Add'
import Menu from '../MainMenu/Menu';
import ViewProfile from '../Profile Information/ViewProfile';
import Chat from '../MyChat/Chat';
import Search from '../Doctor/Search';
import EditProfile from '../Profile Information/EditProfile';
import Upload from '../UploadImage/upload';
import ViewSingle from '../Doctor/ViewSingle';
import PaymentAppointment from '../Appointments/PaymentAppointment';
import StripePayment from '../Appointments/StripePayment';
import OtherPayment from '../Appointments/OtherPayment';
import SendEmail from '../Appointments/Temp';
import Nav from '../screens/Nav';
import AllAppointments from '../MainMenu/All Appointments';
import Doctors from '../MainMenu/Doctors';
import { UserContext } from '../screens/UserContext';
import ViewTop from '../Profile Information/ViewTop';
import New from '../Appointments/New';
import Old from '../Appointments/Old';
import EditAppointment from '../Appointments/EditAppointment';
import ViewAllPayments from '../Payments/ViewAllPayments';
import Test from '../Appointments/Test';
import UploadPayment from '../Appointments/UploadPayment';
import AllPayments from '../Payments/AllPayments';
import PaymentList from '../Payments/PaymentList';
import AllDoctors from '../CustomDoctors/AllDoctors';
import AllPaid from '../PaidPayments/AllPaid';
const Stack = createNativeStackNavigator();

const RootStack = () => {
  // const [user, setUser] = useState('');

  // const value = useMemo(() => ({ user, setUser }), [user, setUser]);
  return (
    // <UserContext.Provider value={value}>
      <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerTintColor: tertiary,
          headerTransparent: true,
          headerTitle: '',
          headerLeftContainerStyle: {
            paddingLeft: 20,
          },
        }}
        initialRouteName="Login"
      >
        <Stack.Screen name="Upload" component={Upload} />
        <Stack.Screen
          name="Update"
          component={Update}
          screenOptions={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="AllPaid" component={AllPaid} />
        <Stack.Screen name="AllDoctors" component={AllDoctors} />
        <Stack.Screen name="PaymentList" component={PaymentList} />
        <Stack.Screen name="AllPayments" component={AllPayments} />
        <Stack.Screen name="UploadPayment" component={UploadPayment} />
        <Stack.Screen name="Test" component={Test} />
        <Stack.Screen name="ViewAllPayments" component={ViewAllPayments} />
        <Stack.Screen name="EditAppointment" component={EditAppointment} />
        <Stack.Screen name="Old" component={Old} />
        <Stack.Screen name="New" component={New} />
        <Stack.Screen name="ViewTop" component={ViewTop} />
        <Stack.Screen name="Doctors" component={Doctors} />
        <Stack.Screen name="AllAppointments" component={AllAppointments} />
        <Stack.Screen name="Nav" component={Nav} />
        <Stack.Screen name="SendEmail" component={SendEmail} />
        <Stack.Screen name="StripePayment" component={StripePayment} />
        <Stack.Screen name="OtherPayment" component={OtherPayment} />
        <Stack.Screen name="PaymentAppointment" component={PaymentAppointment} />
        <Stack.Screen name="ViewSingle" component={ViewSingle} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="ViewProfile" component={ViewProfile} />
        <Stack.Screen name="All" component={All} />
        <Stack.Screen name="Add" component={Add} />
        <Stack.Screen name="Future" component={Future} />
        <Stack.Screen name="Past" component={Past} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Verification" component={Verification} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Welcome" component={Welcome} />
      </Stack.Navigator>
    </NavigationContainer>
    // </UserContext.Provider>
    
  );
};
export default RootStack;
