import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getLinks } from "../../utils/API";
import LinkCard from "../LinkCard/LinkCard";

function ShowUserLinks() {
  const [userLinks, setUserLinks] = useState([]);
  const { username } = useParams();

  const getUserLinks = useCallback(async () => {
    const links = await getLinks(username);
    setUserLinks(links);
  }, [username]);

  useEffect(() => {
    getUserLinks();
  }, [getUserLinks]);

  return (
    <div className="container grid mt">
      {userLinks.length > 0 ? (
        React.Children.toArray(
          userLinks.map((link) => (
            <LinkCard title={link.title} url={link.url} />
          ))
        )
      ) : (
        <h1>This user have not links.</h1>
      )}
    </div>
  );
}

export default ShowUserLinks;
