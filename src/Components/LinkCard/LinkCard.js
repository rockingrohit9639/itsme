import React from "react";
import "./LinkCard.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { getLinkIcons } from "../../utils/utils";
import InsertLinkIcon from "@mui/icons-material/InsertLink";

function LinkCard({ title, url }) {
  return (
    <div className="linkCard">
      {getLinkIcons(title)}

      <div className="linkCard__title">{title}</div>

      <div className="linkCard__actionButtons">
        <div className="icon" onClick={() => window.open(url)}>
          <InsertLinkIcon />
        </div>
        <div className="icon">
          <DeleteIcon sx={{ color: "red" }} />
        </div>
      </div>
    </div>
  );
}

export default LinkCard;
