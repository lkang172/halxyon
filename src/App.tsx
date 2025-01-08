import Navbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useState } from "react";
import { User } from "./Login";
import Profile from "./Profile";
import Login from "./Login";
import Home from "./Home";
import Feed from "./Feed";

const App = () => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/login"
            element={
              user ? <Navigate to="/profile" /> : <Login setUser={setUser} />
            }
          />
          <Route
            path="/profile"
            element={user ? <Profile user={user} /> : <Navigate to="/login" />}
          />
          <Route
            path="/home"
            element={user ? <Navigate to="/feed" /> : <Home />}
          />
          <Route
            path="/feed"
            element={user ? <Feed user={user} /> : <Navigate to="/home" />}
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
