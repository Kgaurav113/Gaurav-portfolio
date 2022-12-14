import React, { useState } from "react";
import ProjectsCon from "../css/Projects.styled";
import Singleproject from "./Signleproject";


let projectData = [
  {
    id: 4,
    heroImage: `https://miro.medium.com/max/1400/1*Ln_egYPhvn20CFpL5ABrSA.png`,
    title: "Be Bodywise clone",
    desc: "A web application to provide Health-related solutions for women.",
    resposibility:"ππ«πππ¬ π¨π π«ππ¬π©π¨π§π¬π’ππ’π₯π’π­π²: β’ Built Navbar β’Homepage",
   
    team: "A collaborative project, built in 6 days by a team of 6 members.",
    git: "https://github.com/Kgaurav113/Bebodywise-clone",
    deployed: "https://gallant-jackson-573754.netlify.app/index.html",
    techStack:
      " HTML5 | CSS3 | Javascript",
    blog: "#",
  },
  {
    id: 1,
    heroImage:
      "https://camo.githubusercontent.com/9a3905da8d3fa2a2b0c56bc2329455693ec1b12e16a97ad64820f9f0a8b2c383/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f3730302f312a675a334747576a70344c7a54746f34356654716a39512e706e67",
    title: "Porter.com Clone",
    desc: "A web application for mini truck and bike booking service ",
    resposibility:"ππ«πππ¬ π¨π π«ππ¬π©π¨π§π¬π’ππ’π₯π’π­π²: β’Build Support page and product data",
   
    team: "A collaborative project, built in 6 days by a team of 6 members.",
    git: "https://github.com/Kgaurav113/porter--clone",
    deployed: "https://beautiful-rabanadas-160fc9.netlify.app/",
    techStack:
      "HTML5 | CSS3 | React Js |  Javascript",
    blog: "",
  },
  {
    id: 2,
    heroImage:
      "https://camo.githubusercontent.com/5881fbcfe97fff50837f28ddbb0574a1409a79e922cff751c0e2a175a8d84136/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f313430302f312a62326852566744714f3348686f434a4b6635413753512e6a706567",
    title: "Meesho Clone",
    resposibility:"ππ«πππ¬ π¨π π«ππ¬π©π¨π§π¬π’ππ’π₯π’π­π²: β’ Built Navbar β’ footer and some page div",
    desc: "Meesho is an Indian e-commerce company, We tried core functionalities of Meesho during Third Construct Week held after completion of Unit 4 in Masai.",
    team: "A collaborative project, built in 6 days by a team of 5 members.",
    git: "https://github.com/Kgaurav113/meesho-clone-react",
    deployed: "https://meesho-by-nitrogen.netlify.app/",
    techStack: "HTML5 | CSS3 | Javascript | React Js | Redux  | Styled-Components |",
    blog: "",
  },
  {
    id: 3,
    heroImage:
      "https://i.postimg.cc/C51qFfzh/my.png",
    title: "Mytheresa Clone",
    desc: " Mytheresa is a German e-commerce luxury fashion company .",
    resposibility:"ππ«πππ¬ π¨π π«ππ¬π©π¨π§π¬π’ππ’π₯π’π­π²: β’ Built Navbar and footer β’ fetched data from using axios β’ Built product pagesβ’ Created objects and crousel",
   
    team: "Individual Project",
    git: "https://github.com/Kgaurav113/Myetheresaclone-react",
    deployed: "https://62ac661a9fe021460541f16e--mytheresacloneg.netlify.app/",
    techStack: "HTML5 | CSS3 | React Js | Redux | Redux | Styled-Components | Javascript | Material Ui",
    blog: "https://gautamgohil.hashnode.dev/functional-clone-of-geekbuying-e-commerce-website",
  },
  {
    id: 5,
    heroImage:
      "https://camo.githubusercontent.com/2e7d95b990d879025a1038c3e10b863c3930cdd3d99d4ddf0cbb8d760e846b99/68747470733a2f2f692e706f7374696d672e63632f5a59644c443473592f686f6d65706167652e706e67",
    title: "Toggl-Track clone",
    desc: "Toggl Track is a time tracking website.",
    resposibility:"ππ«πππ¬ π¨π π«ππ¬π©π¨π§π¬π’ππ’π₯π’π­π²: β’ Built landing and footer β’ fetched data from using axios β’ Built backend server",
   
    team: "Group Project",
    git: "https://github.com/Kgaurav113/toggl-track-clone",
    deployed: "https://toggletrack.vercel.app/",
    techStack: "HTML5 | CSS3 | React Js | nodejs | express | Mongodb | Javascript | Chakra Ui",
   
  },
  {
    id: 5,
    heroImage:
      "https://i.postimg.cc/pXg3vkqD/youtube.png",
    title: "youtube clone",
    desc: "youtube is  online video sharing and social media platform.",
    resposibility:"ππ«πππ¬ π¨π π«ππ¬π©π¨π§π¬π’ππ’π₯π’π­π²: β’ Built landing ",
   
    team: "individual mini Project",
    git: "https://github.com/Kgaurav113/youtube",
    deployed: "https://youtubegaurav.netlify.app/",
    techStack: "HTML5 | CSS3  | Javascript |",
   
  },

];

const Projects = () => {
  const [data, setData] = useState(projectData);

  return (
    <ProjectsCon id="projects">
      <p className="subTitle">Projects</p>
      <div className="projectCon">
        {data.map((el) => {
          return <Singleproject key={el.id} {...el} />;
        })}
      </div>
    </ProjectsCon>
  );
};

export default Projects;
