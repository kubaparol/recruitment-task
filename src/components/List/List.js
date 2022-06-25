import React from "react";

import StyledList from "./List.styled";

import ListItem from "./../ListItem";

const List = (props) => {
  const renderItems = props.items.map((item, index) => (
    <ListItem url={item.url} text={item.text} key={index} img={item.img} />
  ));
  return <StyledList {...props}>{renderItems}</StyledList>;
};

export default List;
