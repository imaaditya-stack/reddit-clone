import React from "react";
import ArrowUpwardRoundedIcon from "@material-ui/icons/ArrowUpwardRounded";
import ArrowDownwardRoundedIcon from "@material-ui/icons/ArrowDownwardRounded";
import "./style.css";

function PostVotes({ votes }) {
  return (
    <div className="votes-container">
      <ArrowUpwardRoundedIcon
        style={{ fontSize: 20, color: "rgb(135, 138, 140)" }}
      />
      <span className="font-weight-bold pt-1 votes">{votes}</span>
      <ArrowDownwardRoundedIcon
        style={{ fontSize: 20, color: "rgb(135, 138, 140)" }}
      />
    </div>
  );
}

export default PostVotes;
