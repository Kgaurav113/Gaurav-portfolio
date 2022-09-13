import React from "react";
import AboutDiv from "../css/About.styled";
import { Fade } from "react-awesome-reveal";
import Aboutme from "../assets/icons/aboutme.svg";
const About = () => {
  return (
    <AboutDiv id="about">
      <div className="conatainerAbout">
        {/* <div className="iconContainer"> */}
        <Fade direction="left" className="iconContainer">
          <img className="iconAboutMe" src={Aboutme} alt="" />
        </Fade>
        {/* </div> */}

        <div className="aboutDesc">
          <Fade direction="left">
            <p className="subTitle">About me</p>
        
            <p className="desc">
            I have completed my Graduation in instrumentation Engineering. In my college, I learned some coding languages like C, C++, DBMS, and Oracle. So I decided to build my career as a developer. Then I joined Masai School to pursue my career in coding and In Masai we had intense 
9 to 9 curriculum every day. It helps me to do coding like marathon and I learned so many things in Masai like interpersonal skills, leadership skills, remote working, team collaboration etc.
            </p>
          </Fade>
        </div>
      </div>
    </AboutDiv>
  );
};

export default About;

// "https://raw.githubusercontent.com/mandarsatam/mandarsatam.github.io/9e9c534e75dd8ac2732b3ec472ce6c2817df9971/static/media/aboutmePic.79439da1.svg"
