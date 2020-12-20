import React from "react";
import InlineIconText from "../inline-icon-text";
import HomeIcon from "@material-ui/icons/Home";
import BarChartIcon from "@material-ui/icons/BarChart";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import FormatListNumberedIcon from "@material-ui/icons/FormatListNumbered";
import MissedVideoCallIcon from "@material-ui/icons/MissedVideoCall";

function Feeds() {
  return (
    <div>
      <InlineIconText label="Home" Icon={HomeIcon} />
      <InlineIconText label="Popular" Icon={TrendingUpIcon} />
      <InlineIconText label="All" Icon={BarChartIcon} />
      <InlineIconText label="Top Communities" Icon={FormatListNumberedIcon} />
      <InlineIconText label="Reddit Live" Icon={MissedVideoCallIcon} />
    </div>
  );
}

export default Feeds;
