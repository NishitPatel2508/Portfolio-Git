import React from "react";
import "./Hero.css";
// import profile_img from "../../assets/profile_img.svg";
import profile_nishit from "../../assets/profile_nishit.jpeg";
import AnchorLink from "react-anchor-link-smooth-scroll";
const Hero = () => {
  return (
    <div className="hero" id="home">
      <div className="hero1">
        <img src={profile_nishit} alt="" />
        <h1>
          <span>I'm Nishit Patel,</span> MERN Stack Developer based in India
        </h1>
        <p>I am fresher with the strong foundation in MERN.</p>
      </div>

      <div className="hero-action">
        <div className="hero-connect">
          {" "}
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect With Me
          </AnchorLink>
        </div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
