// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC78UWmqoxIWVv7zXTIxdTsczJQFF2Sr9Q",
  authDomain: "simple-firebase-51d8f.firebaseapp.com",
  projectId: "simple-firebase-51d8f",
  storageBucket: "simple-firebase-51d8f.appspot.com",
  messagingSenderId: "484529472826",
  appId: "1:484529472826:web:1cf8d41f1c4bbfaf7bbc03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app