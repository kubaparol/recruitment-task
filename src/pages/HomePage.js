import React from "react";

import Header from "../components/Header";
import HeaderContent from "../components/HeaderContent";
import LatestArticles from "../components/LatestArticles";
import MainContent from "../components/MainContent";
import Footer from "../components/Footer";

import navItems from "../data/navItems";
import latestArticles from "../data/latestArticles";
import { footerItems, shareButtons } from "../data/footerItems";

const HomePage = () => {
  return (
    <>
      <div style={{ backgroundColor: "#1DA7DA" }}>
        <Header items={navItems} />
        <HeaderContent />
      </div>
      <main style={{ backgroundColor: "#FFFFFF" }}>
        <LatestArticles articles={latestArticles} />
        <MainContent />
        <Footer items={footerItems} shareButtons={shareButtons} />
      </main>
    </>
  );
};

export default HomePage;
