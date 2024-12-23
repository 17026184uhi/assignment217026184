import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";

var firebaseConfig = {
  apiKey: "AIzaSyD9Iwo10CsrGlAy5QrXjjW7rwyEyCnuddg",
  authDomain: "assignment217026184-e764a.firebaseapp.com",
  databaseURL:
    "https://assignment217026184-e764a-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "assignment217026184-e764a",
  storageBucket: "assignment217026184-e764a.firebasestorage.app",
  messagingSenderId: "865725348333",
  appId: "1:865725348333:web:9e6aaa5c8f822c0a25cfe4",
  measurementId: "G-JJEDLZJH0K"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const database = getDatabase(app);
const analytics = getAnalytics(app);
