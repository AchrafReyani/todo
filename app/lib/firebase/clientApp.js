// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-tJehHUATuAH1Ja5h_9tb4sM4nev-5IA",
  authDomain: "todo-nextjs-f4af2.firebaseapp.com",
  projectId: "todo-nextjs-f4af2",
  storageBucket: "todo-nextjs-f4af2.appspot.com",
  messagingSenderId: "592136812569",
  appId: "1:592136812569:web:61eb67b6ac6d7f22891288",
  measurementId: "G-RG6KZDSM04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = app.name && typeof window !== 'undefined' ? getAnalytics(app) : null;
const db = getFirestore(app);

export { app, analytics, auth, db };