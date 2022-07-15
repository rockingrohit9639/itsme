import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home container">
      <form className="inputForm">
        <input type="text" placeholder="Enter title" className="input" />
        <input type="text" placeholder="Enter URL" className="input" />

        <button type="submit" className="btn">
          Add Link
        </button>
      </form>
    </div>
  );
}

export default Home;
