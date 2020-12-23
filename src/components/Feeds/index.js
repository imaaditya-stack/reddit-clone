import React from "react";
import InlineIconText from "../InlineIconText";
import { Sidebar } from "../../reddit";

function Feeds() {
  return (
    <div>
      {Sidebar.Feeds.map((feed) => {
        return <InlineIconText label={feed.Label} Icon={feed.Icon} />;
      })}
    </div>
  );
}

export default Feeds;
