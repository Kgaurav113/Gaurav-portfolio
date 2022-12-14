import React from "react";
import { SkillsDiv } from "../css/Skills.styled";
import { Fade } from "react-awesome-reveal";
import {
  SiJavascript,
  SiReact,
  SiReactrouter,
  SiMongodb,
  SiExpress,
  SiStyledcomponents,
  SiMaterialui,
  SiTypescript,
  SiPostman,
  SiRedux,
  SiGithub,
  SiGit,
  SiCypress,
  SiNodedotjs,
  SiCss3,
  SiHtml5,
  SiNetlify,
  SiHeroku,

  SiNpm,
  SiVercel,

} from "react-icons/si";


import { VscJson } from "react-icons/vsc";
import Github from "./Github";

const Skills = () => {
  return (
    <SkillsDiv id="skills">
      <p className="title">Skills</p>

      <div className="mainContainer">
        <div className="container">
          <div className="FrontEnd">
            <p className="subTitle">Frontend</p>
            <div className="frontEndSKills">
              <ul className="skillsList">
                <Fade direction="up" duration={700}>
                  <li>
                    <span>
                      <SiReact fill="#53c1de" />
                    </span>
                    <p>React.Js </p> 
                  </li>

                  <li>
                    <span>
                      <SiJavascript fill="#f7df1e" />
                    </span>
                    <p>JavaScript</p>
                  </li>

                  <li>
                    <span>
                      <SiCss3 fill="#1572b6" />
                    </span>
                    <p>CSS3</p>
                  </li>
                  <li>
                    <span>
                      <SiHtml5 fill="#ff5722" />
                    </span>
                    <p>HTML5</p>
                  </li>
                  <li>
                    <span>
                      <SiTypescript fill="#007acc" />
                    </span>
                    <p>TypeScript</p>
                  </li>
                  <li>
                    <span>
                      <SiRedux fill="#764abc" />
                    </span>
                    <p>Redux</p>
                  </li>

                  <li>
                    <span>
                      <SiStyledcomponents />
                    </span>
                    <p>Styled-Components</p>
                  </li>
                  <li>
                    <span>
                      <SiReactrouter />
                    </span>
                    <p>React-router-dom</p>
                  </li>
                  <li>
                    <span>
                      <SiMaterialui fill="#007fff" />
                    </span>
                    <p>Material UI</p>
                  </li>
                 
                </Fade>
              </ul>
            </div>
          </div>
          <div className="FrontEnd">
            <p className="subTitle">Backend</p>
            <div className="frontEndSKills">
              <ul className="skillsList">
                <Fade direction="up" duration={700}>
                 
              
                  <li>
                    <span>
                      <SiNodedotjs fill="#86ce2e" />
                    </span>
                    <p>Node.Js</p>
                  </li>
                   <li>
                    <span>
                      <SiExpress fill="#86ce2e" />
                    </span>
                    <p>Express</p>
                  </li>
                  <li>
                    <span>
                      <SiMongodb fill="#86ce2e" />
                    </span>
                    <p>Mongodb</p>
                  </li>
                 
                </Fade>
              </ul>
            </div>
          </div>
        </div>
        <div className="tools">
          <p className="subTitle">Tools</p>
          <div className="toolsInSkills">
            <ul className="skillsList">
              <Fade direction="up" duration={700}>
                <li>
                  <span>
                    <SiGit fill="#f34f29" />
                  </span>
                  <p>Git</p>
                </li>
                <li>
                  <span>
                    <SiCypress />
                  </span>
                  <p>Cypress</p>
                </li>
                <li>
                  <span>
                    <SiGithub />
                  </span>
                  <p>Github</p>
                </li>
                <li>
                  <span>
                    <SiPostman fill="#f36933" />
                  </span>
                  <p>Postman</p>
                </li>
                <li>
                  <span>
                    <SiNetlify fill="#37a1a1" />
                  </span>
                  <p>Netlify</p>
                </li>
                <li>
                  <span>
                    <SiHeroku style={{ background: "#440099" }} />
                  </span>
                  <p>Heroku</p>
                </li>
                <li>
                  <span>
                    <VscJson />
                  </span>
                  <p>Jeson-Server</p>
                </li>
                <li>
                  <span>
                    <SiNpm fill="#e55c5c" />
                  </span>
                  <p>NPM</p>
                </li>
                <li>
                  <span>
                    <SiVercel />
                  </span>
                  <p>Vercel</p>
                </li>
              </Fade>
            </ul>
          </div>
        </div>
      </div>
      <Github/>
    </SkillsDiv>
  );
};

export default Skills;
