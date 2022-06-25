import React from "react";

import StyledMainContent from "./MainContent.styled";

import Button from "../Button";

const MainContent = () => {
  return (
    <StyledMainContent>
      <header>
        <h2>Dev Awesome</h2>
        <p>
          A weekly newsletter full of programming news, cool libraries, and
          productivity tips. Subscribe now and join over <b>80k developers</b>!
        </p>
        <Button id="mainContent">Join dev awesome</Button>
      </header>
      <div />
    </StyledMainContent>
  );
};

export default MainContent;
