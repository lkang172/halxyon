import Navbar from "./Navbar";
import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  getAuth,
  signInWithEmailAndPassword,
  User,
} from "firebase/auth";
import { useState, useEffect } from "react";
import app, { auth } from "../Backend/Firebase/firebaseConfig.ts";

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
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        console.log("Welcome, " + user.displayName);
      } else {
        console.log("No user is signed in");
      }
    });
  }, []);

  return (
    <>
      <h1>Happy new year!</h1>
      <button onClick={handleGoogle}>Sign in</button>
      <p>Welcome, {user?.displayName}</p>
    </>
  );
};

export default Profile;
