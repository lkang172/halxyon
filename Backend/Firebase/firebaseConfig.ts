// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

declare global {
  interface ImportMetaEnv {
    readonly VITE_APP_API_KEY: string;
    readonly VITE_APP_AUTH_DOMAIN: string;
    readonly VITE_APP_PROJ_ID: string;
    readonly VITE_APP_SENDER_ID: string;
    readonly VITE_APP_APP_ID: string;
    readonly VITE_APP_MEAS_ID: string;
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
}

export const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_API_KEY,
  authDomain: import.meta.env.VITE_APP_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_APP_PROJ_ID,
  storageBucket: "phoenix-c1efd.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_APP_SENDER_ID,
  appId: import.meta.env.VITE_APP_APP_ID,
  measurementId: import.meta.env.VITE_APP_MEAS_ID,
};

console.log(import.meta.env.VITE_APP_API_KEY);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
