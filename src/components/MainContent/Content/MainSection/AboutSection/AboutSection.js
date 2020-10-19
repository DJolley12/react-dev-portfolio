import React, { useState } from "react";
import AboutHeading from "./AboutHeading";
import AboutDescription from "./AboutDescription";
import "./about_section.css";
import SecondaryButton from "../../../../Shared/SecondaryButton";
import NavBar from "../../../Content/NavBar";
import StuffILove from "./StuffILove";
import TechStack from "./TechStack"

// const aboutDescription = {
//   description:
//     "In case you didn't see it in the loading page, *~~zzzz~~* I'm Daniel Jolley, a full Stack Developer. My favorite Stack is C#, React, and SQL, complimented nicely by Entity Framework. I am a musician, music enthusiast, aviation enthusiast, Instrument Rated Private Pilot,  game enthusiast, and most importantly, a tech enthusiast. I'm fueled by Visual Studio, VS Code, Coffee, and a love for coding. I hate to admit it, but I'm a Microsoft fanboy. I love C#, SQL, and Entity Framework. They also produce the best coding environments (in my humble opinion)... I also love open source, and Github is where I spend a lot of my freetime, getting inspired by the work others have done. I also love JavaScript (even though I also hate it sometimes), and most of all, React.js is the latest technology that has me the most excited! In general, frontend work has an exciting fulfillment to it :)",
// };

const aboutDescription = {
  description: [
    "I am a Freelance Full Stack Developer, ",
    "with a consistent need to replace boredom with learning something new. ",
    "I have a strong background ",
    "in mainly Back-End and Desktop development, ",
    "and a deep case of C# fanboy-syndrome, ",
    "with my Back-End stack of choice being C#, ",
    "Entity Framework, and SQL. ",
    "My Front choices are ReactJS and Blazor for SPA's. ",
    "For Desktop apps, ",
    "I use C#, ",
    "Java, and Python. ",
    "Check out some of my open source projects!",
  ],
};

const stuffILoveContent = {
  buttonText: "_stuff_i_love",
  class: "about_section_button",
  styles: {
    position: "absolute",
    top: "59vh",
    left: "18vw",
  },
};

const myTechStackContent = {
  buttonText: "my_tech_stack",
  class: "about_section_button",
  styles: {
    position: "absolute",
    top: "59vh",
    left: "1vw",
  },
};

const backToAboutContent = {
  buttonText: "_back_to_about",
  class: "about_section_button",
  styles: {
    position: "absolute",
    top: "59vh",
    left: "35vw",
  },
};

function AboutSection() {

  const [displayAboutDescription, setDisplayAboutDescription] = useState(true);
  const [displayStuffILove, setDisplayStuffILove] = useState(false);
  const [displayTechStack, setDisplayTechStack] = useState(false);

  function changeAboutDescription(newDisplay) {
    setDisplayAboutDescription(newDisplay);
  }

  function changeDisplayStuffILove(newDisplay) {
    setDisplayStuffILove(newDisplay);
  }

  function changeDisplayTechStack(newDisplay) {
    setDisplayTechStack(newDisplay);
  }

  return (
    <div
      className="container-flex layer-top main_border"
      id="about_section"
      
    >
      <AboutHeading />
      {displayAboutDescription && <AboutDescription text1={aboutDescription.description} />}
      {displayStuffILove && <StuffILove />}
      {displayTechStack && <TechStack/>}
      <SecondaryButton 
        content={stuffILoveContent} 
        callBacks={[changeAboutDescription, changeDisplayStuffILove, changeDisplayTechStack]} 
        targets={["displayAboutDescription", "displayStuffILove", "displayTechStack"]}
        values={[false, true, false]}
      />
      <SecondaryButton 
        content={myTechStackContent}
        callBacks={[changeAboutDescription, changeDisplayStuffILove, changeDisplayTechStack]} 
        targets={["displayAboutDescription", "displayStuffILove", "displayTechStack"]}
        values={[false, false, true]}
      />
      
      {!displayAboutDescription && <SecondaryButton
        content={backToAboutContent} 
        callBacks={[changeAboutDescription, changeDisplayStuffILove, changeDisplayTechStack]} 
        targets={["displayAboutDescription", "displayStuffILove", "displayTechStack"]}
        values={[true, false, true]}
      />}
    </div>
  );
}

export default AboutSection;
