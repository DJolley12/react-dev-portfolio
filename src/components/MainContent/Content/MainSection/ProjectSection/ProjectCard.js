import React from "react";
import CodeBadge from "./CodeBadge";

function ProjectCard(props) {
  let description = props.hovered.projectHover
    ? props.content.description2
    : props.content.description1;

    function handleMouseEnter(event) {
      let targetValue = props.targetValue;
      props.onEnterCallback((event.target.targetValue = true));
     }

     function handleMouseLeave(event) {
        let targetValue = props.targetValue;
        props.onLeaveCallback((event.target.targetValue = false));
    
     }
  
  return (
    <div className="project_card layer-top" 
    style={props.content.styles}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}    
    >
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
