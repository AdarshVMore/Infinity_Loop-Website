import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../../assets/images/logo.png";

import { ConnectButton } from "@rainbow-me/rainbowkit";

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="/">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
      </a>

      <div className="connect-btn">
        <ConnectButton accountStatus="address" />
      </div>
    </nav>
  );
};

export default Navbar;
