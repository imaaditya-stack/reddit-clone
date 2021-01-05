import React from "react";
import PostVotes from "../PostVotes";
import PostComments from "../PostComments";
import LaunchRoundedIcon from "@material-ui/icons/LaunchRounded";
import "./style.css";
import { Wrapper } from "../../theme/Wrapper";
import { useSelector } from "react-redux";

function Post({ title, channel, label, labelColor, votes, comments }) {
  const darkThemeEnabled = useSelector((state) => state?.darkThemeEnabled);
  return (
    <Wrapper
      className="post-container"
      style={{ border: darkThemeEnabled ? "none" : "1px solid #eee" }}
    >
      <div className="votes-container p-0 m-0">
        <PostVotes votes={votes} />
      </div>
      <div className="post-main-div pt-3 pl-3">
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
    </Wrapper>
  );
}

export default Post;
