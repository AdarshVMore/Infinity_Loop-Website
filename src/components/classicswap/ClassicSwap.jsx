import React, { useState, useEffect } from "react";
import "./classicswap.css";
import SimpleSwap from "../simpleswap/SimpleSwap";
import ExchangeCharts from "../classicswap/ExchangeCharts";

function ClassicSwap() {
  const [selectedToken, setSelectedToken] = useState(null);

  const handleTokenSelect = (token) => {
    setSelectedToken(token);
  };

  return (
    <div className="MainContainer">
      <div className="left-section" style={{ width: "800px", color: "white" }}>
        <ExchangeCharts selectedToken={selectedToken} />
      </div>
      <div className="right-section" style={{ color: "white" }}>
        <SimpleSwap onTokenSelect={handleTokenSelect} />
      </div>
    </div>
  );
}

export default ClassicSwap;
