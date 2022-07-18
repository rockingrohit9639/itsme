import React from "react";
import "./LinkCard.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { getLinkIcons } from "../../utils/utils";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Tooltip } from "@mui/material";
import { deleteLink } from "../../utils/API";
import { useSelector, useDispatch } from "react-redux";
import { deleteUserLink } from "../../redux/userRedux";

function LinkCard({ title, url, username }) {
  const userFromStore = useSelector((state) => state.user.user?.username);
  const { isAuthenticated } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleDelete = async () => {
    if (!isAuthenticated) return;
    try {
      await deleteLink(username, title);
      dispatch(deleteUserLink(title));
    } catch (err) {
      console.log(err);
    }
  };

  const redirectURL = (url) => {
    if (!url.startsWith("http") || !url.startsWith("https")) {
      window.open(`http://${url}`, "_blank");
    } else {
      window.open(url);
    }
  };

  const handleCopyToClipboard = () => {
    window.navigator.clipboard.writeText(
      `${window.location.origin}/${username}/${title}`
    );
    alert("Copied to clipboard!");
  };

  return (
    <div className="linkCard">
      {getLinkIcons(title)}

      <div className="linkCard__title">{title}</div>

      <p className="linkCard__link">{`/${username}/${title}`}</p>

      <div className="linkCard__actionButtons">
        <div className="icon" onClick={handleCopyToClipboard}>
          <Tooltip title="Copy Link">
            <ContentCopyIcon />
          </Tooltip>
        </div>
        <div className="icon" onClick={() => redirectURL(url)}>
          <Tooltip title="Visit Link">
            <InsertLinkIcon />
          </Tooltip>
        </div>
        {isAuthenticated && username === userFromStore ? (
          <div className="icon" onClick={handleDelete}>
            <Tooltip title="Delete Link">
              <DeleteIcon sx={{ color: "red" }} />
            </Tooltip>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default LinkCard;
