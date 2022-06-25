import React from "react";

import StyledListitem from "./ListItem.styled";

const ListItem = (props) => {
  return (
    <StyledListitem>
      <a href={props.url}>{props.text}</a>
    </StyledListitem>
  );
};

export default ListItem;
