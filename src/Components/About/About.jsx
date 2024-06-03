import React from "react";
import "./AboutMe.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_nishit from "../../assets/profile_nishit.jpeg";

const About = () => {
  return (
    <div className="about" id="aboutme">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_nishit} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I have strong foundation in MERN Stack development. I believe in
              process as process is more important than result.
            </p>
            <p>
              My passion for MERN Stack development is not only reflected in my
              extensive projects but also in the enthusiasm and dedication I
              bring to each project.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
