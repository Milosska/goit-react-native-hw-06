import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAzp9rIsah-LTlezbSz6Xl1Ck8inj8Jk5Y",
  authDomain: "react-native-hw-fd82a.firebaseapp.com",
  databaseURL:
    "https://react-native-hw-fd82a-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "react-native-hw-fd82a",
  storageBucket: "react-native-hw-fd82a.appspot.com",
  messagingSenderId: "994901429605",
  appId: "1:994901429605:web:035a7d75f0383f9f52a58c",
  measurementId: "G-878JE8CLD7",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
