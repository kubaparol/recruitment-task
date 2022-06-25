import React from "react";

import StyledHeader from "./Header.styled";

import Button from "../Button";
import List from "../List";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const items = [{ text: "Articles", url: "/" }];
  return (
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
        <Button icon={faMagnifyingGlass} />
        <Button>Join Dev Awesome</Button>
      </div>
    </StyledHeader>
  );
};

export default Header;
