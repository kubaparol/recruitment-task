import React from "react";
import PropTypes from "prop-types";

import StyledFooter from "./Footer.styled";

import List from "../List";

const Footer = (props) => {
  return (
    <StyledFooter>
      <h3>A community that learns together.</h3>
      <List items={props.items} />
      <div>
        <p>
          Copyright &copy; <a href="/">Zine EOOD</a>
        </p>
        <span>All Rights Reserved.</span>
      </div>
      <List items={props.shareButtons} />
    </StyledFooter>
  );
};

Footer.propTypes = {
  items: PropTypes.array,
  shareButtons: PropTypes.array,
};

export default Footer;
