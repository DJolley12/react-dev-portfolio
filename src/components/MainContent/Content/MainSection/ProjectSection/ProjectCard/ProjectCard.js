import React from "react";
import CodeBadges from "./CodeBadge/CodeBadges"
import "./project-card.css"

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
        <p className="text-align-left project_card_padding">
          {props.content.heading}
        </p>
        <p className="text-align-left project_card_padding project_card_description">
          {props.content.description1}
        </p>
      </div>
        <CodeBadges content={props.content} />
    </div>
  );
}

export default ProjectCard;
