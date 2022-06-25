import React from "react";

import StyledMainContent from "./MainContent.styled";

import seaImg from "../../assets/sea.jpg";

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
      <img src={seaImg} alt="sea_image" />
    </StyledMainContent>
  );
};

export default MainContent;
