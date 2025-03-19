import { initializeApp, getApps, getApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnn6bGg_Zv44pS0_eeUCUNWi6006ZllaI",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "aitrainer-a17cb",
  storageBucket: "aitrainer-a17cb.firebasestorage.app",
  appId: "1:914296213251:android:043368ce02b3c047a2e336"
};

// Ensure Firebase is initialized only once
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, set };
