import React from "react";
import { auth } from "../../firebase";
import { addNewLink } from "../../utils/API";
import "./Home.css";
import { useSelector } from "react-redux";

function Home() {
  const username = useSelector((state) => state.user.user.username);

  return (
    <div>
      <button onClick={() => addNewLink(username, "test", "https://test.com")}>
        Add Test Link
      </button>
      <button onClick={() => auth.signOut()}>Signout</button>
    </div>
  );
}

export default Home;
