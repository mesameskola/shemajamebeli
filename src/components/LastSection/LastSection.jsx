import React from "react";
import "./LastSection.css";
import Button from "../Button/Button";

const LastSection = () => {
  return (
    <div className="lastSection">
      <h2>
        Experience the warmth of Balmain's waterfront at Rose. Where the
        everyday is elevated to the extraordinary.
      </h2>
      <div className="btns">
        <Button text="Book on Resy" />
        <Button text="Dining Experiences" />
      </div>
    </div>
  );
};

export default LastSection;
