import React from "react";
import "./style.css";
import { FormControl } from "react-bootstrap";
import Feeds from "../../components/Feeds";
import MyCommunities from "../../components/MyCommunities";
import Others from "../../components/Other";
import { Wrapper } from "../../theme/Wrapper";
import { useSelector } from "react-redux";

function SidebarContainer() {
  const darkThemeEnabled = useSelector((state) => state?.darkThemeEnabled);
  return (
    <Wrapper className="sidebar">
      <div className="p-3">
        <FormControl
          type="text"
          placeholder="Filter"
          className={`${!darkThemeEnabled && "search-box-input"}`}
          size="sm"
          style={{ backgroundColor: "#131621", border: "1px solid #333" }}
        />
      </div>
      <p className="list-heading">Reddit Feeds</p>
      <Feeds />
      <p className="list-heading">My Communities</p>
      <MyCommunities />
      <p className="list-heading">Other</p>
      <Others />
    </Wrapper>
  );
}

export default SidebarContainer;
