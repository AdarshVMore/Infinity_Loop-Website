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
          <a href="#">How it works</a>
        </li>
        <li>
          <a href="#">Roadmap</a>
        </li>
        <li>
          <a href="#">Tokonomics</a>
        </li>
        <li>
          <a href="#">DEX</a>
        </li>
        <li>
          <a href="#">Loop Network</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
