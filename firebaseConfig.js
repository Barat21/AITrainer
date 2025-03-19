// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCnn6bGg_Zv44pS0_eeUCUNWi6006ZllaI",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "aitrainer-a17cb",
  storageBucket: "aitrainer-a17cb.firebasestorage.app",
  appId: "1:914296213251:android:043368ce02b3c047a2e336"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut };
