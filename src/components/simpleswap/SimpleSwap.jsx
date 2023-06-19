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
  const customStyles = {
    control: (provided) => ({
      ...provided,
      borderRadius: "10px",
      margin: "7px 0",
      background: "#131823",
      outline: "none",
      border: "none",
      padding: "4px 8px",
      fontSize: "18px",
      color: "white",
      fontWeight: "600",
    }),
    option: (provided) => ({
      ...provided,
      color: "white",
    }),
  };
  const getOptionLabel = (option) => {
    return <span style={{ color: "white" }}>{option.label}</span>;
  };

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
      <div className="each-option">
        <img src={token.logoURI} alt={token.name} className="logo1"></img>
        <p key={token.address}>{token.symbol}</p>
      </div>
    ),
  }));
  const options2 = tokenlist.slice(0, 500).map((token) => ({
    value: token.address,
    s: token,
    label: (
      <div className="each-option">
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
  var k = "0";
  var j = "0";
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
              styles={customStyles}
              className="select"
              name="fromtoken"
              onChange={setevent}
              options={options}
              getOptionLabel={getOptionLabel}
            />

            <input
              text={Number}
              onChange={setevent3}
              value={amount}
              placeholder="Enter Exchange coins"
              required={true}
            ></input>
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
              styles={customStyles}
              className="select"
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

      <button
        onClick={() => {
          exchange(swap.value, swap2.value, amount);
        }}
        className="live-crypto-price"
      >
        <div className="info">
          <p>Convert</p>
        </div>
      </button>
      <div className="swap-button">
        <button>Insufficient WETH Balance</button>
      </div>
    </div>
  );
}

export default SimpleSwap;
