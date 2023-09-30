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
  apiKey: "AIzaSyC5Er-al_P_mwd8vsuydvwDVoP49Ck1Jp4",
  authDomain: "finansasapp.firebaseapp.com",
  projectId: "finansasapp",
  storageBucket: "finansasapp.appspot.com",
  messagingSenderId: "109136454520",
  appId: "1:109136454520:web:5e80c9bb543c79dff85e8d"
};
            
            


// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
/* export const FIREBASE_AUTH = getAuth(FIREBASE_APP); */
export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });
export const FIREBASE_DB = getFirestore(FIREBASE_APP);