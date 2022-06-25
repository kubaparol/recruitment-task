import React from "react";

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

export default SearchBar;
