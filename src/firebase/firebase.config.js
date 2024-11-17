// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0j0Okvwx08LuP1_PbOxYM1TIwO2seT90",
  authDomain: "coupon-collection-a1440.firebaseapp.com",
  projectId: "coupon-collection-a1440",
  storageBucket: "coupon-collection-a1440.firebasestorage.app",
  messagingSenderId: "600242923868",
  appId: "1:600242923868:web:1b6af462e237039edeb999"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;