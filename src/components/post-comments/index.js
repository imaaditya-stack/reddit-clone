import React from "react";
import ModeCommentRoundedIcon from "@material-ui/icons/ModeCommentRounded";
import MoreHorizRoundedIcon from "@material-ui/icons/MoreHorizRounded";
import { Dropdown } from "react-bootstrap";
import "./style.css";
import CodeRoundedIcon from "@material-ui/icons/CodeRounded";
import LinkRoundedIcon from "@material-ui/icons/LinkRounded";
import CardGiftcardRoundedIcon from "@material-ui/icons/CardGiftcardRounded";
import BookmarkRoundedIcon from "@material-ui/icons/BookmarkRounded";

function PostComments({ comments }) {
  return (
    <div className="post-comments">
      <div className="pr-5">
        <ModeCommentRoundedIcon
          style={{ fontSize: 20, color: "rgb(135, 138, 140)" }}
        />
        <span
          className="font-weight-bold ml-2"
          style={{ color: "#999", fontSize: 13 }}
        >
          {comments}
        </span>
      </div>
      <div>
        <Dropdown>
          <Dropdown.Toggle className="menu-toggle">
            <MoreHorizRoundedIcon style={{ color: "#999" }} />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#">
              <div className="d-flex py-2 justify-content-between align-items-center">
                <div>
                  <CardGiftcardRoundedIcon
                    style={{ fontSize: 20, color: "#999" }}
                  />
                  <span className="pl-2">Give award</span>
                </div>
              </div>
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2">
              <div className="d-flex py-2 justify-content-between align-items-center">
                <div>
                  <LinkRoundedIcon style={{ fontSize: 20, color: "#999" }} />
                  <span className="pl-2">Copy Link</span>
                </div>
              </div>
            </Dropdown.Item>
            <Dropdown.Item href="#/action-3">
              <div className="d-flex py-2 justify-content-between align-items-center">
                <div>
                  <CodeRoundedIcon style={{ fontSize: 20, color: "#999" }} />
                  <span className="pl-2">Embed</span>
                </div>
              </div>
            </Dropdown.Item>
            <Dropdown.Item href="#/action-3">
              <div className="d-flex py-2 justify-content-between align-items-center">
                <div>
                  <BookmarkRoundedIcon
                    style={{ fontSize: 20, color: "#999" }}
                  />
                  <span className="pl-2">Save</span>
                </div>
              </div>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}

export default PostComments;
