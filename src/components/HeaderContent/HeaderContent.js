import React from "react";

import StyledHeaderContent from "./HeaderContent.styled";

import seaImg from "../../assets/sea.jpg";

import Button from "../Button";

const HeaderContent = () => {
  return (
    <StyledHeaderContent>
      <div>
        <h2>
          Welcome to <strong>Tutorialzine</strong>!
        </h2>
        <p>
          We are a community of talented developers who learn together. We have
          an ever-growing library of high-quality tutorials and articles that
          you can read completely for free!
        </p>
        <Button>Browse Content</Button>
      </div>
      <img src={seaImg} alt="sea_photo" />
    </StyledHeaderContent>
  );
};

export default HeaderContent;
