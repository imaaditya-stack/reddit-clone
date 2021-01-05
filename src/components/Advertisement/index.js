import React from "react";
import { Image } from "react-bootstrap";
import { Wrapper } from "../../theme/Wrapper";
import { useSelector } from "react-redux";
import "./style.css";

function Advertisement({ adImage }) {
  const darkThemeEnabled = useSelector((state) => state?.darkThemeEnabled);
  return (
    <Wrapper
      className="ad-container"
      style={{ border: !darkThemeEnabled ? "none" : "1px solid #222" }}
    >
      <span className="text-uppercase ad-title ml-2">Advertisement</span>
      <div className="ad-banner">
        <Image src={adImage} className="img-fluid" />
      </div>
    </Wrapper>
  );
}

export default Advertisement;
