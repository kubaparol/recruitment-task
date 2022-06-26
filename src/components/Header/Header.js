import React, { useState } from "react";
import PropTypes from "prop-types";

import StyledHeader from "./Header.styled";

import Button from "../Button";
import List from "../List";
import SearchBar from "../SearchBar";
import Menu from "../Menu";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Header = (props) => {
  const [searchBarOpen, setSearchBarOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <StyledHeader>
        <div>
          <div>
            <a href="/">
              Tutorial<span>zine</span>
            </a>
          </div>
          <List items={props.items} />
        </div>
        <Button
          icon={faBars}
          id="bars"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <div>
          <Button
            icon={faMagnifyingGlass}
            onClick={() => setSearchBarOpen(!searchBarOpen)}
          />
          <Button>Join Dev Awesome</Button>
        </div>
      </StyledHeader>
      {searchBarOpen ? <SearchBar setState={setSearchBarOpen} /> : null}
      {menuOpen ? <Menu setState={setMenuOpen} items={props.items} /> : null}
    </>
  );
};

Header.propTypes = {
  items: PropTypes.array,
};

export default Header;
