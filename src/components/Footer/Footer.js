import React from "react";

import StyledFooter from "./Footer.styled";

import { footerItems, shareButtons } from "../../data/footerItems";

import List from "../List";

const Footer = () => {
  return (
    <StyledFooter>
      <h3>A community that learns together.</h3>
      <List items={footerItems} />
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
