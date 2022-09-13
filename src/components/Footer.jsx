import React from "react";
import FooterCon from "../css/Footer.styled";
import {
  SiLinkedin,
  SiGmail,
  SiGithub,
  SiTwitter,
  SiHashnode,
  SiMedium,
} from "react-icons/si";
import { Fade } from "react-awesome-reveal";
import { BsTelephoneFill } from "react-icons/bs";
const Footer = () => {
  return (
    <FooterCon id="footer">
      <p className="subTitle">Contact Me</p>
      <div className="footerCon">
        <Fade direction="up">
          <div>
            <a
              href="https://www.linkedin.com/in/kgaurav501/"
              target={"_blank"}
              rel="noreferrer"
              className="links"
            >
              <span>
                <SiLinkedin />
              </span>
              <span>Linkedin</span>
            </a>
          </div>
          <div>
            <a
              href="https://github.com/Kgaurav113"
              target={"_blank"}
              rel="noreferrer"
              className="links"
            >
              <span>
                <SiGithub />
              </span>
              <span>Github</span>
            </a>
          </div>
          <div>
            <a
              // href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=gautamgohil0@gmail.com"
              className="links"
              href="mailto:kgaurav501@gmail.com"
              target={"_blank"}
              rel="noreferrer"
            >
              <span>
                <SiGmail />
              </span>
              <span>kgaurav501@gmail.com</span>
            </a>
          </div>
          <div>
            <a
              href="https://twitter.com/kgaurav113"
              target={"_blank"}
              rel="noreferrer"
              className="links"
            >
              <span>
                <SiTwitter />
              </span>
              <span>Twitter</span>
            </a>
          </div>
          <div>
            <p className="links disabled">
              <span>
                <BsTelephoneFill />
              </span>
              <span>+91 6202991310</span>
            </p>
          </div>
          <div>
            <a
              href="https://medium.com/@kgaurav501"
              target={"_blank"}
              rel="noreferrer"
              className="links"
            >
              <span>
                <SiMedium />
              </span>
              <span>Blogs</span>
            </a>
          </div>
        </Fade>
      </div>
      <div className="credits">
        <p>
          Designed & Built by <span>Kumar Gaurav</span> © 2022
        </p>
      </div>
    </FooterCon>
  );
};

export default Footer;
