import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage"; 

const firebaseConfig = {
  apiKey: "AIzaSyAyEc-TyS0IFtyWNkLYOJTFeYOogULvvuk",
  authDomain: "client-review-1da57.firebaseapp.com",
  projectId: "client-review-1da57",
  storageBucket: "client-review-1da57.appspot.com",
  messagingSenderId: "1069040449374",
  appId: "1:1069040449374:web:9e04c41159b805947f01cf",
  measurementId: "G-TPCZ26G2LT",
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const analytics = getAnalytics(app);
const storage = getStorage(app); 

export { db, auth, storage }; 