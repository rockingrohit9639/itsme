import React from "react";
import { auth } from "../../firebase";
import "./Home.css";

function Home() {
  return (
    <div>
      <button onClick={() => auth.signOut()}>Signout</button>
    </div>
  );
}

export default Home;
