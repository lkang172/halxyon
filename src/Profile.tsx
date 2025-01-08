import { User, handleLogout } from "./Login.tsx";

interface ProfileProps {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const Profile = ({ user, setUser }: ProfileProps) => {
  return (
    <>
      <p>Welcome to your profile, {user?.name}</p>
      <button onClick={() => handleLogout(setUser)}>Logout</button>
    </>
  );
};

export default Profile;
