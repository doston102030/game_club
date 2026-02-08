// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import  {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBe-PLMmtyQHtt7_yVOk2tWN1YIIDiZ3s0",
  authDomain: "game-club-c93c3.firebaseapp.com",
  projectId: "game-club-c93c3",
  storageBucket: "game-club-c93c3.firebasestorage.app",
  messagingSenderId: "956353481301",
  appId: "1:956353481301:web:bd658a7982d5a1c8e1e2dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)