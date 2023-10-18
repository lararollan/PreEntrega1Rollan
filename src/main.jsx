import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'




// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_OVLq8v4Mp6ChzuMiBVWIldvvQQu34Mw",
  authDomain: "ecosimuladores-e-commerce.firebaseapp.com",
  projectId: "ecosimuladores-e-commerce",
  storageBucket: "ecosimuladores-e-commerce.appspot.com",
  messagingSenderId: "572624963801",
  appId: "1:572624963801:web:8dd88644e43fadb1cc56c8"
};

// Initialize Firebase
initializeApp(firebaseConfig);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
