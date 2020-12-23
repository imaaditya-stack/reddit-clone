import React from "react";
import SecurityIcon from "@material-ui/icons/Security";
import { Button } from "react-bootstrap";
import "./style.css";

function RedditPremium() {
  return (
    <div className="reddit_premium">
      <div className="mr-2">
        <SecurityIcon style={{ color: "#FF4500" }} />
      </div>
      <div className="reddit_premium__content">
        <span className="font-weight-bold">Reddit Premium</span>
        <span>The best Reddit experience,</span>
        <span>with monthly Coins</span>
      </div>
      <div>
        <Button className="reddit_premium__try-now-btn" size="sm">
          Try now
        </Button>
      </div>
    </div>
  );
}

export default RedditPremium;
