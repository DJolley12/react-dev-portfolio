import React from "react";
import CodeBadge from "./CodeBadge";

function ProjectCard(props) {
  let description = props.hovered.projectHover
    ? props.content.description2
    : props.content.description1;

    function handleMouseEvent(event) {
      console.log(event);
      let targetValue = props.targetValue;
      props.callback((event.target = !props.hovered));
     }

     function handleMouseLeave(event) {
        let targetValue = props.targetValue;
        props.onLeaveCallback((event.target = false));
    
     }
  
  return (
    <div className="project_card layer-top" 
    style={props.content.styles}
    onMouseEnter={handleMouseEvent}
    onMouseLeave={handleMouseEvent}    
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
