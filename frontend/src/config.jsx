// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

//importing our hidden config
import config from "./firebaseconfig"

// Initialize Firebase
const app = initializeApp(config);

const auth = getAuth(app)

export {auth}