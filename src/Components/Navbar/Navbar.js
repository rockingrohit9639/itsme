import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__left">
        <Link to={"/"} className="nav-link">
          <h1 className="logo">itsme</h1>
        </Link>
      </div>
      <div className="navbar__right d-flex">
        <img
          src="https://variety.com/wp-content/uploads/2022/02/Screen-Shot-2022-05-09-at-10.04.13-AM.png"
          alt="avatar"
          className="navbar__userImg img-fluid img-thumbnail"
        />

        <Link to={"/logout"} className="nav-link">
          Logout
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
