import React from "react";
import { auth } from "../../firebase";
import { deleteLink } from "../../utils/API";
import "./Home.css";
import { useSelector } from "react-redux";

function Home() {
  const username = useSelector((state) => state.user.user.username);

  return (
    <div className="">
      <button onClick={() => deleteLink(username, "test")}>
        Add Test Link
      </button>
      <button onClick={() => auth.signOut()}>Signout</button>
    </div>
  );
}

export default Home;
