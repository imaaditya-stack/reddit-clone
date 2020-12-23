import React from "react";

function CommunityItem({ imgSrc, label }) {
  return (
    <div className="FC_List_Item border-bottom">
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
