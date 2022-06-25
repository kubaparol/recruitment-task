import React from "react";

import StyledFooter from "./Footer.styled";

import fbIcon from "../../assets/fb-icon.png";
import twitterIcon from "../../assets/twitter-icon.png";
import githubIcon from "../../assets/github-icon.png";

import List from "../List";

const Footer = () => {
  const items = [
    { text: "Article License", url: "/" },
    { text: "Terms and Conditions", url: "/" },
    { text: "Privacy Policy", url: "/" },
    { text: "Contact Form", url: "/" },
    { text: "The Book", url: "/" },
  ];
  const shareButtons = [
    { img: fbIcon, url: "/" },
    { img: twitterIcon, url: "/" },
    { img: githubIcon, url: "/" },
  ];
  return (
    <StyledFooter>
      <h3>A community that learns together.</h3>
      <List items={items} />
      <div>
        <p>
          Copyright &copy; <a href="/">Zine EOOD</a>
        </p>
        <span>All Rights Reserved.</span>
      </div>
      <List items={shareButtons} />
    </StyledFooter>
  );
};

export default Footer;
