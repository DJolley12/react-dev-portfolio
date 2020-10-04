import React from "react";
import CodeBadge from "./CodeBadge";

function ProjectCard(props) {
  let description = props.hovered.projectHover
    ? props.content.description2
    : props.content.description1;

  console.log(props.hovered);
  console.log(props.content);

  return (
    <div className="d-flex justify-content-lg-center project_card layer-top">
      <div className="row">
        <p className="text-align-left" style={{ paddingLeft: "1rem" }}>
          {props.content.heading}
        </p>
        <p className="text-align-left" style={{ paddingLeft: "1rem" }}>
          {props.hovered.projectHover
            ? props.content.description2
            : props.content.description1}
        </p>
      </div>
      <div className="row">
        <CodeBadge content={props.content} />
      </div>
    </div>
  );
}

export default ProjectCard;
