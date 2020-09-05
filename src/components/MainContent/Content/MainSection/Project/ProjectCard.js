import React from "react";

function ProjectCard(props) {
  return (
    <div className="d-flex justify-content-lg-center project_card">
      <div className="row">
        <h4 className="text-align-left" style={{ paddingLeft: "1rem" }}>
          {props.content.heading}
        </h4>
        <p className="text-align-left" style={{ paddingLeft: "1rem" }}>
          {props.content.description}
        </p>
      </div>
    </div>
  );
}

export default ProjectCard;
