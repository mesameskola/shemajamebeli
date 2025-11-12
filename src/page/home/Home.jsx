import React from "react";
import Footer from "../../components/Footer/Footer";
import "./Home.css";
import Header from "../../components/Header/Header";

import Hero from "../../components/Hero/Hero";
import SectionText from "../../components/SectionText/SectionText";
import Menu from "../../components/Menu/Menu";
import LastSection from "../../components/LastSection/LastSection";

const Home = () => {
  return (
    <div className="conteiner">
      <Header />
      <Hero />
      <SectionText />
      <Menu />
      <LastSection />
      <Footer />
    </div>
  );
};

export default Home;
