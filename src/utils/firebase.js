// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; 
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGNXczwM7yhzulWFEyz2dknoYrKpl42Us",
  authDomain: "netflixgpt-96d72.firebaseapp.com",
  projectId: "netflixgpt-96d72",
  storageBucket: "netflixgpt-96d72.appspot.com",
  messagingSenderId: "591799133920",
  appId: "1:591799133920:web:b96ba09f06f297e3619285",
  measurementId: "G-4DJL0650PZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
export const provider = new GoogleAuthProvider();