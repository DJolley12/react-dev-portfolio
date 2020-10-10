import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

const quickTourneys = {
  heading: "Quick Tourneys Gaming",
  description1: "Website for hosting Call of Duty Warzone tournaments. ",
  description2:
    "Client wanted a solution that would pull data during a tournament with live updates, and the best determined solution was an api wrapper implementation. This is also what inspired me to write the open source wrapper, as there were no API wrappers in C#.",
  languages: [
    "C#",
    // "JavaScript",
    // "ASP.NET Core",
    // "Bootstrap",
    // "MySQL",
    // "JQuery",
  ],
  styles: {
    left: "2.5%"
  }
};

const codWrapperContent = {
  heading: "CallOfDutyApiWrapper",
  description1: "Easy calls to the activision API in C#",
  description2:
    ".NET Standard Class Library wrapper for Call of Duty's API. I decided to write this after I had a freelance project to do with it, and didn't see any other work on this in C#. Would've saved me a bunch of time!",
  languages: ["C#"],
  styles: {
    left: "35%"
  }
};

const ucContent = {
  heading: "Utah Committee",
  description1:
    "A live website-Razor Pages, C#, SQL, Entity Framework, Bootstrap",
  description2:
    "I am currently still contributing to this site. To minimize complexity, Razor Pages and minimal JavaScript was used for mostly server side rendered content",
  languages: [
    "C#",
    // "ASP.NET Core",
    // "Razor Pages",
    // "JavaScript",
    // "JQuery",
    // "Bootstrap",
    // "Entity Framework",
  ],
  styles: {
    left: "67.5%"
  }
};

const siteContent = {
  heading: "This Site",
  description1:
    "This is my portfolio, and official personal webpage for both freelancing and employment inquiries.",
  description2:
    "I wanted a way to play with React, and demonstrate my abilities to apply it to a project. ",
  languages: [
    "React",
    "CSS3",
    "HTML5",
    "Bootstrap",
    "NES.css",
    "(I love frameworks/libraries, can you tell?)",
  ],
  
};

const dbBackup = {
  heading: "Database Backup",
  description1: "Database backup tool written in C#",
  description2:
    "Written as a utility for utah committee admins, this is for backing up both Azure and local SQL databases.",
  languages: [
    "C#",
    "ASP.NET Core",
    "Razor Pages",
    "JavaScript",
    "JQuery",
    "Bootstrap",
    "Entity Framework",
  ],
};

function ProjectSection() {
  const [projectHover, setProjectHover] = useState(false);

  return (
    <div className="container-flex layer-top main_border">
      <div className="row">
        <div className="col-md-4"></div>
        <h4 className="heading col-md-4 layer-top">My Work</h4>
        <div className="col-md-4"></div>
      </div>
      <div className="d-flex">
        <ProjectCard
          content={quickTourneys}
          hovered={projectHover}
          onMouseEnter={() => setProjectHover(true)}
          onMouseLeave={() => setProjectHover(false)}
        />
        <ProjectCard
          content={codWrapperContent}
          hovered={projectHover}
          onMouseEnter={() => setProjectHover(true)}
          onMouseLeave={() => setProjectHover(false)}
        />
        <ProjectCard
          content={ucContent}
          hovered={projectHover}
          onMouseEnter={() => setProjectHover(true)}
          onMouseLeave={() => setProjectHover(false)}
        />
      </div>
      {/* <div className="d-flex justify-content-center">
        <ProjectCard
          content={dbBackup}
          hovered={projectHover}
          onMouseEnter={() => setProjectHover(true)}
          onMouseLeave={() => setProjectHover(false)}
        />
        <ProjectCard
          content={siteContent}
          hovered={projectHover}
          onMouseEnter={() => setProjectHover(true)}
          onMouseLeave={() => setProjectHover(false)}
        />
      </div> */}
    </div>
  );
}

export default ProjectSection;
