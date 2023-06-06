import React, { useState, useEffect } from "react";
import { RiAddFill } from "react-icons/ri";
import { VscSettings } from "react-icons/vsc";
import { TbReload } from "react-icons/tb";
import { BiDownArrowAlt } from "react-icons/bi";
import { RiArrowDropDownLine } from "react-icons/ri";
import "./simpleswap.css";
import axios from "axios";
import Select from "react-select";

function SimpleSwap({ onTokenSelect }) {
  const [selectedLink, setSelectedLink] = useState(0);

  const [tokens, setTokens] = useState({});
  const [tokenlist, setTokenlist] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api.1inch.io/v5.0/1/tokens");
        setTokens(response.data.tokens);
        console.log(tokens);
      } catch (error) {
        console.log("Error fetching token data:", error);
      }
    };
    exchange();
    fetchData();
  }, []);

  const [swap, setswap] = useState(null);

  // Accessing individual token information dynamically
  Object.keys(tokens).forEach((tokenAddress) => {
    const token = tokens[tokenAddress];
    tokenlist.push(token);
  });

  const [amount, setamount] = useState("");
  //  var [data,setData] = useState("");
  var storedData = sessionStorage.getItem("key");
  //  setData(storedData);
  console.log(storedData);

  const options = tokenlist.slice(0, 500).map((token) => ({
    value: token.address,

    label: (
      <div>
        <img src={token.logoURI} alt={token.name} className="logo1"></img>
        <p key={token.address}>{token.symbol}</p>
      </div>
    ),
  }));
  const options2 = tokenlist.slice(0, 500).map((token) => ({
    value: token.address,
    s: token,
    label: (
      <div>
        <img src={token.logoURI} alt={token.name} className="logo1"></img>
        <p key={token.address}>{token.symbol}</p>
      </div>
      // </div>
    ),
  }));
  const [swap2, setswap2] = useState(null);
  const setevent2 = (props) => {
    setswap2(props);
    if (props != null && props.s != null && storedData === "false") {
      onTokenSelect(props.s); // Call the onTokenSelect callback with the selected token
    }
  };
  const setevent = (props) => {
    setswap(props);
  };
  var k = "";
  var j = "";
  const [fromtoken, setfromtoken] = useState(j);
  const [totoken, settoken] = useState(k);
  var exchange = async (fromaddress, toaddress, amount) => {
    await axios
      .get(
        `https://api.1inch.io/v5.0/1/quote?fromTokenAddress=${fromaddress}&toTokenAddress=${toaddress}&amount=${amount}`
      )
      .then((response) => {
        k = response.data["toTokenAmount"];
        j = response.data["fromTokenAmount"];
        settoken(k);
        setfromtoken(j);
        console.log(k, response.data);
      })
      .catch((err) => console.log(err));
  };
  const setevent3 = (props) => {
    setamount(props.target.value);
  };

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
            <Select
              value={swap}
              name="fromtoken"
              className="middle"
              onChange={setevent}
              options={options}
            />

            <input
              text={Number}
              onChange={setevent3}
              value={amount}
              placeholder="Enter Exchanged coins"
              required={true}
            ></input>
            <p>{fromtoken}</p>
          </div>

          <div className="bottom">
            <p className="crypto-fullname">Wrapper Ethereum</p>
            <p className="some-value">~$3 309 059</p>
          </div>
        </div>
        {/* <div className="swap-arrow">
          <BiDownArrowAlt size={30} color="white" />
        </div> */}
        <div className="swap-to">
          <div className="top">
            <p>You Buy</p>
            <p>
              Balance : <span className="balance">0</span>
            </p>
          </div>
          <div className="middle">
            {/* <button
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
             */}
            <Select
              value={swap2}
              className="middle"
              onChange={setevent2}
              options={options2}
            />

            <p>{totoken}</p>
          </div>
          <div className="bottom">
            <p className="crypto-fullname">Wrapper Ethereum</p>
            <p className="some-value">~$3 309 059</p>
          </div>
        </div>
      </div>
      {/* <div className="live-crypto-price">
        <div className="info">
          <p>1 DAI = 0.000551241 WETH ($1)</p>
          <p>$0</p>
        </div>
        <RiArrowDropDownLine color="white" size={24} />
      </div> */}
      <button
        onClick={() => {
          exchange(swap.value, swap2.value, amount);
        }}
        className="live-crypto-price"
      >
        <div className="info">
          <p>Convert</p>
          <p></p>
        </div>
      </button>
      <div className="swap-button">
        <button>Insufficient WETH Balance</button>
      </div>

      {/* {showOptions_from && (
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
      )} */}
    </div>
  );
}

export default SimpleSwap;
