import React from "react";
import PropTypes from "prop-types";

import StyledList from "./List.styled";

import ListItem from "./../ListItem";

const List = (props) => {
  const renderItems = props.items.map((item, index) => (
    <ListItem url={item.url} text={item.text} key={index} img={item.img} />
  ));
  return <StyledList {...props}>{renderItems}</StyledList>;
};

List.propTypes = {
  items: PropTypes.array,
};

export default List;
