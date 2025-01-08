import { User, handleLogout } from "./Login.tsx";

const Profile = ({ user }: { user: User | null }) => {
  return (
    <>
      <p>Welcome to your profile, {user?.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};

export default Profile;
