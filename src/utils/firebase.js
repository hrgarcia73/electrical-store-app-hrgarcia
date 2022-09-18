// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBfpNn6Dz2Xx7vm5PTq_uRM4WBVVFTOlL8",
    authDomain: "sunlit-shelter-348614.firebaseapp.com",
    projectId: "sunlit-shelter-348614",
    storageBucket: "sunlit-shelter-348614.appspot.com",  
    messagingSenderId: "831942905097", 
    appId: "1:831942905097:web:349e8fd29f14c5ed7b57d8"  
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
//Conexion a la base de datos
export const db = getFirestore(app);

