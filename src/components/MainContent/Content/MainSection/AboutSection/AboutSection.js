import React from "react";
import AboutHeading from "./AboutHeading";
import AboutDescription from "./AboutDescription";
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
  marginLeft: "17%",
  marginTop: "15vh",
  height: "60vh",
  width: "65vw",
};

const aboutDescription = {
  description:
    "I am a Freelance Full Stack Developer, with a consistent need to replace boredom with learning something new. I have a strong background in mainly Back-End and Desktop development, and a deep case of C# fanboy-syndrome, with my Back-End stack of choice being C#, Entity Framework, and SQL. My Front choices are ReactJS and Blazor for SPA's. For Desktop apps, I use C#, Java, and Python. Check out some of my open source projects!",
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
