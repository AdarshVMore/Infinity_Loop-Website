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
          . Players can race against each other, compete in tournaments, and win
          rewards in the form of cryptocurrency tokens, which can be traded or
          used within the game ecosystem
        </p>
        <div className="bottom">
          <div className="each 1">
            <div className="img">
              <img src={svg1} alt="" />
            </div>
            <div className="name">Earn Crypto</div>
            <div className="info gray">
              Players can earn cryptocurrencies while racing in the game
            </div>
          </div>
          <div className="each 1">
            <div className="img">
              <img src={svg2} alt="" />
            </div>
            <div className="name">Decentralised</div>
            <div className="info gray">
              The game operates on a decentralized blockchain network
            </div>
          </div>
          <div className="each 1">
            <div className="img">
              <img src={svg3} alt="" />
            </div>
            <div className="name">Rewards</div>
            <div className="info gray">
              Players receive various rewards, including cryptocurrencies
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
              covers up to 60% of user losses in case of market volatility. This
              ensures that players can enjoy the game without worrying about
              losing their investments
            </div>
            <div className="feature-grid">
              <div className="feature-grid-each">
                <div className="feature-svg">
                  <img src={feature} alt="" />
                </div>
                <div className="feature-text">
                  <div className="heading">Non-Custodial Wallets</div>
                  <div className="info">
                    Trade securely from your own wallet, reducing centralized
                    exchange risks
                  </div>
                </div>
              </div>
              <div className="feature-grid-each">
                <div className="feature-svg">
                  <img src={feature} alt="" />
                </div>
                <div className="feature-text">
                  <div className="heading">Decentralized Order Matching</div>
                  <div className="info">
                    Directly trade on the blockchain, eliminating intermediaries
                  </div>
                </div>
              </div>
              <div className="feature-grid-each">
                <div className="feature-svg">
                  <img src={feature} alt="" />
                </div>
                <div className="feature-text">
                  <div className="heading">Multi-Signature Security</div>
                  <div className="info">
                    Enhanced protection with multi-signature technology.
                  </div>
                </div>
              </div>
              <div className="feature-grid-each">
                <div className="feature-svg">
                  <img src={feature} alt="" />
                </div>
                <div className="feature-text">
                  <div className="heading">On-Chain Auditing</div>
                  <div className="info">
                    Transparent transaction records on the blockchain for
                    trustworthy auditing.
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
              This technology allows for fast and efficient gameplay, without
              compromising on security or decentralization
            </div>
            <div className="feature-grid">
              <div className="feature-grid-each">
                <div className="feature-svg">
                  <img src={feature} alt="" />
                </div>
                <div className="feature-text">
                  <div className="heading">Cross-Chain Compatibility</div>
                  <div className="info">
                    Interact with multiple blockchain networks for asset
                    transfer and data exchange.{" "}
                  </div>
                </div>
              </div>
              <div className="feature-grid-each">
                <div className="feature-svg">
                  <img src={feature} alt="" />
                </div>
                <div className="feature-text">
                  <div className="heading">Interoperability</div>
                  <div className="info">
                    Connect and communicate between different blockchain
                    networks for seamless information sharing.{" "}
                  </div>
                </div>
              </div>
              <div className="feature-grid-each">
                <div className="feature-svg">
                  <img src={feature} alt="" />
                </div>
                <div className="feature-text">
                  <div className="heading">Protocol Agnostic</div>
                  <div className="info">
                    Support various blockchain protocols, enabling integration
                    with diverse networks.{" "}
                  </div>
                </div>
              </div>
              <div className="feature-grid-each">
                <div className="feature-svg">
                  <img src={feature} alt="" />
                </div>
                <div className="feature-text">
                  <div className="heading">Scalability and Performance</div>
                  <div className="info">
                    ptimize integration for efficient operations across
                    different blockchain environments.{" "}
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
