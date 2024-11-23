import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyACTecQ3pfKMgVH97khC9VVzL6OSSAQkv0",
  authDomain: "phoenix-c1efd.firebaseapp.com",
  projectId: "phoenix-c1efd",
  storageBucket: "phoenix-c1efd.firebasestorage.app",
  messagingSenderId: "902488755459",
  appId: "1:902488755459:web:2c87a374ef9de7b34a2d36",
  measurementId: "G-XHE7HTYXL2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default auth;
const analytics = getAnalytics(app);
