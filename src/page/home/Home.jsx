import React from "react";
import Footer from "../../components/Footer";
import "./Home.css";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import Hero from "../../components/Hero/Hero";

const Home = () => {
  return (
    <div className="conteiner">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
};

export default Home;
