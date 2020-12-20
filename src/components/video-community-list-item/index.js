import React from "react";
import "./style.css";
import { Button } from "react-bootstrap";
import "./style.css";

function VCListItem({ imgSrc, label, membersCount }) {
  return (
    <div className="VC-container">
      <div className="d-flex flex-wrap">
        <img src={imgSrc} alt="" className="img-fluid VC-list-image mr-2" />
        <div className="members-container">
          <span className="font-weight-bold">{label}</span>
          <span>
            {membersCount}
            {"    "}members
          </span>
        </div>
      </div>
      <div className="join-btn">
        <Button size="sm" className="btn-block text-uppercase">
          join
        </Button>
      </div>
    </div>
  );
}

export default VCListItem;
