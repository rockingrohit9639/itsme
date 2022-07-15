import React from "react";
import "./LinkCard.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DeleteIcon from "@mui/icons-material/Delete";

function LinkCard({ title, url }) {
  return (
    <div className="linkCard">
      <LinkedInIcon
        sx={{
          fontSize: "3rem",
        }}
      />

      <div className="linkCard__title">{title}</div>

      <div className="linkCard__actionButtons">
        <div className="deleteButton">
          <DeleteIcon sx={{ color: "red" }} />
        </div>
      </div>
    </div>
  );
}

export default LinkCard;
