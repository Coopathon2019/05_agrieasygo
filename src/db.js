import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const configOptions = {
    apiKey: "AIzaSyBujn-mSsVSn1P-rvLmFOyUsFSjQKEDFmE",
    authDomain: "fir-auth-b4dfb.firebaseapp.com",
    databaseURL: "https://fir-auth-b4dfb.firebaseio.com",
    projectId: "fir-auth-b4dfb",
    storageBucket: "fir-auth-b4dfb.appspot.com",
    messagingSenderId: "363331543754",
    appId: "1:363331543754:web:bfe853af8e99ca1b5c8a33",
    measurementId: "G-QN7L3M846K"
  };

const firebaseApp = firebase.initializeApp(configOptions);
export const db = firebaseApp;