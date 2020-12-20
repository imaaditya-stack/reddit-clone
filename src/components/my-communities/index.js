import React from "react";
import InlineIconText from "../inline-icon-text";
import RedditIcon from "@material-ui/icons/Reddit";
import PublicIcon from "@material-ui/icons/Public";
import FiberSmartRecordRoundedIcon from "@material-ui/icons/FiberSmartRecordRounded";
import LayersRoundedIcon from "@material-ui/icons/LayersRounded";
import ShoppingBasketRoundedIcon from "@material-ui/icons/ShoppingBasketRounded";

function Communities() {
  return (
    <div>
      <InlineIconText
        label="r/announcements"
        Icon={RedditIcon}
        color="#FF4500"
        community
      />
      <InlineIconText label="r/devops" Icon={PublicIcon} community />
      <InlineIconText label="r/docker" Icon={PublicIcon} community />
      <InlineIconText
        label="r/sonarr"
        Icon={FiberSmartRecordRoundedIcon}
        community
      />
      <InlineIconText label="r/react" Icon={LayersRoundedIcon} community />
      <InlineIconText
        label="r/synology"
        Icon={ShoppingBasketRoundedIcon}
        community
      />
    </div>
  );
}

export default Communities;
