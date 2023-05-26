import React from "react";
import "./nav.css";
import logo from "../../assets/images/logo.png";

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="links">
        <li>
          <a href="#works">How it works</a>
        </li>
        <li>
          <a href="#roadmap">Roadmap</a>
        </li>
        <li>
          <a href="#tokonomics">Tokonomics</a>
        </li>
        <li>
          <a href="/dex">DEX</a>
        </li>
        <li>
          <a href="#">Loop Network</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
