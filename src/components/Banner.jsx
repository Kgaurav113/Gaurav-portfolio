import React from "react";
import BannerCon from "../css/Banner.styled";
import Typewriter from "typewriter-effect";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import "./Banner.css";
import Avatar from "../assets/avatar.png";
import { SiGmail } from "react-icons/si";

const Banner = () => {
  return (
    <BannerCon>
      <div className="bannerContainer">
        <div className="typeWirter">
          <div className="introMyself">
            <p className="heading">Hi, I am Kumar Gaurav,</p>
            <div className="subHeading">
              <Typewriter
                options={{
                  strings: [
                    "Full Stack Web Developer !",
                    "Frontend Developer !",
                    "MERN Stack Developer",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 200,
                }}
              />
            </div>
            <p className="tagLine">
             A passionate full-stack web developer trained in HTML, CSS, Javascript, and MERN stack  with a strong set of
              technical as well as non-technical skills and a dedication towards
              creating useful and interactive web applications.
            </p>
            <div className="typeButtons">
              <button className="learn-more">
                <a
                  href= "https://drive.google.com/file/d/1r74TjGYRku5Dg5wjVTpifPselpa5hNZw/view?usp=sharing"
                   download
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <span className="circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                  </span>
                  <span className="button-text">Resume</span>
                </a>
              </button>
              {/* <button>Resume</button> */}
            </div>
            <div className="socialIconContainer">
              <a
                href="https://www.linkedin.com/in/kgaurav501/"
                target={"_blank"}
                rel="noreferrer"
              >
                <BsLinkedin className="socialIcons" />
              </a>
              <a
                href="https://github.com/kgaurav113"
                target={"_blank"}
                rel="noreferrer"
              >
                <BsGithub className="socialIcons" />
              </a>
              <a
                href="mailto:kgaurav501@gmail.com"
                target={"_blank"}
                rel="noreferrer"
              >
                <SiGmail className="socialIcons" />
              </a>
            </div>
          </div>
        </div>

        {/* <div className="imageContainer">
          <img
            src={window.screen.width < 940 ? Avatar : Avatar}
            alt=""
            className="avatar"
          />
        </div> */}
        <div class="box">
          <div class="content">
            <img src={Avatar} alt="" />
            {/* <h2>
              {" "}
              KUMAR GAURAV
              <br />
              <span>Web developer</span>
            </h2> */}
          </div>
        </div>
      </div>
    </BannerCon>
  );
};

export default Banner;
