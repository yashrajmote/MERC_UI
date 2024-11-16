// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBv8k4WsEHuZhCrzYG1i9ayEIV3vWxolqU",
  authDomain: "mahagenco-92fcc.firebaseapp.com",
  databaseURL: "https://mahagenco-92fcc-default-rtdb.firebaseio.com",
  projectId: "mahagenco-92fcc",
  storageBucket: "mahagenco-92fcc.firebasestorage.app",
  messagingSenderId: "5187307027",
  appId: "1:5187307027:web:bb68927611e2ba297e61e6",
  measurementId: "G-PVEQFZFKNR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);