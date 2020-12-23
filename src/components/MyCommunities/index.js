import React from "react";
import InlineIconText from "../InlineIconText";
import { Sidebar } from "../../reddit";

function MyCommunities() {
  return (
    <div>
      {Sidebar.Communities.map((item) => {
        return (
          <InlineIconText
            label={item.Label}
            Icon={item.Icon}
            color={item.Color}
            community
          />
        );
      })}
    </div>
  );
}

export default MyCommunities;
