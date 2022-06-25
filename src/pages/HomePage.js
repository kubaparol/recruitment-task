import React from "react";

import Header from "../components/Header";
import HeaderContent from "../components/HeaderContent";
import LatestArticles from "../components/LatestArticles";
import MainContent from "../components/MainContent";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <div style={{ backgroundColor: "#1DA7DA" }}>
        <Header />
        <HeaderContent />
      </div>
      <main style={{ backgroundColor: "#FFFFFF" }}>
        <LatestArticles />
        <MainContent />
        <Footer />
      </main>
    </>
  );
};

export default HomePage;
