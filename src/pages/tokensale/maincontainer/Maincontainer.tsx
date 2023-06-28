import React from "react";
import TokenSale from "../../../components/tokensale/TokenSale";
import Tokonomics from "../../../components/tokonomics/Tokonomics";
import Footer from "../../../components/footer/Footer";
import "./maincontainer.css";

function Maincontainer() {
  return (
    <div className="tokensale-maincontainer">
      <TokenSale />
      <Tokonomics />
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Maincontainer;
