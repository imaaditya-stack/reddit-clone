import React from "react";
import { Button } from "react-bootstrap";
import CommunityItem from "../CommunityItem";
import { Widgets } from "../../reddit";
import { Wrapper } from "../../theme/Wrapper";
import { useSelector } from "react-redux";
import "./style.css";

function Community() {
  const darkThemeEnabled = useSelector((state) => state?.darkThemeEnabled);
  return (
    <Wrapper
      className="community"
      style={{ border: darkThemeEnabled ? "1px solid #222" : "1px solid #eee" }}
    >
      <div className="community__banner">
        <img
          src={Widgets.Community.Banner}
          alt=""
          className="img-fluid community__banner-image"
        />
        <p className="community__banner-text">{Widgets.Community.Title}</p>
      </div>
      <div className="list-items">
        {Widgets.Community.Items.map((item) => {
          return <CommunityItem imgSrc={item.Image} label={item.Label} />;
        })}
      </div>
      <div
        style={{
          paddingRight: 10,
          paddingLeft: 10,
          paddingBottom: 20,
          paddingTop: 10,
        }}
      >
        <Button className="community__button btn-block">View all</Button>
        <div className="d-flex justify-content-between mt-3">
          {Widgets.Community.InlineButtons.map((btn) => {
            return (
              <Button
                variant="light"
                size="sm"
                className="community__inline-btn"
              >
                {btn}
              </Button>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
}

export default Community;
