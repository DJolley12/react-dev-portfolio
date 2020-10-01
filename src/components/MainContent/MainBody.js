import React from "react";
import NavBar from "./Content/NavBar";
import MainSection from "./Content/MainSection/MainSection";
import AboutSection from "./Content/MainSection/AboutSection/AboutSection";
import ProjectSection from "./Content/MainSection/ProjectSection/ProjectSection";

function MainBody(props) {
  return (
    <>
      {props.displayAboutSection && <AboutSection />}
      {props.displayProjectSection && <ProjectSection />}
      <NavBar
        displayAboutSection={props.displayAboutSection}
        displayProjectSection={props.displayProjectSection}
        displayContactSection={props.displayContactSection}
        changeMainAnimationDisplay={props.onChange[0]}
        changeMainSectionDisplay={props.onChange[1]}
        changeAboutSectionDisplay={props.onChange[2]}
        changeProjectSectionDisplay={props.onChange[3]}
        changeContactSectionDisplay={props.onChange[4]}
      />
    </>
  );
}

export default MainBody;
