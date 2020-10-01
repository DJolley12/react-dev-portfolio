import React from "react";
import AboutHeading from "./contents/AboutHeading";
import AboutDescription from "./contents/AboutDescription";
import NavBar from "../../../Content/NavBar";

// const aboutDescription = {
//   description:
//     "In case you didn't see it in the loading page, *~~zzzz~~* I'm Daniel Jolley, a full Stack Developer. My favorite Stack is C#, React, and SQL, complimented nicely by Entity Framework. I am a musician, music enthusiast, aviation enthusiast, Instrument Rated Private Pilot,  game enthusiast, and most importantly, a tech enthusiast. I'm fueled by Visual Studio, VS Code, Coffee, and a love for coding. I hate to admit it, but I'm a Microsoft fanboy. I love C#, SQL, and Entity Framework. They also produce the best coding environments (in my humble opinion)... I also love open source, and Github is where I spend a lot of my freetime, getting inspired by the work others have done. I also love JavaScript (even though I also hate it sometimes), and most of all, React.js is the latest technology that has me the most excited! In general, frontend work has an exciting fulfillment to it :)",
// };
const mainBorderStyle = {
  borderLeft: "4px dashed #30c31c",
  borderRight: "4px dashed #30c31c",
  borderTop: "4px solid #30c31c",
  borderBottom: "4px solid #30c31c",
  marginRight: "20%",
  marginLeft: "20%",
  marginTop: "20vh",
};

const aboutDescription = {
  description:
    "In case you didn't see it in the loading page, *~~zzzz~~* I'm Daniel Jolley, a full Stack Developer. I am a musician, music enthusiast, aviation enthusiast, Instrument Rated Private Pilot,  game enthusiast, and most importantly, a tech enthusiast. ",
};

function AboutSection() {
  return (
    <div
      className="container-flex layer-top main-border"
      style={mainBorderStyle}
    >
      <AboutHeading />
      <AboutDescription content={aboutDescription} />
    </div>
  );
}

export default AboutSection;
