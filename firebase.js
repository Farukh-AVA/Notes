
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyCEqK1ilnEPSYdIfvyXED6zVX8n8ASHlCw",
  authDomain: "react-notes-f92cc.firebaseapp.com",
  projectId: "react-notes-f92cc",
  storageBucket: "react-notes-f92cc.appspot.com",
  messagingSenderId: "515668288485",
  appId: "1:515668288485:web:6fee29b0a1d7c1b7ee050c"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); 
export const notesCollection = collection(db, "notes");