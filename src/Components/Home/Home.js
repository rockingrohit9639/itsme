import React, { useState } from "react";
import { useSelector } from "react-redux";
import { addNewLink } from "../../utils/API";
import "./Home.css";

function Home() {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const username = useSelector((state) => state.user?.user?.username);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !url) {
      return;
    }

    try {
      await addNewLink(username, title.toLowerCase(), url);
      setTitle("");
      setUrl("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="home container">
      <form className="inputForm" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter title"
          className="input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter URL"
          className="input"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />

        <button type="submit" className="btn">
          Add Link
        </button>
      </form>

      <div className="home__content"></div>
    </div>
  );
}

export default Home;
