import React from "react";
import RedditIcon from "@material-ui/icons/Reddit";
import { FormControl } from "react-bootstrap";
import ImageIcon from "@material-ui/icons/Image";
import LinkIcon from "@material-ui/icons/Link";
import { Wrapper } from "../../theme/Wrapper";
import { useSelector } from "react-redux";
import "./style.css";

function CreatePost() {
  const darkThemeEnabled = useSelector((state) => state?.darkThemeEnabled);
  return (
    <Wrapper
      className="create_post"
      style={{ border: darkThemeEnabled ? "none" : "1px solid #eaeaea" }}
    >
      <div>
        <RedditIcon className="create_post__reddit-icon" />
      </div>
      <div className="create_post__input">
        <FormControl
          type="text"
          placeholder="Create Post"
          className={`pl-3`}
          style={{
            backgroundColor: darkThemeEnabled ? "#131621" : "#fff",
            border: darkThemeEnabled ? "1px solid #333" : "1px solid #ccc",
          }}
        />
      </div>
      <div>
        <ImageIcon className="create_post__image-icon" />
      </div>
      <div>
        <LinkIcon className="create_post__link-icon" />
      </div>
    </Wrapper>
  );
}

export default CreatePost;
