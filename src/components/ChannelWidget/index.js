import React from "react";
import "./style.css";
import { Image, Button } from "react-bootstrap";

function ChannelWidget({ label, content }) {
  return (
    <div className="widget-home">
      <Image
        src="https://www.redditstatic.com/desktop2x/img/id-cards/home-banner@2x.png"
        className="img-fluid"
      />
      <div className="d-flex align-items-end pl-2">
        <Image
          src="https://www.redditstatic.com/desktop2x/img/id-cards/snoo-home@2x.png"
          className="img-fluid"
          style={{ width: 40 }}
        />
        <p className="font-weight-bold ml-3">{label}</p>
      </div>
      <p className="py-1 pl-2 pr-1 widget-home__text">{content}</p>
      <div className="px-3 pb-3">
        <Button className="text-uppercase btn-block">create post</Button>
        <Button variant="outline-primary" className="text-uppercase btn-block">
          create community
        </Button>
      </div>
    </div>
  );
}

export default ChannelWidget;
