// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDH2U6v6PKBE6s7YZnXBhTp4aWIge74kHU",
  authDomain: "borrowdream1.firebaseapp.com",
  projectId: "borrowdream1",
  storageBucket: "borrowdream1.appspot.com",
  messagingSenderId: "261575844611",
  appId: "1:261575844611:web:6400ce0379fe37f6b57f36",
  measurementId: "G-R3H1CW8RWQ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const storage = firebase.storage();