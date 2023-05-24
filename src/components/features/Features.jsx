import React from "react";
import "./features.css";
import svg1 from "../../assets/images/Icon.svg";
import svg2 from "../../assets/images/Icon-1.svg";
import svg3 from "../../assets/images/Icon-2.svg";
import feature from "../../assets/images/Feature Icon with circle.svg";
import feature1 from "../../assets/images/feature1.png";
import feature2 from "../../assets/images/feature2.jpg";

function Features() {
  return (
    <div className="features">
      <div className="top">
        <div className="heading days-one">Features</div>
        <p className="info gray">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magnam
          veniam accusantium sint odio optio dolore mollitia,
        </p>
        <div className="bottom">
          <div className="each 1">
            <div className="img">
              <img src={svg1} alt="" />
            </div>
            <div className="name">Earn Crypto</div>
            <div className="info gray">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis porro
            </div>
          </div>
          <div className="each 1">
            <div className="img">
              <img src={svg2} alt="" />
            </div>
            <div className="name">Decentralised</div>
            <div className="info gray">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis porro
            </div>
          </div>
          <div className="each 1">
            <div className="img">
              <img src={svg3} alt="" />
            </div>
            <div className="name">Rewards</div>
            <div className="info gray">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis porro
            </div>
          </div>
          <div className="blur"></div>
        </div>
      </div>
      <div className="each-feature">
        <div className="feature feature1">
          <div className="left">
            <div className="feature-no gray">FEATURE 1</div>
            <div className="feature-name days-one">Loss proof Dex</div>
            <div className="feature-info">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
              unde nobis non impedit laboriosam exercitationem.
            </div>
            <div className="feature-grid">
              <div className="feature-grid-each">
                <div className="feature-svg">
                  <img src={feature} alt="" />
                </div>
                <div className="feature-text">
                  <div className="heading">Lorem ipsum dolor sit.</div>
                  <div className="info">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </div>
                </div>
              </div>
              <div className="feature-grid-each">
                <div className="feature-svg">
                  <img src={feature} alt="" />
                </div>
                <div className="feature-text">
                  <div className="heading">Lorem ipsum dolor sit.</div>
                  <div className="info">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </div>
                </div>
              </div>
              <div className="feature-grid-each">
                <div className="feature-svg">
                  <img src={feature} alt="" />
                </div>
                <div className="feature-text">
                  <div className="heading">Lorem ipsum dolor sit.</div>
                  <div className="info">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </div>
                </div>
              </div>
              <div className="feature-grid-each">
                <div className="feature-svg">
                  <img src={feature} alt="" />
                </div>
                <div className="feature-text">
                  <div className="heading">Lorem ipsum dolor sit.</div>
                  <div className="info">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <img src={feature1} alt="" />
          </div>
        </div>
        <div className="feature feature2">
          <div className="blur"></div>

          <div className="right">
            <img src={feature2} alt="" />
          </div>
          <div className="left">
            <div className="feature-no gray">FEATURE 2</div>
            <div className="feature-name days-one">
              Loop Network Integration
            </div>
            <div className="feature-info">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              cupiditate
            </div>
            <div className="feature-grid">
              <div className="feature-grid-each">
                <div className="feature-svg">
                  <img src={feature} alt="" />
                </div>
                <div className="feature-text">
                  <div className="heading">Lorem ipsum dolor sit.</div>
                  <div className="info">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </div>
                </div>
              </div>
              <div className="feature-grid-each">
                <div className="feature-svg">
                  <img src={feature} alt="" />
                </div>
                <div className="feature-text">
                  <div className="heading">Lorem ipsum dolor sit.</div>
                  <div className="info">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </div>
                </div>
              </div>
              <div className="feature-grid-each">
                <div className="feature-svg">
                  <img src={feature} alt="" />
                </div>
                <div className="feature-text">
                  <div className="heading">Lorem ipsum dolor sit.</div>
                  <div className="info">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </div>
                </div>
              </div>
              <div className="feature-grid-each">
                <div className="feature-svg">
                  <img src={feature} alt="" />
                </div>
                <div className="feature-text">
                  <div className="heading">Lorem ipsum dolor sit.</div>
                  <div className="info">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
