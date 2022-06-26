import React from "react";
import PropTypes from "prop-types";

import StyledListitem from "./ListItem.styled";

const ListItem = (props) => {
  return (
    <StyledListitem>
      <a href={props.url}>
        {props.text}
        {props.img && <img src={props.img} alt="img" />}
      </a>
    </StyledListitem>
  );
};

ListItem.propTypes = {
  url: PropTypes.string,
  text: PropTypes.string,
  img: PropTypes.string,
};

export default ListItem;
