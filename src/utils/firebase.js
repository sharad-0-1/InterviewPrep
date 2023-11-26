// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "interviewexp-65110.firebaseapp.com",
  projectId: "interviewexp-65110",
  storageBucket: "interviewexp-65110.appspot.com",
  messagingSenderId: "798302670875",
  appId: "1:798302670875:web:16b342c5f0645fc31ea8be",
  measurementId: "G-05PQ1W85EZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);