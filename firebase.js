// firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyD0M3w8_6CN5_azfQbVDO_dtoaJjbUrxjs",
  authDomain: "redlustbet.firebaseapp.com",
  projectId: "redlustbet",
  storageBucket: "redlustbet.firebasestorage.app",
  messagingSenderId: "1071361085496",
  appId: "1:1071361085496:web:9c6d7e7de49e372a35d6cd",
  measurementId: "G-4TK9NDTKHS"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
