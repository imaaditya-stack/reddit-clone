import React from "react";
import "./style.css";
import { FormControl } from "react-bootstrap";
import Feeds from "../../components/reddit-feeds";
import Communities from "../../components/my-communities";
import Others from "../../components/siderbar-other";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="p-3">
        <FormControl
          type="text"
          placeholder="Filter"
          className="search-box-input mt-3 pt-2"
          size="sm"
        />
      </div>
      <p className="list-heading">Reddit Feeds</p>
      <Feeds />
      <p className="list-heading">My Communities</p>
      <Communities />
      <p className="list-heading">Other</p>
      <Others />
    </div>
  );
}

export default Sidebar;
