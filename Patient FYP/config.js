// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCP4OaV5rpRgiArzjvytenqqB2k1ZCl_zM",
  authDomain: "imageupload-fyp.firebaseapp.com",
  projectId: "imageupload-fyp",
  storageBucket: "imageupload-fyp.appspot.com",
  messagingSenderId: "234465389530",
  appId: "1:234465389530:web:5262820a86ed8e47f26ee3",
  measurementId: "G-MED5WPG9TZ"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export {firebase}

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);