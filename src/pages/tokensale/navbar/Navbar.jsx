import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../../assets/images/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { ethers } from "ethers";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [account, setAccount] = useState("");
  const [provider, setProvider] = useState("");
  const loadProvider = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    setProvider(provider);
    if (provider) {
      window.ethereum.on("chainChanged", () => {
        window.location.reload();
      });

      window.ethereum.on("accountsChanged", () => {
        window.location.reload();
      });
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      setAccount(address);
      console.log(account);
    } else {
      console.error("Metamask is not installed");
    }
  };
  useEffect(() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    setProvider(provider);
    const loadProvider = async () => {
      if (provider) {
        window.ethereum.on("chainChanged", () => {
          window.location.reload();
        });

        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);

        setProvider(provider);
      } else {
        console.error("Metamask is not installed");
      }
    };
    loadProvider().catch((e) => console.log(e, "is error"));

    provider && loadProvider();
  }, [account]);

  return (
    <nav className="navbar">
      <a href="/">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
      </a>
      <div
        onClick={() => {
          setShowNavbar(true);
        }}
        className={!showNavbar ? "toggle-open" : "hide"}
      >
        <GiHamburgerMenu size={24} />
      </div>
      <ul className={showNavbar ? "links active" : "links"}>
        <li>
          <div
            className="toggle-close"
            onClick={() => {
              setShowNavbar(false);
            }}
          >
            <AiOutlineClose color="white" size={24} />
          </div>
        </li>
        <li>
          <a href="/">How it works</a>
        </li>
        <li>
          <a href="/">Roadmap</a>
        </li>
        <li>
          <a href="/">Tokonomics</a>
        </li>
        <li>
          {/* <a href="https://loopofinfinitydex.netlify.app/dex">LoopSwap</a> */}
          <a href="/dexx">LoopSwap</a>
        </li>
        <li>
          <a href="/">Loop Network</a>
        </li>
        <li className="no-hover">
          {account ? (
            `${account.slice(0, 6)}...${account.slice(-4)}`
          ) : (
            <button
              onClick={() => {
                loadProvider();
              }}
            >
              Connect Wallet
            </button>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
