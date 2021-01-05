import React from "react";
import { useSelector } from "react-redux";

function CommunityItem({ imgSrc, label }) {
  const darkThemeEnabled = useSelector((state) => state?.darkThemeEnabled);
  return (
    <div
      className="FC_List_Item"
      style={{
        borderBottom: darkThemeEnabled ? "none" : "1px solid #ccc",
      }}
    >
      <div className="d-flex py-2 pl-4 align-items-center">
        <div>
          <img
            src={imgSrc}
            alt=""
            className="img-fluid FC-list-image mr-3"
            style={{ width: 35 }}
          />
        </div>
        <span className="font-weight-bold" style={{ fontSize: 14 }}>
          {label}
        </span>
      </div>
    </div>
  );
}

export default CommunityItem;
