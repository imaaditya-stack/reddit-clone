import React from "react";
import InlineIconText from "../InlineIconText";
import { Sidebar } from "../../reddit";

function Others() {
  return (
    <div>
      {Sidebar.Other.map((item) => {
        return (
          <InlineIconText
            label={item.Label}
            Icon={item.Icon}
            color={item.Color}
          />
        );
      })}
    </div>
  );
}

export default Others;
