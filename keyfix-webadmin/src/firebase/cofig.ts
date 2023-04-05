// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import {getDatabase} from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_SORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEUREMENT_ID,
  //  apiKey: "AIzaSyDlZVJaUqlqMBoVlEEmZHgC1SRSn7o-7O4",
  // authDomain: "key-fix.firebaseapp.com",
  // databaseURL: "https://key-fix-default-rtdb.asia-southeast1.firebasedatabase.app",
  // projectId: "key-fix",
  // storageBucket: "key-fix.appspot.com",
  // messagingSenderId: "941603136198",
  // appId: "1:941603136198:web:18262acd6d948d7654adc7",
  // measurementId: "G-0MQ97QC7GM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const database = getDatabase(app)
export const auth = getAuth();
export const storage =  getStorage()