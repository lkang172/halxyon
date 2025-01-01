import Navbar from "./Navbar";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../Backend/Firebase/firebaseConfig.ts";

const Profile = () => {
  const handleGoogle = async () => {
    const provider = await new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };
  <h1>Happy new year!</h1>;
  return <button onClick={handleGoogle}>Sign in</button>;
};

export default Profile;
