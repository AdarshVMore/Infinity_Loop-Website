import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import "./tokensale.css";

function TokenSale() {
  const [popup, setPopup] = useState(false);
  return (
    <div className="token-sale">
      <div className={popup ? "floating-container" : "hide"}>
        <div className="top-float">
          <IoIosArrowBack
            size={24}
            onClick={() => {
              setPopup(false);
            }}
          />
          <h3>Exchange</h3>
          <div></div>
        </div>
        <div className="exchange">
          <div className="top-float">
            <div className="select">
              <p>From</p>
              <select name="" id=""></select>
            </div>
            <div className="input">
              <div className="value">
                <input type="text" placeholder="0" />
                <p>MAX</p>
              </div>
            </div>
          </div>
          <div className="bottom-float">
            <div className="select">
              <p>To</p>
              {/* <select name="" id=""></select> */}
              <p>LOI</p>
            </div>
            <div className="input">
              <div className="value">
                <p>0</p>
              </div>
            </div>
          </div>
        </div>
        <div className="price-loi">Price 1 LOI - $0.0080</div>

        <button>Buy Now</button>
      </div>
      <div className="container1">
        <h1 className=" days-one">LOI Token Sale</h1>
        <div className="bottom">
          <div className="left">
            <div className="heading days-one">About Token</div>
            <div className="info">
              <b>
                "Invest, vest, and enjoy the best: Join our buyback program and
                reap the rewards"
              </b>
              <ul>
                <li>
                  The Buyback Program for Loop Of Infinity will be a crucial
                  aspect of the tokenomics strategy for the project.
                </li>
                <li>
                  After the Pre-IEO token sale, the buyback will take place
                  after 4 months of vesting and a 1-month cliff.
                </li>
                <li>
                  The buyback will be conducted every month, and the buyback
                  percentage will be 12% until the total circulating tokens are
                  bought back.
                </li>
                <li>
                  The premium price for the buyback will be $0.015, which is
                  almost double the price of the PRE-IEO.
                </li>
                <li>
                  The buyback tokens will be burned, which means that they will
                  be removed from circulation, reducing the total supply of LOI
                  tokens.
                </li>
                <li>
                  {" "}
                  This will increase the value of the remaining tokens and
                  reward early investors who hold onto their tokens.{" "}
                </li>
                <li>
                  The Buyback Program will provide a safety net for investors,
                  and it will also create a sense of scarcity for the LOI
                  tokens.
                </li>
                <li>
                  {" "}
                  The buyback will be conducted until the total circulating
                  tokens are bought back, creating a healthy balance between the
                  supply and demand of LOI tokens in the market.
                </li>
              </ul>
            </div>
          </div>
          <div className="right">
            <div className="heading  days-one">Buy Tokens</div>
            <div className="slider-div">
              <div className="slider-bg">
                <div className="slider"></div>
              </div>
              <div className="slider-count">
                <div className="sold">9824984</div>
                <div className="total">500000000</div>
              </div>
            </div>

            <div className="some-info">
              <div className="each-info">
                <p>Current LOI Price</p>
                <p>$0.00258</p>
              </div>
              <div className="each-info">
                <p>Minimum purchase</p>
                <p>$0.00258</p>
              </div>
              <div className="each-info">
                <p>Purchace Limit per wallet</p>
                <p>$0.00258</p>
              </div>
            </div>

            <div className="loi-counter">
              <p>My LOI Token</p>
              <p>0</p>
            </div>
            <hr />
            <button
              onClick={() => {
                setPopup(true);
              }}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <h1 className="container2-heading days-one">How to Buy ?</h1>

      <div className="container2">
        <div className="left">
          <div className="info"></div>
        </div>
        {/* <div className="right">
          <div className="feature">
            <div className="heading">Loss-proof DEX integration</div>
            <div className="feature-info">
              Loop Of Infinity addresses investment risk by integrating a
              loss-proof DEX that covers up to 60% of losses. This boosts player
              confidence, encourages broader participation, and ensures peace of
              mind in the gaming platform
            </div>
            <button>Read Documentation</button>
          </div>
          <div className="feature">
            <div className="heading">Layer-2 scaling solution</div>
            <div className="feature-info">
              Loop Network's layer-2 scaling solution boosts scalability for
              blockchain gaming platforms. With increased transaction processing
              capacity, Loop Of Infinity provides users a seamless and expedited
              gaming experience.
            </div>
            <button>Read Documentation</button>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default TokenSale;
