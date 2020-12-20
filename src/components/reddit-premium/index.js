import React from "react";
import SecurityIcon from "@material-ui/icons/Security";
import { Button } from "react-bootstrap";
import "./style.css";

function RedditPremium() {
  return (
    <div className="reddit-premium-container">
      <div className="mr-2">
        <SecurityIcon style={{ color: "#FF4500" }} />
      </div>
      <div className="reddit-premium-content">
        <span className="font-weight-bold">Reddit Premium</span>
        <span>The best Reddit experience,</span>
        <span>with monthly Coins</span>
      </div>
      <div>
        <Button className="reddit-premium-try-now-btn text-uppercase" size="sm">
          Try now
        </Button>
      </div>
    </div>
  );
}

export default RedditPremium;
