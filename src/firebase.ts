import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCQWyPBXeMGYABz1hpDA2VPTTe2bP6Wtd0",
  authDomain: "arnab-the-game-db.firebaseapp.com",
  projectId: "arnab-the-game-db",
  storageBucket: "arnab-the-game-db.firebasestorage.app",
  messagingSenderId: "720866282339",
  appId: "1:720866282339:web:726d19c606a1219111a156",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);