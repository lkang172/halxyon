import Navbar from "./Navbar";
import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { useState, useEffect, Dispatch, SetStateAction } from "react";
import app, { auth, db } from "../Backend/Firebase/firebaseConfig.ts";

export interface User {
  name: string;
  email: string;
  createdAt: any;
  bookshelf: string[];
  followers: User[];
  following: User[];
}

interface LoginProps {
  setUser: Dispatch<SetStateAction<User | null>>;
  user: User | null;
}

export const handleLogout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Error signing out: ", error);
  }
};

const Login: React.FC<LoginProps> = ({ user, setUser }) => {
  const handleGoogle = async () => {
    const provider = await new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Error signing in with Google: ", error);
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(userRef);

        if (!docSnap.exists()) {
          await setDoc(userRef, {
            name: user.displayName,
            email: user.email,
            createdAt: serverTimestamp(),
            bookshelf: [],
            followers: [],
            following: [],
          });
        } else {
          setUser(docSnap.data() as User);
        }
      } else {
        setUser(null);
        console.log("No user is signed in");
      }
    });
  }, []);

  return (
    <>
      <h1>Sign in or Create Account</h1>
      <button onClick={handleGoogle}>Sign in</button>
    </>
  );
};

export default Login;
