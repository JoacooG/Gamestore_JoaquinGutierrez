import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA6N0FHuscUx6tsTwxa_EVTp-i-ufQcERE",
  authDomain: "gamestore-argentina.firebaseapp.com",
  projectId: "gamestore-argentina",
  storageBucket: "gamestore-argentina.appspot.com",
  messagingSenderId: "539010959170",
  appId: "1:539010959170:web:f2dc1582ce29962a1faadb"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);