import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserLink } from "../../utils/API";
import Loading from "../Loading/Loading";

function RedirectUser() {
  const { username, title } = useParams();
  const [userLink, setUserLink] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log(loading);

  const getLinkAndRedirect = useCallback(async () => {
    const link = await getUserLink(username, title);
    setUserLink(link);

    setLoading(false);

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
    textAlign: "center",
  };

  return (
    <div className="container" style={style}>
      {loading && <Loading title={`Getting ${username}'s ${title}.`} />}
      {userLink === null && (
        <h1>
          <span style={{ color: "var(--clr-primary)" }}>{username}</span> does
          not have {title} provided.
        </h1>
      )}
      {userLink && (
        <h1>
          Redirecting to{" "}
          <span style={{ color: "var(--clr-primary)" }}>{username}</span>'s{" "}
          {title}.
        </h1>
      )}
    </div>
  );
}

export default RedirectUser;
