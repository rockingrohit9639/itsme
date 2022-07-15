import React from "react";
import "./LinkCard.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { getLinkIcons } from "../../utils/utils";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import { deleteLink } from "../../utils/API";
import { useSelector, useDispatch } from "react-redux";
import { deleteUserLink } from "../../redux/userRedux";

function LinkCard({ title, url }) {
  const username = useSelector((state) => state.user.user.username);
  const dispatch = useDispatch();

  const handleDelete = async () => {
    try {
      await deleteLink(username, title);
      dispatch(deleteUserLink(title));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="linkCard">
      {getLinkIcons(title)}

      <div className="linkCard__title">{title}</div>

      <div className="linkCard__actionButtons">
        <div className="icon" onClick={() => window.open(url)}>
          <InsertLinkIcon />
        </div>
        <div className="icon" onClick={handleDelete}>
          <DeleteIcon sx={{ color: "red" }} />
        </div>
      </div>
    </div>
  );
}

export default LinkCard;
