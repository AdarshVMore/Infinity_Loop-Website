import React, { useState } from "react";
import { RiAddFill } from "react-icons/ri";
import { VscSettings } from "react-icons/vsc";
import { TbReload } from "react-icons/tb";
import { BiDownArrowAlt } from "react-icons/bi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdArrowBackIos } from "react-icons/md";
import "./simpleswap.css";

function SimpleSwap() {
  const [selectedLink, setSelectedLink] = useState(0);
  const [showOptions_from, setShowOptions_from] = useState(false);
  const [showOptions_to, setShowOptions_to] = useState(false);

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const cryptoApi = [
    {
      logo: "L",
      name: "ETH",
    },
    {
      logo: "L",
      name: "BTC",
    },
    {
      logo: "L",
      name: "DOG",
    },
    {
      logo: "L",
      name: "USDC",
    },
    {
      logo: "L",
      name: "USDT",
    },
    {
      logo: "L",
      name: "USDT",
    },
    {
      logo: "L",
      name: "USDT",
    },
    {
      logo: "L",
      name: "USDT",
    },
    {
      logo: "L",
      name: "USDT",
    },
    {
      logo: "L",
      name: "USDT",
    },
  ];

  return (
    <div className="simple-swap">
      <div className="top-menu">
        <div className="left">
          <a
            href="/dex"
            onClick={() => {
              setSelectedLink(0);
            }}
          >
            {" "}
            <p className={selectedLink === 0 ? "selected-link" : ""}>
              Swap
            </p>{" "}
          </a>
          <a
            href="/dex/limitswap"
            onClick={() => {
              setSelectedLink(1);
            }}
          >
            {" "}
            <p className={selectedLink === 1 ? "selected-link" : ""}>
              Limit
            </p>{" "}
          </a>
          <a
            href="/dex/p2pswap"
            onClick={() => {
              setSelectedLink(2);
            }}
          >
            {" "}
            <p className={selectedLink === 2 ? "selected-link" : ""}>
              P2P
            </p>{" "}
          </a>
        </div>
        <div className="right">
          <div className="btn reload-btn">
            <TbReload size={24} color="white" />
          </div>
          <div className="btn add-btn">
            <RiAddFill size={24} color="white" />
          </div>
          <div className="btn swap-setting-btn">
            <VscSettings size={24} color="white" />
          </div>
        </div>
      </div>

      <div className="swaping-input">
        <div className="swap-from">
          <div className="top">
            <p>You Sell</p>
            <p>
              Balance : <span className="balance">0</span>
            </p>
          </div>
          <div className="middle">
            <button
              onClick={() => {
                setShowOptions_from(true);
              }}
            >
              <span className="crypto-icon"></span>
              <span className="crypto-name">
                {cryptoApi[x].name}
                <RiArrowDropDownLine />
              </span>
            </button>
            <input type="number" />
          </div>

          <div className="bottom">
            <p className="crypto-fullname">Wrapper Ethereum</p>
            <p className="some-value">~$3 309 059</p>
          </div>
        </div>
        <div className="swap-arrow">
          <BiDownArrowAlt size={30} color="white" />
        </div>
        <div className="swap-to">
          <div className="top">
            <p>You Buy</p>
            <p>
              Balance : <span className="balance">0</span>
            </p>
          </div>
          <div className="middle">
            <button
              onClick={() => {
                setShowOptions_to(true);
              }}
            >
              <span className="crypto-icon"></span>
              <span className="crypto-name">
                {cryptoApi[y].name}
                <RiArrowDropDownLine />
              </span>
            </button>
            <p>1819.054</p>
          </div>
          <div className="bottom">
            <p className="crypto-fullname">Wrapper Ethereum</p>
            <p className="some-value">~$3 309 059</p>
          </div>
        </div>
      </div>
      <div className="live-crypto-price">
        <div className="info">
          <p>1 DAI = 0.000551241 WETH ($1)</p>
          <p>$0</p>
        </div>
        <RiArrowDropDownLine color="white" size={24} />
      </div>
      <div className="swap-button">
        <button>Insufficient WETH Balance</button>
      </div>

      {showOptions_from && (
        <div className="crypto-options-from">
          <div className="top">
            <div
              className="back"
              onClick={() => {
                setShowOptions_from(false);
              }}
            >
              <MdArrowBackIos />
            </div>
            <div className="text">Select a Token</div>
            <div className="none"></div>
          </div>
          <hr />
          <div className="bottom">
            {cryptoApi.map((item, index) => (
              <ul>
                <li
                  key={index}
                  onClick={() => {
                    setX(index);
                    setShowOptions_from(false);
                  }}
                >
                  <div className="left">
                    <div className="logo">{item.logo}</div>
                    <div className="inner-right">
                      <div className="name">
                        <p className="crypto-name">{item.name}</p>
                        <p>{`0 ${item.name}`}</p>
                      </div>
                    </div>
                  </div>
                  <div className="right">$0</div>
                </li>
              </ul>
            ))}
          </div>
        </div>
      )}

      {showOptions_to && (
        <div className="crypto-options-from">
          <div className="top">
            <div
              className="back"
              onClick={() => {
                setShowOptions_to(false);
              }}
            >
              <MdArrowBackIos />
            </div>
            <div className="text">Select a Token</div>
            <div className="none"></div>
          </div>
          <hr />
          <div className="bottom">
            {cryptoApi.map((item, index) => (
              <ul>
                <li
                  key={index}
                  onClick={() => {
                    setY(index);
                    setShowOptions_to(false);
                  }}
                >
                  <div className="left">
                    <div className="logo">{item.logo}</div>
                    <div className="inner-right">
                      <div className="name">
                        <p className="crypto-name">{item.name}</p>
                        <p>{`0 ${item.name}`}</p>
                      </div>
                    </div>
                  </div>
                  <div className="right">$0</div>
                </li>
              </ul>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default SimpleSwap;
