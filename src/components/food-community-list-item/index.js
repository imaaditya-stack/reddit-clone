import React from "react";
import "./style.css";

function FCListItem({ imgSrc, label }) {
  return (
    <div className="border-bottom">
      <div className="d-flex py-2 pl-4 align-items-center">
        <div>
          <img src={imgSrc} alt="" className="img-fluid FC-list-image mr-3" />
        </div>
        <span className="home-text font-weight-bold">{label}</span>
      </div>
    </div>
  );
}

export default FCListItem;
