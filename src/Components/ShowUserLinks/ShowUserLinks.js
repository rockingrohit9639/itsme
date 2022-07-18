import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getLinks } from "../../utils/API";
import LinkCard from "../LinkCard/LinkCard";
import Loading from "../Loading/Loading";

function ShowUserLinks() {
  const [userLinks, setUserLinks] = useState([]);
  const { username } = useParams();
  const [loading, setLoading] = useState(true);

  const getUserLinks = useCallback(async () => {
    const links = await getLinks(username);
    setUserLinks(links);
    setLoading(false);
  }, [username]);

  useEffect(() => {
    getUserLinks();
  }, [getUserLinks]);

  const style = {
    width: "100%",
    height: "calc(100vh - 5rem)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  };

  if (loading) {
    return <Loading title={`Getting ${username}'s links.`} />;
  } else if (userLinks.length > 0) {
    return (
      <div className="container grid mt">
        {React.Children.toArray(
          userLinks.map((link) => (
            <LinkCard title={link.title} url={link.url} username={username} />
          ))
        )}
      </div>
    );
  } else {
    return (
      <div className="container" style={style}>
        <h1>
          <span style={{ color: "var(--clr-primary)" }}>{username}</span> have
          no links.
        </h1>
      </div>
    );
  }
}

export default ShowUserLinks;
