import Navbar from "./Navbar";
import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { useState, useEffect } from "react";
import app, { auth, db } from "../Backend/Firebase/firebaseConfig.ts";

interface User {
  name: string;
  email: string;
  createdAt: any;
  bookshelf: string[];
  followers: User[];
  following: User[];
}

const Profile = () => {
  const [user, setUser] = useState<User | null>(null);
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

          setUser(docSnap.data() as User);
        } else {
          setUser(docSnap.data() as User);
          console.log(docSnap.data());
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
      <p>Welcome, {user?.name}</p>
    </>
  );
};

export default Profile;
