import React from "react";
import "./hero.css";
import car from "../../assets/images/car2.png";

function Hero() {
  return (
    <div className="hero">
      <div className="left">
        <div className="heading days-one">
          <p>
            Experience <br /> Racing in whole new Dimension
          </p>
        </div>
        <div className="sub-heading gray">
          <p>Loops of Infinity puts You in the Driver's seat</p>
        </div>
        <div className="btns">
          <button className="register-btn">Register</button>
          <button className="join-btn">Join Waitlist</button>
        </div>
      </div>
      <div className="right">
        <img src={car} alt="car" />
        <div className="blur"></div>
      </div>
    </div>
  );
}

export default Hero;
