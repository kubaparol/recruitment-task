import React from "react";
import PropTypes from "prop-types";

import { faXmark } from "@fortawesome/free-solid-svg-icons";

import Button from "../Button";

import StyledSearchBar from "./SearchBar.styled";

const SearchBar = ({ setState }) => {
  return (
    <StyledSearchBar>
      <div>
        <input placeholder="Search..." />
        <Button icon={faXmark} id="close" onClick={() => setState(false)} />
      </div>
    </StyledSearchBar>
  );
};

SearchBar.propTypes = {
  setState: PropTypes.func,
};

export default SearchBar;
