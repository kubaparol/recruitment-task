import React from "react";

import Header from "../components/Header";
import HeaderContent from "../components/HeaderContent";
import LatestArticles from "../components/LatestArticles";

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <HeaderContent />
        <LatestArticles />
      </main>
    </>
  );
};

export default HomePage;
