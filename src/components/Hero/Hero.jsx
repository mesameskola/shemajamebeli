import React from "react";
import Button from "../Button/Button";
import WorkTime from "../WorkTime/WorkTime";
import "./Hero.css"
const Hero = () => {
  return (
    <section>
      <div className="sectionBox">
        <div className="btnBox">
          <h2 className="heroTitle">Cozy meets refined on Balmain's waterfront.</h2>
          <div className="btns">
            <Button text="Book on Resy"/>
            <Button text="Dining Experiences" />
          </div>
        </div>
        <div className="timeBox">
            <WorkTime/>
        </div>
      </div>
      <div className="heroBg"></div>
    </section>
  );
};

export default Hero;
