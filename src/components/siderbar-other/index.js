import React from "react";
import InlineIconText from "../inline-icon-text";
import EditIcon from "@material-ui/icons/Edit";
import CopyrightIcon from "@material-ui/icons/Copyright";
import SecurityIcon from "@material-ui/icons/Security";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import PersonIcon from "@material-ui/icons/Person";

function Others() {
  return (
    <div>
      <InlineIconText label="User Settings" Icon={PersonIcon} color="#999" />
      <InlineIconText label="Messages" Icon={EmailRoundedIcon} color="#999" />
      <InlineIconText label="Create Post" Icon={EditIcon} />
      <InlineIconText label="Coins" Icon={CopyrightIcon} color="orange" />
      <InlineIconText label="Premium" Icon={SecurityIcon} color="#FF4500" />
    </div>
  );
}

export default Others;
