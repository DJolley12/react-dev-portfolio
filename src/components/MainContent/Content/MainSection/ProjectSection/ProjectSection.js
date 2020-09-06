import React from "react";
import ProjectCard from "./contents/ProjectCard";

const ucContent = {
  heading: "Utah Committee",
  description:
    "A live website-Razor Pages, C#, SQL, Entity Framework, Bootstrap",
  languages: [
    "C#",
    // "ASP.NET Core",
    // "Razor Pages",
    // "JavaScript",
    // "JQuery",
    // "Bootstrap",
    // "Entity Framework",
  ],
};

const siteContent = {
  heading: "This Site",
  description:
    "React, Bootstrap, Vanilla JavaScript, NES.css, Vanilla CSS, and HTML5.",
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

const dbBackup = {
  heading: "Database Backup",
  description:
    "Database backup tool written in C#, for backing up both Azure and local SQL databases",
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
  return (
    <div className="container-flex">
      <div className="row">
        <div className="col-md-4"></div>
        <h4 className="heading col-md-4">My Work</h4>
        <div className="col-md-4"></div>
      </div>
      <div className="d-flex justify-content-center">
        <ProjectCard content={ucContent} />
        <ProjectCard content={siteContent} />
        <ProjectCard content={dbBackup} />
      </div>
    </div>
  );
}

export default ProjectSection;
