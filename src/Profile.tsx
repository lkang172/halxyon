import Navbar from "./Navbar";
import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  getAuth,
  signInWithEmailAndPassword,
  User,
} from "firebase/auth";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { useState, useEffect } from "react";
import app, { auth, db } from "../Backend/Firebase/firebaseConfig.ts";

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
        setUser(user);
        const userRef = doc(db, "users", user.uid);
        console.log(userRef);
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
        }
      } else {
        console.log("No user is signed in");
      }
    });
  }, []);

  return (
    <>
      <h1>Happy new year!</h1>
      <button onClick={handleGoogle}>Sign in</button>
      <p>Welcome, {user?.email}</p>
    </>
  );
};

export default Profile;
