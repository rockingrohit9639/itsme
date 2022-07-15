import React from "react";
import LinkCard from "../LinkCard/LinkCard";
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

      <div className="home__content">
        <LinkCard />
        <LinkCard />
        <LinkCard />
        <LinkCard />
        <LinkCard />
        <LinkCard />
      </div>
    </div>
  );
}

export default Home;
