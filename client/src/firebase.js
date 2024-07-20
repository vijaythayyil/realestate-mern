// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-93b5b.firebaseapp.com",
  projectId: "mern-estate-93b5b",
  storageBucket: "mern-estate-93b5b.appspot.com",
  messagingSenderId: "1071536849983",
  appId: "1:1071536849983:web:17d580e956041da547248a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
