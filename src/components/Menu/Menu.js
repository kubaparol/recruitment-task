import React from "react";

import { faXmark } from "@fortawesome/free-solid-svg-icons";

import Button from "../Button";
import List from "../List";

import StyledMenu from "./Menu.styled";

const Menu = ({ items, setState }) => {
  return (
    <StyledMenu>
      <div>
        <p>
          tutorial<span>zine</span>
        </p>
        <Button icon={faXmark} id="close" onClick={() => setState(false)} />
      </div>
      <List items={items} />
      <div>
        <Button>Join Dev Awesome</Button>
      </div>
    </StyledMenu>
  );
};

export default Menu;
