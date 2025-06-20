// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_AUTH_API,
  authDomain:import.meta.env.VITE_AUTH_AUTHDOMAIN,
  projectId:import.meta.env.VITE_AUTH_PROJECT,
  storageBucket:import.meta.env.VITE_AUTH_STORAGEBUCKET,
  messagingSenderId:import.meta.env.VITE_AUTH_MESSAGINGSENDER,
  appId:import.meta.env.VITE_AUTH_APP,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);