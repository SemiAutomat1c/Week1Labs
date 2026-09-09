import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBAdqOZn3DjKrxqA_7tfwCH7MpoCbiB9oE",
  authDomain: "week1labs-e3e85.firebaseapp.com",
  projectId: "week1labs-e3e85",
  storageBucket: "week1labs-e3e85.firebasestorage.app",
  messagingSenderId: "183497427502",
  appId: "1:183497427502:web:ba8c68b3108cfec961edbf",
  measurementId: "G-69MXKK9W3Y"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);