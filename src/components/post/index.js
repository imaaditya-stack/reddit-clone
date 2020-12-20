import React from "react";
import PostVotes from "../post-votes";
import PostComments from "../post-comments";
import LaunchRoundedIcon from "@material-ui/icons/LaunchRounded";
import "./style.css";

function Post({ title, channel, label, labelColor, votes, comments }) {
  return (
    <div className="post-container">
      <div className="votes-container p-0 m-0">
        <PostVotes votes={votes} />
      </div>
      <div className="post-info pt-3 pl-3">
        <div className="pr-3 launch-icon">
          <LaunchRoundedIcon
            style={{ fontSize: 20, color: "rgb(135, 138, 140)" }}
          />
        </div>
        <div className="post-content">
          <span className="font-weight-bold post-title">
            {title}
            {label ? (
              <span
                className="post-label"
                style={{ backgroundColor: labelColor }}
              >
                {label}
              </span>
            ) : null}
          </span>
          <span className="posted-by-text">
            <span
              className="font-weight-bold post-channel"
              style={{ fontSize: 13 }}
            >
              {channel}
            </span>
            <span
              style={{ fontSize: 13, color: "#999", paddingLeft: 10 }}
              className="posted-by"
            >
              Posted by u/moseich 14 hours ago
            </span>
          </span>
        </div>
      </div>
      <div className="comments-container">
        <PostComments comments={comments} />
      </div>
    </div>
  );
}

export default Post;
