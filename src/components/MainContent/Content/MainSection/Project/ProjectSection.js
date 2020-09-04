import React from "react";
import ProjectCard from "./ProjectCard";

function ProjectSection() {
  return (
    <div className="container-flex">
      <div className="row">
        <div className="col-md-4"></div>
        <h4 className="heading col-md-4">My Work</h4>
        <div className="col-md-4"></div>
      </div>
      <div className="d-flex justify-content-center">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}

export default ProjectSection;
