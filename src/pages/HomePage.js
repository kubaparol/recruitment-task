import React from "react";

import Header from "../components/Header";
import HeaderContent from "../components/HeaderContent";
import LatestArticles from "../components/LatestArticles";
import MainContent from "../components/MainContent";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <HeaderContent />
        <LatestArticles />
        <MainContent />
        <Footer />
      </main>
    </>
  );
};

export default HomePage;
