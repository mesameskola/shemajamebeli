import React from "react";
import "./menu.css";

const prices = [
  {
    title:
      "Warm house-baked sourdough with whipped truffle butter & Maldon sea salt",
    price: "$18",
  },
  {
    title:
      "Hummus, whipped feta, and roasted red pepper dip with grilled pita & crostini",
    price: "$18",
  },
  {
    title:
      "A selection of three artisanal cheeses, fig jam, honeycomb, dried fruit, & nuts",
    price: "$18",
  },
  {
    title:
      "Prosciutto di Parma, chorizo, Manchego, Brie, smoked Gouda, olives, & house pickles",
    price: "$18",
  },
  {
    title:
      "Creamy burrata, basil oil, balsamic glaze, cherry tomatoes, & toasted sourdough",
    price: "$18",
  },
  {
    title: "Baby arugula, mission figs, goat cheese, Marcona almonds",
    price: "$18",
  },
];

const sharings = [
  {
    title:
      "Warm house-baked sourdough with whipped truffle butter & Maldon sea salt",
    price: "$18",
  },
  {
    title:
      "Hummus, whipped feta, and roasted red pepper dip with grilled pita & crostini",
    price: "$18",
  },
  {
    title:
      "Creamy burrata, basil oil, balsamic glaze, cherry tomatoes, & toasted sourdough",
    price: "$18",
  },
  {
    title: "Baby arugula, mission figs, goat cheese, Marcona almonds",
    price: "$18",
  },
];
const Menu = () => {
  return (
    <>
      <hr className="menuHR" />
      <section className="menuBox">
        <article className="article">
          <h3 className="menuTiTle">Menu</h3>
          <p className="menuSummer">Summer 2025</p>
        </article>
        <article className="article">
          <h3 className="menuTiTle">To start</h3>
          <div className="startSecondBox">
            <h4 className="menuTextTiTle">Oysters Mignonette</h4>
            <div className="halfBox">
              <p className="menuText">half-dozen for $12</p>
              <p className="menuText">dozen for $28</p>
            </div>
          </div>
        </article>
        <hr className="menuHR" />
        <section className="entrees">
          <h3 className="menuTiTle">Entrees</h3>
          <div className="">
            {prices.map((title, index) => (
              <div key={index} className="priceBox">
                <p className="menuText titleBox">{title.title}</p>
                <p className="menuText price">{title.price}</p>{" "}
              </div>
            ))}
          </div>
        </section>
        <hr className="menuHR" />

        <section className="sharing">
          <h3 className="menuTiTle">Sharing</h3>
          <div className="">
            {prices.map((sharing, index) => (
              <div key={index} className="priceBox">
                <p className="menuText titleBox">{sharing.title}</p>
                <p className="menuText price">{sharing.price}</p>
              </div>
            ))}
          </div>
        </section>
        <hr className="menuHR" />
      </section>
    </>
  );
};

export default Menu;
