import React from "react";
import VCListItem from "../VCListItem";
import { Widgets } from "../../reddit";
import { Wrapper } from "../../theme/Wrapper";
import { useSelector } from "react-redux";
import "./style.css";

function VideoCommunities() {
  const darkThemeEnabled = useSelector((state) => state?.darkThemeEnabled);
  return (
    <Wrapper
      className="VC-list-items"
      style={{ border: darkThemeEnabled ? "1px solid #333" : "1px solid #eee" }}
    >
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
    </Wrapper>
  );
}

export default VideoCommunities;
