// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFDNv1qJ-vHfkOZ-UF4qXFoNKHpV3Gq_U",
  authDomain: "tech-theory-19b34.firebaseapp.com",
  projectId: "tech-theory-19b34",
  storageBucket: "tech-theory-19b34.appspot.com",
  messagingSenderId: "832922456793",
  appId: "1:832922456793:web:bf4325bbbecd8d3d30e4c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;