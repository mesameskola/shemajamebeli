import React from "react";
import "./Header.css";

const links = [
  {
    title: "About,",
    link: "./about",
  },
  {
    title: "Experiences,",
    link: "/Experiences",
  },
  {
    title: "Email",
    link: "/Email",
  },
];

const Header = () => {
  return (
    <header>
      <h1 className="headerName">ROSE</h1>
      <nav>
        <ul className="headerListBox">
          <li className="headerList">
            {links.map((link, index) => (
              <a href={link.link} key={index} className="headerLinks">
                {link.title}
              </a>
            ))}
          </li>
        </ul>
      </nav>
      <hr className="headerLine" />
    </header>
  );
};

export default Header;
