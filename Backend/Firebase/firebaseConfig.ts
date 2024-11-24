import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import dotenv from "dotenv";

dotenv.config();

const firebaseConfig = {
  apiKey: process.env.GOOGLE_API_KEY,
  authDomain: "phoenix-c1efd.firebaseapp.com",
  projectId: "phoenix-c1efd",
  storageBucket: "phoenix-c1efd.firebasestorage.app",
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: "G-XHE7HTYXL2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default auth;
const analytics = getAnalytics(app);
