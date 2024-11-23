import { GoogleAuthProvider } from "firebase/auth/web-extension";
import { getAuth, signInWithPopup } from "firebase/auth";
import { auth } from "../Firebase/firebaseConfig";

const Profile = () => {
  const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    const provider = new GoogleAuthProvider();
  };
  return (
    <>
      <h1>Log in or sign up:</h1>
      <button onClick={handleLogin}>Log in</button>
    </>
  );
};

export default Profile;
