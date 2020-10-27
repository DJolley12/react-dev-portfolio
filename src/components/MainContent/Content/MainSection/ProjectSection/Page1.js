import React from "react"
import ProjectCard from "./ProjectCard/ProjectCard"

function Page1(props) {
    return (
        <> 
          <ProjectCard
            content={props.quickTourneys}
            hovered={props.projectIsHovered}
            callback={props.quickTourneysMouseEnter}
          />
          <ProjectCard
            content={props.codWrapperContent}
            hovered={props.projectIsHovered}
            callback={props.codWrapperMouseEnter}
          />
          <ProjectCard
            content={props.ucContent}
            hovered={props.projectIsHovered}
            callback={props.uCMouseEnter}
          />
        </>
    )
}

export default Page1