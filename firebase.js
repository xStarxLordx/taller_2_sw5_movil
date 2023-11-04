// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';    
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCw2IipzbJvu8V214zN0QKrOKaLinKTEs",
  authDomain: "tallersw5.firebaseapp.com",
  projectId: "tallersw5",
  storageBucket: "tallersw5.appspot.com",
  messagingSenderId: "777308559521",
  appId: "1:777308559521:web:cc085f8efd3f46f8bab8e0"
};
            
            


// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
/* export const FIREBASE_AUTH = getAuth(FIREBASE_APP); */
export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });
export const FIREBASE_DB = getFirestore(FIREBASE_APP);