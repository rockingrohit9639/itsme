import React, { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUserLink, setUserLinks } from "../../redux/userRedux";
import { addNewLink, getLinks } from "../../utils/API";
import LinkCard from "../LinkCard/LinkCard";
import "./Home.css";

function Home() {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  const dispatch = useDispatch();

  const userLinks = useSelector((state) => state.user.userLinks);
  const username = useSelector((state) => state.user?.user?.username);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !url) {
      return alert("Please fill out all fields");
    }

    if (
      !url.match(
        /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
      )
    ) {
      return alert("Please enter a valid URL");
    }

    try {
      await addNewLink(username, title.toLowerCase(), url);

      dispatch(addUserLink({ title, url }));

      setTitle("");
      setUrl("");
    } catch (err) {
      console.log(err);
    }
  };

  const getUserLinks = useCallback(async () => {
    const links = await getLinks(username);
    dispatch(setUserLinks(links));
  }, [username, dispatch]);

  useEffect(() => {
    getUserLinks();
  }, [getUserLinks]);

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

      <div className="home__content">
        {React.Children.toArray(
          userLinks.map((link) => (
            <LinkCard title={link.title} url={link.url} />
          ))
        )}
      </div>
    </div>
  );
}

export default Home;
