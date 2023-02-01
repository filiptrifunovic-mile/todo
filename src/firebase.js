// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAenwR0E_mSmHjbDziinhAlgDD_wTre3Qw",
  authDomain: "todo-f5279.firebaseapp.com",
  projectId: "todo-f5279",
  storageBucket: "todo-f5279.appspot.com",
  messagingSenderId: "680874721256",
  appId: "1:680874721256:web:3c9221924a5cca1330ee5d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
