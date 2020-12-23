import React from "react";
import "./style.css";
import Advertisement from "../../components/Advertisement";
import RedditPremium from "../../components/RedditPremium";
import ChannelWidget from "../../components/ChannelWidget";
import Footer from "../../components/Footer";
import Community from "../../components/Community";
import VideoCommunities from "../../components/VideoCommunities";
import { Widgets } from "../../reddit";

function WidgetContainer() {
  return (
    <div className="widgets">
      <Community />
      <Advertisement adImage={Widgets.Advertisement_1} />
      <RedditPremium />
      <VideoCommunities />
      <ChannelWidget
        label={Widgets.CurrentChannelInfo.Label}
        content={Widgets.CurrentChannelInfo.Content}
      />
      <Advertisement adImage={Widgets.Advertisement_2} />
      <Footer />
    </div>
  );
}

export default WidgetContainer;
