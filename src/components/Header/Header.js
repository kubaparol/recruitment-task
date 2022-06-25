import React, { useState } from "react";

import StyledHeader from "./Header.styled";

import Button from "../Button";
import List from "../List";
import SearchBar from "../SearchBar/SearchBar";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [searchBarOpen, setSearchBarOpen] = useState(false);
  const items = [{ text: "Articles", url: "/" }];
  return (
    <>
      <StyledHeader>
        <div>
          <div>
            <a href="/">
              Tutorial<span>zine</span>
            </a>
          </div>
          <List items={items} />
        </div>
        <Button icon={faBars} id="bars" />
        <div>
          <Button
            icon={faMagnifyingGlass}
            onClick={() => setSearchBarOpen(!searchBarOpen)}
          />
          <Button>Join Dev Awesome</Button>
        </div>
      </StyledHeader>
      {searchBarOpen ? <SearchBar setState={setSearchBarOpen} /> : null}
    </>
  );
};

export default Header;
