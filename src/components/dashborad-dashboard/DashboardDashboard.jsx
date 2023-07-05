import React from "react";
import { HiOutlineLightningBolt } from "react-icons/hi";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { BsDot } from "react-icons/bs";
import { CiMenuKebab } from "react-icons/ci";
import "./dashboard.css";
import loadingCircle from "../../assets/images/Ellipse 89.svg";
import building from "../../assets/images/building.svg";
import profilePic from "../../assets/images/profilepic.jpg";

function DashboardDashboard() {
  return (
    <div className="DashboardDarshboard">
      <div className="DD-top">
        <div className="DD-left">
          <div className="img">
            <img src={profilePic} alt="" />
          </div>
          <div className="name-email">
            <div className="name">Mark Johnson</div>
            <div className="email">markjohnson@gmail.com</div>
          </div>
        </div>
        <div className="DD-right">
          <button className="edit-btn">
            <div className="icon"></div>
            <p>Edit</p>
          </button>
          {/* <div className="btn-2">
            <p>CTA2</p>
          </div>
          <div className="btn3">
            <p>CTA3</p>
          </div> */}
        </div>
      </div>
      <div className="DD-middle">
        <div className="card1">
          <div className="top-info">
            <div className="heading">Welcome Back!</div>
            <p>Nice to see you, Mark Johnson</p>
          </div>
          <a href="">Turn on your car </a>
        </div>
        <div className="card2 card">
          <div className="top-info">
            <div>
              <p>total balance</p>
              <h4>LOI 25,215</h4>
            </div>
            <CiMenuKebab />
          </div>
          <div className="bottom-btns">
            <button>Buy</button>
            <button>Withdraw</button>
          </div>
        </div>
        <div className="card3 card">
          <p>Vesting Progress</p>
          <div className="middle">
            <div>
              <span>Token Vesting</span>
              <p>30%</p>
            </div>
            <div className="icon">
              <HiOutlineLightningBolt size={50} />
            </div>
          </div>
          <div className="button-div">
            <button>Claim</button>
          </div>
        </div>
      </div>
      <div className="DD-bottom">
        <div className="card1 card">
          <p>Vesting Token</p>
          <div className="vesting-circle-loading">
            <img src={loadingCircle} alt="" />
            <BsFillLightningChargeFill color="green" />
            <h3>68%</h3>
            <p>vested</p>
          </div>
          <div className="bottom-text">
            <p>Claim remaining tokens</p>
            <span>LOI 45000 Remaining</span>
          </div>
        </div>
        <div className="card2 card">
          <p>Token Transactions</p>
          <span>Recent transition</span>
          <div className="transaction">
            <div className="transaction-left">
              <div className="icon">
                <img src={building} alt="" />
              </div>
              <div className="text">
                <p>Title 1</p>
                <span>Today, 16:39</span>
              </div>
            </div>
            <p>+$154.50</p>
          </div>
        </div>
        <div className="card3 card">
          <div>
            <p>Vesting Stages</p>
            <span className="gray">Vesting Tokens timeline</span>
          </div>
          <div className="all-stages">
            <div className="each-stage">
              <div className="each-stage-top">
                <p>
                  Stage 1 - <span className="gray">14/06/2023</span>
                </p>
                <p className="isActive">
                  <BsDot />
                  <span>Active</span>
                </p>
              </div>
              <div className="loader">
                <div className="loading"></div>
              </div>
            </div>
            <div className="each-stage">
              <div className="each-stage-top">
                <p>
                  Stage 1 - <span className="gray">14/06/2023</span>
                </p>
                <p className="isActive">
                  <BsDot />
                  <span>Active</span>
                </p>
              </div>
              <div className="loader">
                <div className="loading"></div>
              </div>
            </div>
            <div className="each-stage">
              <div className="each-stage-top">
                <p>
                  Stage 1 - <span className="gray">14/06/2023</span>
                </p>
                <p className="isActive">
                  <BsDot />
                  <span>Active</span>
                </p>
              </div>
              <div className="loader">
                <div className="loading"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardDashboard;
