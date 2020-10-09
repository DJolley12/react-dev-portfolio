import React, { useState, useEffect } from "react";

import AboutSection from "./Content/MainSection/AboutSection/AboutSection";
import ConsoleInput from "../ConsoleInput/ConsoleInput";
import HomeMenu from "./Content/MainSection/HomeMenu/HomeMenu";
import InfoHeading from "./Content/MainSection/InfoHeading";
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
        props.changeHomeMenuDisplay((e.target.displayHomeMenu = false));
        props.changeAboutSectionDisplay((e.target.displayAboutSection = false));
        props.changeProjectSectionDisplay(
          (e.target.displayProjectSection = false)
        );
        props.changeContactSectionDisplay(
          (e.target.displayContactSection = false)
        );
      } else if (displayConsoleInput === true) {
        setDisplayConsoleInput(false);
        props.changeHomeMenuDisplay((e.target.displayHomeMenu = true));
        props.changeAboutSectionDisplay((e.target.displayAboutSection = false));
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
      {!displayConsoleInput && <InfoHeading />}
      {props.displayHomeMenu && <HomeMenu />}
      {props.displayAboutSection && <AboutSection />}
      {props.displayProjectSection && <ProjectSection />}
      {/* {prop.displayContactSection && <ContactSection />} */}
      {displayConsoleInput && (
        <ConsoleInput
          displayHomeMenu={props.displayHomeMenu}
          displayAboutSection={props.displayAboutSection}
          displayProjectSection={props.displayProjectSection}
          displayContactSection={props.displayContactSection}
          changeHomeMenuDisplay={props.changeHomeMenuDisplay}
          changeAboutSectionDisplay={props.changeAboutSectionDisplay}
          changeProjectSectionDisplay={props.changeProjectSectionDisplay}
          changeContactSectionDisplay={props.changeContactSectionDisplay}
          changeConsoleInputDisplay={changeConsoleInputDisplay}
        />
      )}
      {!displayConsoleInput && <NavBar
        displayHomeMenu={props.displayHomeMenu}
        displayAboutSection={props.displayAboutSection}
        displayProjectSection={props.displayProjectSection}
        displayContactSection={props.displayContactSection}
        changeHomeMenuDisplay={props.changeHomeMenuDisplay}
        changeMainAnimationDisplay={props.changeMainAnimationDisplay}
        changeMainSectionDisplay={props.changeMainSectionDisplay}
        changeAboutSectionDisplay={props.changeAboutSectionDisplay}
        changeProjectSectionDisplay={props.changeProjectSectionDisplay}
        changeContactSectionDisplay={props.changeContactSectionDisplay}
      />}
    </>
  );
}

export default MainBody;
