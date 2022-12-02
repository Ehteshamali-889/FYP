import React,{useState,useMemo} from 'react';

import Login from './screens/Login';
import SignUp from './screens/Signup';
import Welcome from './screens/Welcome';

import RootStack from './navigators/RootStack';


export default function App() {
  
  return (
    // <Login />
    // <SignUp />
    // <Welcome />
    
        <RootStack />
    
  );
}
