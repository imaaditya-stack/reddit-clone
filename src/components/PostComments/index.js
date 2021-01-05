import React from "react";
import ModeCommentRoundedIcon from "@material-ui/icons/ModeCommentRounded";
import "./style.css";

function PostComments({ comments }) {
  return (
    <div className="post-comments">
      <ModeCommentRoundedIcon
        style={{ fontSize: 20, color: "rgb(135, 138, 140)" }}
      />
      <span
        className="font-weight-bold ml-sm-0 ml-lg-2"
        style={{ color: "#999", fontSize: 13 }}
      >
        {comments}
      </span>
    </div>
  );
}

export default PostComments;
