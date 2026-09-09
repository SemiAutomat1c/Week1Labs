import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import {
  initializeAuth,
  getReactNativePersistence,
  getAuth,
} from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyBAdqOZn3DjKrxqA_7tfwCH7MpoCbiB9oE",
  authDomain: "week1labs-e3e85.firebaseapp.com",
  projectId: "week1labs-e3e85",
  storageBucket: "week1labs-e3e85.firebasestorage.app",
  messagingSenderId: "183497427502",
  appId: "1:183497427502:web:ba8c68b3108cfec961edbf",
  measurementId: "G-69MXKK9W3Y"
};

// Check if an app instance already exists to prevent Fast Refresh crashes
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
export const db = getFirestore(app);

// Guard initializeAuth against duplicate calls during hot reload
let auth;
try {
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
  });
} catch (e) {
  auth = getAuth(app);
}

export { auth };