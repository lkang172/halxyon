import { User } from "./Login";

const Feed = ({ user }: { user: User }) => {
  return (
    <>
      <p>Welcome to your feed, {user.email}</p>
    </>
  );
};
export default Feed;
