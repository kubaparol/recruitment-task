import React from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import StyledButton from "./Button.styled";

const Button = (props) => {
  return (
    <StyledButton {...props}>
      {props.icon ? <FontAwesomeIcon icon={props.icon} /> : null}
      {props.children}
    </StyledButton>
  );
};

Button.propTypes = {
  id: PropTypes.oneOf(["bars", "article", "mainContent", "close"]),
};

export default Button;
