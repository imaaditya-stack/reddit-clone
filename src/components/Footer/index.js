import React from "react";
import { Wrapper } from "../../theme/Wrapper";
import "./style.css";
import { useSelector } from "react-redux";

function Footer() {
  const darkThemeEnabled = useSelector((state) => state?.darkThemeEnabled);
  return (
    <Wrapper
      className="footer-container"
      style={{ border: darkThemeEnabled ? "1px solid #555" : "1px solid #eee" }}
    >
      <div className="links-container">
        <ul>
          <li>Help</li>
          <li>Reddit App</li>
          <li>Reddit Coins</li>
          <li>Reddit Premium</li>
          <li>Reddit Gifts</li>
        </ul>
        <ul>
          <li>About</li>
          <li>Careers</li>
          <li>Press</li>
          <li>Advertise</li>
          <li>Blog</li>
          <li>Terms</li>
          <li>Content Policy</li>
          <li>Privacy Policy</li>
          <li>Mod Policy</li>
        </ul>
        <ul></ul>
      </div>
      <span>Reddit Inc © 2020. All rights reserved</span>
    </Wrapper>
  );
}

export default Footer;
