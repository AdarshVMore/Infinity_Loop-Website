import React from "react";
import { IoIosHome } from "react-icons/io";
import logo from "../../assets/images/logo.png";
import "./sidebar.css";

function Sidebar() {
  return (
    <div className="dashboard-sidebar">
      <div className="in-sidebar">
        <div className="sidebar-top">
          <a href="/">
            <img src={logo} alt="" />
          </a>
        </div>
        <div className="sidebar-menu">
          <div className="each-menu">
            <div className="icon">
              <IoIosHome size={20} />
            </div>
            <p>Dashboard</p>
          </div>
        </div>
        {/* <div className="sidebar-bottom">Documentation</div> */}
      </div>
    </div>
  );
}

export default Sidebar;
