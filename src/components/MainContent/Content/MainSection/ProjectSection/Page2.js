import React from "react"
import ProjectCard from "./ProjectCard/ProjectCard"

function Page2(props) {
    return (
        <>
            <ProjectCard
                content={props.siteContent}
                hovered={props.projectIsHovered}
                callback={props.siteMouseEnter}
            />
            <ProjectCard
                content={props.dbBackup}
                hovered={props.projectIsHovered}
                callback={props.dbBackupMouseEnter}
            />
        </>
    )
}

export default Page2