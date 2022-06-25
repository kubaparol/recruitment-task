import React from "react";

import StyledLatestArticles from "./LatestArticles.styled";

import gitImg from "../../assets/gitTips.png";
import mlImg from "../../assets/machinelearning.png";
import asyncImg from "../../assets/asyncawait.png";
import vscImg from "../../assets/vscode.png";
import freebieImg from "../../assets/freebie.jpg";
import jsgamesImg from "../../assets/jsgames.png";

import Button from "../Button";

const LatestArticles = () => {
  const articles = [
    {
      url: "/",
      image: gitImg,
      description: "Useful Git Tips that Every Developer Should Know",
      tag: "Git",
      tagUrl: "/",
    },
    {
      url: "/",
      image: mlImg,
      description: "10 Machine Learning Examples in JavaScript",
      tag: "JavaScript",
      tagUrl: "/",
    },
    {
      url: "/",
      image: asyncImg,
      description: "JavaScript Async/Await Explained in 10 Minutes",
      tag: "JavaScript",
      tagUrl: "/",
    },
    {
      url: "/",
      image: vscImg,
      description: "15 Essential Plugins for Visual Studio Code",
      tag: "Resources",
      tagUrl: "/",
    },
    {
      url: "/",
      image: freebieImg,
      description: "Freebie: 4 Bootstrap Gallery Templates",
      tag: "Freebie",
      tagUrl: "/",
    },
    {
      url: "/",
      image: jsgamesImg,
      description: "10 Amazing JavaScript Games In Under 13kB Code",
      tag: "JavaScript",
      tagUrl: "/",
    },
  ];

  const renderArticlesList = articles.map((article) => {
    return (
      <article>
        <a href={article.url}>
          <div style={{ backgroundImage: `url(${article.image})` }} />
        </a>
        <p>
          <a href={article.url}>{article.description}</a>
        </p>
        <p>
          <a href={article.tagUrl}>{article.tag}</a>
        </p>
      </article>
    );
  });
  return (
    <StyledLatestArticles>
      <header>
        <h2>Latest Articles</h2>
      </header>
      <div>{renderArticlesList}</div>
      <div>
        <Button id="article">See all articles</Button>
      </div>
    </StyledLatestArticles>
  );
};

export default LatestArticles;
