import React, { useState, useEffect } from "react";

import AboutSection from "./Content/MainSection/AboutSection/AboutSection";
import ConsoleInput from "../ConsoleInput/ConsoleInput";
import MainSection from "./Content/MainSection/MainSection";
import NavBar from "./Content/NavBar";
import ProjectSection from "./Content/MainSection/ProjectSection/ProjectSection";

function MainBody(props) {
  const [displayConsoleInput, setDisplayConsoleInput] = useState(false);

  function changeConsoleInputDisplay(newDisplay) {
    setDisplayConsoleInput(newDisplay);
  }

  document.onkeydown = document.onkeydown = function (e) {
    e = e || window.event;

    if (e.key === "Enter") {
      if (displayConsoleInput === false) {
        setDisplayConsoleInput(true);
        props.changeAboutSectionDisplay((e.target.displayAboutSection = false));
        props.changeProjectSectionDisplay(
          (e.target.displayProjectSection = false)
        );
        props.changeContactSectionDisplay(
          (e.target.displayContactSection = false)
        );
      } else if (displayConsoleInput === true) {
        setDisplayConsoleInput(false);
        props.changeAboutSectionDisplay((e.target.displayAboutSection = true));
        props.changeProjectSectionDisplay(
          (e.target.displayProjectSection = false)
        );
        props.changeContactSectionDisplay(
          (e.target.displayContactSection = true)
        );
      }
    }
  };

  return (
    <>
      {props.displayAboutSection && <AboutSection />}
      {props.displayProjectSection && <ProjectSection />}
      {displayConsoleInput && (
        <ConsoleInput
          displayAboutSection={props.displayAboutSection}
          displayProjectSection={props.displayProjectSection}
          displayContactSection={props.displayContactSection}
          changeAboutSectionDisplay={props.changeAboutSectionDisplay}
          changeProjectSectionDisplay={props.changeProjectSectionDisplay}
          changeContactSectionDisplay={props.changeContactSectionDisplay}
          changeConsoleInputDisplay={changeConsoleInputDisplay}
        />
      )}
      <NavBar
        displayAboutSection={props.displayAboutSection}
        displayProjectSection={props.displayProjectSection}
        displayContactSection={props.displayContactSection}
        changeMainAnimationDisplay={props.changeMainAnimationDisplay}
        changeMainSectionDisplay={props.changeMainSectionDisplay}
        changeAboutSectionDisplay={props.changeAboutSectionDisplay}
        changeProjectSectionDisplay={props.changeProjectSectionDisplay}
        changeContactSectionDisplay={props.changeContactSectionDisplay}
      />
    </>
  );
}

export default MainBody;
