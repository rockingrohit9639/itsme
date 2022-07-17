import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import "./Navbar.css";
import { useSelector } from "react-redux";

function Navbar() {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  const handleLogout = () => {
    auth.signOut();
  };

  return (
    <div className="navbar">
      <div className="navbar__left">
        <Link to={"/"} className="nav-link">
          <h1 className="logo">itsme</h1>
        </Link>
      </div>
      <div className="navbar__right d-flex">
        {isAuthenticated && (
          <>
            <img
              src={auth.currentUser.photoURL}
              alt="avatar"
              className="navbar__userImg img-fluid img-thumbnail"
            />

            <div
              style={{ color: "#000", cursor: "pointer" }}
              onClick={handleLogout}
            >
              Logout
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
