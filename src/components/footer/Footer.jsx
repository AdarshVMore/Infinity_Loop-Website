import React from "react";
import "./footer.css";
import logo from "../../assets/images/logo.png";
import twitter from "../../assets/images/twitter.png";
import linkedIn from "../../assets/images/linkedIn.png";
import telegram from "../../assets/images/telegram.png";

function Footer() {
  return (
    <div className="footer">
      <div className="all-links">
        <div className="col1">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="copyright">
            ©2023 Loop of Infinity . All rights reserved.
          </div>
          <div className="socials">
            <a href="https://twitter.com/loopofinfinity_" target="_blank">
              <img src={twitter} alt="" />
            </a>
            <a href="https://t.me/loopofinfinity" target="_blank">
              <img src={telegram} alt="" />
            </a>
            <a
              href="https://www.linkedin.com/company/loop-of-infinity/"
              target="_blank"
            >
              <img src={linkedIn} alt="" />
            </a>
          </div>
        </div>
        <div className="col2">
          <div className="heading">Company</div>
          {/* <a href="">About us</a> */}
          <a href="">Terms and services</a>
          <a href="">Privacy Policy</a>
        </div>
        <div className="col3">
          <div className="heading">Support</div>
          <a href="https://t.me/loopofinfinity">Contact Us</a>
          {/* <a href="">Mail Us</a>
          <a href="">Whatsapp Us</a> */}
        </div>
      </div>
    </div>
  );
}

export default Footer;
