import React from "react";
import RedditIcon from "@material-ui/icons/Reddit";
import { Button, Navbar, Nav, FormControl, Image } from "react-bootstrap";
import ImageIcon from "@material-ui/icons/Image";
import LinkIcon from "@material-ui/icons/Link";
import "./style.css";

function CreatePost() {
  return (
    <div className="create-post-container">
      <div>
        <RedditIcon className="create-post-reddit-icon" />
      </div>
      <div className="create-post-input-container">
        <FormControl
          type="text"
          placeholder="Create Post"
          className="create-post-input pl-4"
        />
      </div>
      <div>
        <ImageIcon className="create-post-image-icon" />
      </div>
      <div>
        <LinkIcon className="create-post-link-icon" />
      </div>
    </div>
  );
}

export default CreatePost;
