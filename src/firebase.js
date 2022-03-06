import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCKvxiWCjokwxx_CoQIukJT_njyFDXOtew",
  authDomain: "innovaplanetary.firebaseapp.com",
  databaseURL: "https://innovaplanetary-default-rtdb.firebaseio.com",
  projectId: "innovaplanetary",
  storageBucket: "innovaplanetary.appspot.com",
  messagingSenderId: "690319727062",
  appId: "1:690319727062:web:77e5e7950d05f00579ac77"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export {db, auth}