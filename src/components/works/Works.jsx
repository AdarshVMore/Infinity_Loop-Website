import React from "react";
import "./work.css";
import work1 from "../../assets/images/work1.jpg";
import work2 from "../../assets/images/work2.png";
import work3 from "../../assets/images/work3.jpg";

function Works() {
  return (
    <div className="work">
      <div className="blur"></div>

      <div className="heading days-one">How it Works</div>
      <div className="info gray">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non distinctio
        placeat harum vero quam porro. Lorem ipsum dolor sit amet.
      </div>
      <div className="all-work">
        <div className="each-work">
          <div className="img">
            <img src={work1} alt="" />
          </div>
          <div className="step gray">Step 1</div>
          <div className="text">Lorem ipsum dolor sit amet.</div>
        </div>
        <div className="each-work">
          <div className="img">
            <img src={work2} alt="" />
          </div>
          <div className="step gray">Step 2</div>
          <div className="text">Lorem ipsum dolor sit amet.</div>
        </div>
        <div className="each-work">
          <div className="img">
            <img src={work3} alt="" />
          </div>
          <div className="step gray">Step 3</div>
          <div className="text">Lorem ipsum dolor sit amet.</div>
        </div>
      </div>
    </div>
  );
}

export default Works;
