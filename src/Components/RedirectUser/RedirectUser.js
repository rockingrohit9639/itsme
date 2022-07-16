import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserLink } from "../../utils/API";

function RedirectUser() {
  const { username, title } = useParams();
  const [userLink, setUserLink] = useState(null);

  const getLinkAndRedirect = useCallback(async () => {
    const link = await getUserLink(username, title);
    setUserLink(link);

    if (!link) {
      return;
    }

    if (!link.startsWith("http") || !link.startsWith("https")) {
      window.location.href = `http://${link}`;
    } else {
      window.location.href = link;
    }
  }, [username, title]);

  useEffect(() => {
    getLinkAndRedirect();
  }, [getLinkAndRedirect]);

  const style = {
    width: "100%",
    height: "calc(100vh - 5rem)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "2rem",
    fontWeight: "bold",
    textAlign: "center",
  };

  return (
    <div className="container" style={style}>
      {userLink !== null
        ? `Redirecting you to ${username}'s ${title}`
        : `${username} does not have ${title} provided.`}
    </div>
  );
}

export default RedirectUser;
