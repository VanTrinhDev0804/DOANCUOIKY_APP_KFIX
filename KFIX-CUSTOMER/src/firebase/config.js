import { initializeApp } from "firebase/app";
import { getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlZVJaUqlqMBoVlEEmZHgC1SRSn7o-7O4",
  authDomain: "key-fix.firebaseapp.com",
  databaseURL: "https://key-fix-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "key-fix",
  storageBucket: "key-fix.appspot.com",
  messagingSenderId: "941603136198",
  appId: "1:941603136198:web:48c47d1bae47a74654adc7",
  measurementId: "G-0C14PQ1TJ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app)
export {app , storage}