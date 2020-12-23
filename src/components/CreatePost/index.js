import React from "react";
import RedditIcon from "@material-ui/icons/Reddit";
import { FormControl } from "react-bootstrap";
import ImageIcon from "@material-ui/icons/Image";
import LinkIcon from "@material-ui/icons/Link";
import "./style.css";

function CreatePost() {
  return (
    <div className="create_post">
      <div>
        <RedditIcon className="create_post__reddit-icon" />
      </div>
      <div className="create_post__input">
        <FormControl
          type="text"
          placeholder="Create Post"
          className="create_post-input pl-4"
        />
      </div>
      <div>
        <ImageIcon className="create_post__image-icon" />
      </div>
      <div>
        <LinkIcon className="create_post__link-icon" />
      </div>
    </div>
  );
}

export default CreatePost;
