import React from "react";
import "./work.css";
import work1 from "../../assets/images/work1.jpg";
import work2 from "../../assets/images/work2.png";
import work3 from "../../assets/images/work3.jpg";

function Works() {
  return (
    <div className="work" id="works">
      <div className="blur"></div>

      <div className="heading days-one">How it Works</div>
      <div className="info gray">
        The LOOP OF INFINITY is more than just a racing game - it's an entire
        ecosystem designed to empower both players and creators alike .
        Marketplace will allow creators to sell their unique designs and assets
        to other players
      </div>
      <div className="all-work">
        <div className="each-work">
          <div className="img">
            <img src={work1} alt="" />
          </div>
          <div className="step gray">Register</div>
          <div className="text">
            Register yourself and connect your wallet to enter into the game
          </div>
        </div>
        <div className="each-work">
          <div className="img">
            <img src={work2} alt="" />
          </div>
          <div className="step gray">Play</div>
          <div className="text">
            Deposit LOI token in the game to participate in the tournaments, Buy
            cars and Modifications
          </div>
        </div>
        <div className="each-work">
          <div className="img">
            <img src={work3} alt="" />
          </div>
          <div className="step gray">Earn</div>
          <div className="text">
            Enter in the race compete with others complete missions and earn the
            reward
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;
