import React, { useState } from "react";
import AboutHeading from "./AboutHeading";
import AboutDescription from "./AboutDescription";
import "./about_section.css";
import SecondaryButton from "../../../../Shared/SecondaryButton";
import NavBar from "../../../Content/NavBar";
import StuffIUse from "./StuffIUse/StuffIUse";
import TechStack from "./TechStack/TechStack";

// const aboutDescription = {
//   description:
//     "In case you didn't see it in the loading page, *~~zzzz~~* I'm Daniel Jolley, a full Stack Developer. My favorite Stack is C#, React, and SQL, complimented nicely by Entity Framework. I am a musician, music enthusiast, aviation enthusiast, Instrument Rated Private Pilot,  game enthusiast, and most importantly, a tech enthusiast. I'm fueled by Visual Studio, VS Code, Coffee, and a love for coding. I hate to admit it, but I'm a Microsoft fanboy. I love C#, SQL, and Entity Framework. They also produce the best coding environments (in my humble opinion)... I also love open source, and Github is where I spend a lot of my freetime, getting inspired by the work others have done. I also love JavaScript (even though I also hate it sometimes), and most of all, React.js is the latest technology that has me the most excited! In general, frontend work has an exciting fulfillment to it :)",
// };

const aboutDescription = {
  description: [
    "I am a professional software developer ",
    "with an earnest love of learning and mastering my craft. ",
    "I have a strong background ",
    "in the full web stack, specializing in backend. ",
    "I've worked as both a freelancer, and in the enterprise world, currently working on an agile team. ",
    "I used to work primarily as a .NET developer, ",
    "but have recently moved on, with my languages of choice being Go and Rust. ",
    "I have expertise in PostgreSQL and MSSQL, with a strong preference to Postgres-",
    "Postgres has such a rich set of index types, and awesome json support. ",
    "I love query tuning, and getting the most performance out of my DBMS. ",
    "I'm currently working as a Backend Software Engineer with microservices GRPC, golang, and PostgreSQL. ",
    "My front end choices are ReactJS and Blazor for SPA's. ",
    "Even though I have a strong preference in non-microsoft technologies, ",
    "I still have a soft spot for Avalonia UI for Desktop apps. ",
    "I love unix systems, and work on a Linux computer whenever possible, and love to leverage bash. ",
    "I will work almost exclusively in the terminal if I can help it. ",
    "Check out some of my open source projects!",
  ],
};

const stuffIUseContent1 = {
  buttonText: "_stuff_i_use",
  class: "about_section_button",
  styles: {
    opacity: ".5",
    position: "absolute",
    top: "59vh",
    left: "18vw",
  },
};

const stuffIUseContent2 = {
  buttonText: "_stuff_i_use",
  class: "about_section_button",
  styles: {
    position: "absolute",
    top: "59vh",
    left: "18vw",
  },
};

const myTechStackContent1 = {
  buttonText: "my_tech_stack",
  class: "about_section_button",
  styles: {
    opacity: ".5",
    position: "absolute",
    top: "59vh",
    left: "1vw",
  },
};

const myTechStackContent2 = {
  buttonText: "my_tech_stack",
  class: "about_section_button",
  styles: {
    position: "absolute",
    top: "59vh",
    left: "1vw",
  },
};

const backToAboutContent1 = {
  buttonText: "_back_to_about",
  class: "about_section_back_button",
  styles: {
    opacity: ".5",
    position: "absolute",
    top: "59vh",
    left: "35vw",
  },
};

const backToAboutContent2 = {
  buttonText: "_back_to_about",
  class: "about_section_back_button",
  styles: {
    position: "absolute",
    top: "59vh",
    left: "35vw",
  },
};

function AboutSection() {
  const [displayAboutDescription, setDisplayAboutDescription] = useState(true);
  const [displayStuffIUse, setDisplayStuffIUse] = useState(false);
  const [displayTechStack, setDisplayTechStack] = useState(false);

  function changeAboutDescription(newDisplay) {
    setDisplayAboutDescription(newDisplay);
  }

  function changeDisplayStuffIUse(newDisplay) {
    setDisplayStuffIUse(newDisplay);
  }

  function changeDisplayTechStack(newDisplay) {
    setDisplayTechStack(newDisplay);
  }

  return (
    <div className="container-flex layer-top main_border" id="about_section">
      <AboutHeading />
      {displayAboutDescription && (
        <AboutDescription text1={aboutDescription.description} />
      )}
      {displayStuffIUse && <StuffIUse />}
      {displayTechStack && <TechStack />}
      {displayStuffIUse ? (
        <SecondaryButton
          content={stuffIUseContent1}
          callBacks={[
            changeAboutDescription,
            changeDisplayStuffIUse,
            changeDisplayTechStack,
          ]}
          targets={[
            "displayAboutDescription",
            "displayStuffIUse",
            "displayTechStack",
          ]}
          values={[false, true, false]}
        />
      ) : (
        <SecondaryButton
          content={stuffIUseContent2}
          callBacks={[
            changeAboutDescription,
            changeDisplayStuffIUse,
            changeDisplayTechStack,
          ]}
          targets={[
            "displayAboutDescription",
            "displayStuffIUse",
            "displayTechStack",
          ]}
          values={[false, true, false]}
        />
      )}
      {displayTechStack ? (
        <SecondaryButton
          content={myTechStackContent1}
          callBacks={[
            changeAboutDescription,
            changeDisplayStuffIUse,
            changeDisplayTechStack,
          ]}
          targets={[
            "displayAboutDescription",
            "displayStuffIUse",
            "displayTechStack",
          ]}
          values={[false, false, true]}
        />
      ) : (
        <SecondaryButton
          content={myTechStackContent2}
          callBacks={[
            changeAboutDescription,
            changeDisplayStuffIUse,
            changeDisplayTechStack,
          ]}
          targets={[
            "displayAboutDescription",
            "displayStuffIUse",
            "displayTechStack",
          ]}
          values={[false, false, true]}
        />
      )}

      {displayAboutDescription ? (
        <SecondaryButton
          content={backToAboutContent1}
          callBacks={[
            changeAboutDescription,
            changeDisplayStuffIUse,
            changeDisplayTechStack,
          ]}
          targets={[
            "displayAboutDescription",
            "displayStuffIUse",
            "displayTechStack",
          ]}
          values={[true, false, false]}
        />
      ) : (
        <SecondaryButton
          content={backToAboutContent2}
          callBacks={[
            changeAboutDescription,
            changeDisplayStuffIUse,
            changeDisplayTechStack,
          ]}
          targets={[
            "displayAboutDescription",
            "displayStuffIUse",
            "displayTechStack",
          ]}
          values={[true, false, false]}
        />
      )}
    </div>
  );
}

export default AboutSection;
