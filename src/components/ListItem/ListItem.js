import React from "react";

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

export default ListItem;
