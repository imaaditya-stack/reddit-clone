import React from "react";
import VCListItem from "../VCListItem";
import { Widgets } from "../../reddit";
import "./style.css";

function VideoCommunities() {
  return (
    <div className="VC-list-items">
      <p className="font-weight-bold">Top Video Communities</p>
      {Widgets.VideoCommunity.Items.map((item) => {
        return (
          <VCListItem
            label={item.Label}
            imgSrc={item.Image}
            membersCount={item.members}
          />
        );
      })}
    </div>
  );
}

export default VideoCommunities;
