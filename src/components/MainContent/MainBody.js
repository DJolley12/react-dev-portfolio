import React, { useState, useEffect } from "react";

import AboutSection from "./Content/MainSection/AboutSection/AboutSection";
import ConsoleInput from "../ConsoleInput/ConsoleInput";
import ContactSection from "./Content/MainSection/ContactSection/ContactSection"
import HomeMenu from "./Content/MainSection/HomeMenu/HomeMenu";
import InfoHeading from "./Content/MainSection/InfoHeading";
import MainSection from "./Content/MainSection/MainSection";
import NavBar from "./Content/NavBar";
import ProjectSection from "./Content/MainSection/ProjectSection/ProjectSection";
import handleHome from "./Content/MainSection/keystrokeHandler/handleHome";
import handleConsoleEnabled from "./Content/MainSection/keystrokeHandler/handleConsoleEnabled";
import handleKeystrokeInput from "./Content/MainSection/keystrokeHandler/handleKeystrokeInput";

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
        handleConsoleEnabled(props, e);
      } else if (displayConsoleInput === true) {
        setDisplayConsoleInput(false);
        handleHome(props, e);
      }
    } else {
      handleKeystrokeInput(props, e);
    }
  };

  return (
    <>
      {!displayConsoleInput && <InfoHeading />}
      {props.displayHomeMenu && <HomeMenu />}
      {props.displayAboutSection && <AboutSection />}
      {props.displayProjectSection && <ProjectSection />}
      {props.displayContactSection && <ContactSection />}
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
