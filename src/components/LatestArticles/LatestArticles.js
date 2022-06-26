import React from "react";
import PropTypes from "prop-types";

import StyledLatestArticles from "./LatestArticles.styled";

import Button from "../Button";

const LatestArticles = (props) => {
  const renderArticlesList = props.articles.map((article, index) => {
    return (
      <article key={index}>
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

LatestArticles.propTypes = {
  articles: PropTypes.array,
};

export default LatestArticles;
