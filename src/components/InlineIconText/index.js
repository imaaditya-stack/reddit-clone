import React from "react";
import StarIcon from "@material-ui/icons/Star";
import "./style.css";

function InlineIconText({ Icon, color, label, community }) {
  return (
    <div className="inline-icon-text-wrapper py-2">
      <div>
        <Icon className="icon" style={{ color: color ? color : "#007ACF" }} />
        <span className="home-text">{label}</span>
      </div>
      {community && (
        <StarIcon className="icon mt-1" style={{ color: "#eee" }} />
      )}
    </div>
  );
}

export default InlineIconText;
