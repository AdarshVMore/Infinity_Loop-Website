import React, { useState } from "react";
import "../../components/nav/nav.css";
import logo from "../../assets/images/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const PoliciesNav = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/">
          <img src={logo} alt="Logo" />
        </a>
      </div>
      <div
        onClick={() => {
          setShowNavbar(true);
        }}
        className={!showNavbar ? "toggle-open" : "hide"}
      >
        <GiHamburgerMenu size={24} />
      </div>
      <ul className={showNavbar ? "links active" : "links"}>
        <li>
          <div
            className="toggle-close"
            onClick={() => {
              setShowNavbar(false);
            }}
          >
            <AiOutlineClose color="white" size={24} />
          </div>
        </li>
        <li>
          <a href="#AML">Anti-Money Laundering</a>
        </li>
        <li>
          <a href="#privacy">Privacy Policy</a>
        </li>
        <li>
          <a href="#terms-of-services">Terms of Services</a>
        </li>
        <li>
          {/* <a href="https://loopofinfinitydex.netlify.app/dex">LoopSwap</a> */}
          <a href="#disclaimer">Disclaimer</a>
        </li>
      </ul>
    </nav>
  );
};

export default PoliciesNav;
