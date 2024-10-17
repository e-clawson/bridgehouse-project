// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

//importing our hidden config
const firebaseConfig = {
    apiKey: "AIzaSyDS2bacq1mLqg-1lu9nYZBj6EWbPzeg2Lg",
    authDomain: "bridgehouse-project.firebaseapp.com",
    projectId: "bridgehouse-project",
    storageBucket: "bridgehouse-project.appspot.com",
    messagingSenderId: "213285827633",
    appId: "1:213285827633:web:46ecc287e28a0dc7d89110"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export {auth}