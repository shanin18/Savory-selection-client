// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjbn2h9Wlc1JT0ZXGzhthJZVV_6C6nRPU",
  authDomain: "react-savory-selections.firebaseapp.com",
  projectId: "react-savory-selections",
  storageBucket: "react-savory-selections.appspot.com",
  messagingSenderId: "309115698777",
  appId: "1:309115698777:web:5a8e23ed92671bcc8afb48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;