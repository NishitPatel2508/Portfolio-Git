import React, { useRef, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";
const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();
  const openMenu = () => {
    menuRef.current.style.right = "0";
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };
  return (
    <div className="navbar">
      <img src={logo} alt="" />
      <img src={menu_open} onClick={openMenu} alt="" className="nav-mob-open" />
      <ul ref={menuRef} className="nav-menu">
        <img
          src={menu_close}
          onClick={closeMenu}
          alt=""
          className="nav-mob-close"
        />
        <li>
          <AnchorLink className="anchor-link" href="#home">
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
          {menu === "home" ? <img src={underline} alt="home" /> : ""}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#aboutme">
            <p onClick={() => setMenu("About Me")}>About Me</p>
          </AnchorLink>
          {menu === "About Me" ? <img src={underline} alt="home" /> : ""}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#services">
            <p onClick={() => setMenu("Services")}>Services</p>{" "}
          </AnchorLink>
          {menu === "Services" ? <img src={underline} alt="home" /> : ""}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#skills">
            <p onClick={() => setMenu("Skills")}>Skills</p>{" "}
          </AnchorLink>
          {menu === "Skills" ? <img src={underline} alt="home" /> : ""}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#project">
            <p onClick={() => setMenu("project")}>Portfolio</p>{" "}
          </AnchorLink>
          {menu === "project" ? <img src={underline} alt="home" /> : ""}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => setMenu("Contact")}>Contact</p>
          </AnchorLink>
          {menu === "Contact" ? <img src={underline} alt="home" /> : ""}
        </li>
      </ul>
      <div className="nav-connect">
        {" "}
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
