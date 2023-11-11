
import "firebase/compat/firestore"
import app from "firebase/compat/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
import {initializeApp} from "firebase/app"
import { getFirestore, collection, addDoc, getDocs, doc, updateDoc, getDoc, setDoc, deleteDoc } from "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyCCw2IipzbJvu8V214zN0QKrOKaLinKTEs",
    authDomain: "tallersw5.firebaseapp.com",
    projectId: "tallersw5",
    storageBucket: "tallersw5.appspot.com",
    messagingSenderId: "777308559521",
    appId: "1:777308559521:web:cc085f8efd3f46f8bab8e0"
  };
  class Firebase{
    constructor(){
      if(!app.apps.length){
        app.initializeApp(firebaseConfig)
  
      }
      this.db = app.firestore();
    }
  
  }
//const FIREBASE = new Firebase();
export const FIREBASE = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE)
export const FIREBASE_DB = getFirestore(FIREBASE);
//export const auth = getAuth(FIREBASE)
export {getFirestore, collection, addDoc, getDocs, doc, updateDoc, getDoc, setDoc, deleteDoc}