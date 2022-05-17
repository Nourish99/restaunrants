// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOBziv9FlFO7167NimY3uGhSqKWjncXxM",
  authDomain: "restaurants-cad1c.firebaseapp.com",
  projectId: "restaurants-cad1c",
  storageBucket: "restaurants-cad1c.appspot.com",
  messagingSenderId: "154701267853",
  appId: "1:154701267853:web:8cc7c844084cf302ceb3c4"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);