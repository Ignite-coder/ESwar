// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyCZerW6tW2WSwdGkGFiCGgU91sF9X0IzJI",
  authDomain: "fir-course-9ba86.firebaseapp.com",
  projectId: "fir-course-9ba86",
  storageBucket: "fir-course-9ba86.appspot.com",
  messagingSenderId: "584551923343",
  appId: "1:584551923343:web:812c1bd6d0cff3c4d9fafa",
  measurementId: "G-CS7PBM9Z6E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const googleProvider=new GoogleAuthProvider()