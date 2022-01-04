// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDQIBnBqS4nto4KTpfcHqJki8Ey428tfkk",
  authDomain: "tiktokclone-9bf4b.firebaseapp.com",
  projectId: "tiktokclone-9bf4b",
  storageBucket: "tiktokclone-9bf4b.appspot.com",
  messagingSenderId: "460530571927",
  appId: "1:460530571927:web:c9229ef7c65a88918ce7d2",
  measurementId: "G-PPZKMHZT7K"
};

const firebaseApp = 
firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;