import React from "react";
import "./hero.css";
import video from "../../assets/video/videoBG.mp4";
import videoMobile from "../../assets/video/videoMobile.mp4";

function Hero() {
  return (
    <div className="hero">
      <div className="video">
        <video autoPlay loop muted plays-inline className="bgc-video">
          <source src={video} />
        </video>
      </div>
      <div className="left">
        <div className="heading days-one">
          <p>
            <span>
              Rev your engines <br /> race to the <br /> future with <br /> Loop
              of Infinity
            </span>
          </p>
        </div>
        <div className="sub-heading gray">
          <p>
            <span>
              where gaming meets blockchain and losses meet their match!
            </span>
          </p>
        </div>
        <div className="hide-img">
          {/* <img src={car} alt="car" /> */}
          <video autoPlay loop muted plays-inline className="bgc-video">
            <source src={videoMobile} />
          </video>
        </div>
        <div className="btns">
          <button className="register-btn">PRE-IEO Token Sale</button>
          {/* <button className="join-btn">Join Waitlist</button> */}
        </div>
      </div>
      <div className="right">
        {/* <img src={car} alt="car" /> */}

        <div className="blur"></div>
      </div>
    </div>
  );
}

export default Hero;
