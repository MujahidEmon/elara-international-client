// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxlvbf836L0IUtDUBPKOhAbPVQXXI-R7k",
  authDomain: "elara-international.firebaseapp.com",
  projectId: "elara-international",
  storageBucket: "elara-international.firebasestorage.app",
  messagingSenderId: "606093877169",
  appId: "1:606093877169:web:6409858fb2d9e114b2a790"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;    
