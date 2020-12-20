import React from "react";
import "./style.css";
import FCListItem from "../../components/food-community-list-item";
import { Button } from "react-bootstrap";
import Advertisement from "../../components/advertisement";
import RedditPremium from "../../components/reddit-premium";
import VCListItem from "../../components/video-community-list-item";
import SidebarHome from "../../components/sidebar-home";
import Footer from "../../components/footer";

function Widgets() {
  return (
    <div className="widgets">
      <div className="food-community bg-white">
        <div className="food-community-banner">
          <img
            src="https://www.redditstatic.com/desktop2x/img/discovery/cookbooks-snoo.png"
            alt=""
            className="img-fluid banner-image"
          />
          <p className="banner-text">
            Food communities to <br />
            make you go mmmm
          </p>
        </div>
        <div className="FC-list-items">
          <FCListItem
            imgSrc="https://styles.redditmedia.com/t5_396ym/styles/communityIcon_wz7z085g3yw21.png"
            label="r/WeWantPlates"
          />
          <FCListItem
            imgSrc="https://styles.redditmedia.com/t5_2qls5/styles/communityIcon_ialza5j4f6m01.png"
            label="r/food"
          />
          <FCListItem
            imgSrc="https://styles.redditmedia.com/t5_396ym/styles/communityIcon_wz7z085g3yw21.png"
            label="r/GiftRecipes"
          />
          <FCListItem
            imgSrc="https://styles.redditmedia.com/t5_346di/styles/communityIcon_h0rnn4knibj41.png"
            label="r/Breadit"
          />
          <FCListItem
            imgSrc="https://styles.redditmedia.com/t5_396ym/styles/communityIcon_wz7z085g3yw21.png"
            label="r/steak"
          />
        </div>
        <div
          style={{
            paddingRight: 10,
            paddingLeft: 10,
            paddingBottom: 20,
            paddingTop: 10,
          }}
        >
          <Button className="FC-button btn-block">View all</Button>
          <div className="d-flex justify-content-between mt-3">
            <Button variant="light" size="sm" className="FC-buttons">
              Top
            </Button>
            <Button variant="light" size="sm" className="FC-buttons">
              Near You
            </Button>
            <Button variant="light" size="sm" className="FC-buttons">
              News
            </Button>
            <Button variant="light" size="sm" className="FC-buttons">
              Food
            </Button>
          </div>
        </div>
      </div>
      <Advertisement adImage="https://tpc.googlesyndication.com/simgad/4239531233628095037" />
      <RedditPremium />
      <div className="VC-list-items">
        <p className="font-weight-bold">Top Video Communities</p>
        <VCListItem
          label="r/funny"
          imgSrc="https://a.thumbs.redditmedia.com/kIpBoUR8zJLMQlF8azhN-kSBsjVUidHjvZNLuHDONm8.png"
          membersCount="34,717,533"
        />
        <VCListItem
          label="r/HighQualityGifs"
          imgSrc="https://b.thumbs.redditmedia.com/6dFf0Zrq_96sY5ZDg6rF_BbMqu41tFS8wyOWQAoX_xY.png"
          membersCount="2,384,375"
        />
        <VCListItem
          label="r/youtubehaiku"
          imgSrc="https://b.thumbs.redditmedia.com/Rtu2Mw0L-mx7AeYtHKkbAh75jQbgzy_Hk2UIlLeZFSs.png"
          membersCount="944,747"
        />
        <VCListItem
          label="r/RedditMasterClasses"
          imgSrc="https://b.thumbs.redditmedia.com/xMWJpYPqLqSK9R_afYkZSIZ3nefL8A3YHsSZzPHJpIM.png"
          membersCount="40,010"
        />
        <VCListItem
          label="r/likeus"
          imgSrc="https://b.thumbs.redditmedia.com/J_Q4zxlwp1j9KQIJxiwWc-ayp-lpmP2SKT4zZyO2R6M.png"
          membersCount="34,717,533"
        />
        <VCListItem
          label="r/holymyredbull"
          imgSrc="https://a.thumbs.redditmedia.com/sCO58TQf6brYMP1RIXghuRkkU77Acghaksqus6Uoh_0.png"
          membersCount="34,717,533"
        />
      </div>
      <SidebarHome />
      <Advertisement adImage="https://s0.2mdn.net/9099988/12102020-213429434-300x600.jpg" />
      <Footer />
    </div>
  );
}

export default Widgets;
