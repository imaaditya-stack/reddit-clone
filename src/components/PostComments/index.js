import React from "react";
import ModeCommentRoundedIcon from "@material-ui/icons/ModeCommentRounded";
import MoreHorizRoundedIcon from "@material-ui/icons/MoreHorizRounded";
import { Dropdown } from "react-bootstrap";
import DropdownItem from "../DropdownItem";
import { CommentDropdownItems } from "../../reddit";
import "./style.css";

function PostComments({ comments }) {
  return (
    <div className="post-comments">
      <div className="pr-5">
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
      <div>
        <Dropdown>
          <Dropdown.Toggle className="menu-toggle">
            <MoreHorizRoundedIcon style={{ color: "#999" }} />
          </Dropdown.Toggle>
          <Dropdown.Menu className="p-0">
            {CommentDropdownItems.map((item) => {
              return <DropdownItem label={item.Label} Icon={item.Icon} />;
            })}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}

export default PostComments;
