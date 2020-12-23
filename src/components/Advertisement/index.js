import React from "react";
import { Image } from "react-bootstrap";
import "./style.css";

function Advertisement({ adImage }) {
  return (
    <div className="ad-container">
      <span className="text-uppercase ad-title ml-2">Advertisement</span>
      <div className="ad-banner">
        <Image src={adImage} className="img-fluid" />
      </div>
    </div>
  );
}

export default Advertisement;
