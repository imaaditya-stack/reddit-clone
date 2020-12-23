import React from "react";
import CreatePost from "../../components/CreatePost";
import "./style.css";
import Post from "../../components/Post";
import { Posts } from "../../reddit";

function PostContainer() {
  return (
    <div className="posts">
      <CreatePost />
      <br />
      {Posts.map((post) => {
        return (
          <Post
            title={post.Title}
            channel={post.Channel}
            label={post.Label}
            labelColor={post.LabelColor}
            votes={post.Votes}
            comments={post.Comments}
          />
        );
      })}
    </div>
  );
}

export default PostContainer;
