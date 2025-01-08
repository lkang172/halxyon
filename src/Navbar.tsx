import { Link } from "react-router-dom";
import "./App.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/home"
                  className="nav-link active"
                  area-current="page"
                >
                  [[HALXYON]]
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/feed"
                  className="nav-link active"
                  area-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link active" area-current="page">
                  Browse
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <Link to="/profile">
                <button className="btn btn-outline-success" type="submit">
                  Profile
                </button>
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
