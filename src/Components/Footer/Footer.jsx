import React from "react";
import "./Footer.css";
import footer_logo from "../../assets/footer_logo.svg";
import { CiUser } from "react-icons/ci";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={footer_logo} alt="" />
          <p>
            I'm Nishit Patel, MERN Stack Developer based in India I am fresher
            with the strong foundation in MERN.
          </p>
        </div>
        {/* <div className="footer-top-right">
          <div className="footer-email-input">
            <CiUser className="footer-user-icon" />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              id=""
            />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div> */}
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">@2024 Nishit Patel. All rights</p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with Me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
