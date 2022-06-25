import React from "react";

import Header from "../components/Header";
import HeaderContent from "../components/HeaderContent";
import LatestArticles from "../components/LatestArticles";
import MainContent from "../components/MainContent";

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <HeaderContent />
        <LatestArticles />
        <MainContent />
      </main>
    </>
  );
};

export default HomePage;
