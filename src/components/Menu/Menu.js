import React from "react";
import PropTypes from "prop-types";

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

Menu.propTypes = {
  items: PropTypes.array,
  setState: PropTypes.func,
};

export default Menu;
