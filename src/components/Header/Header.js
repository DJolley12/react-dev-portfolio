import React, { useState, useEffect } from "react";
// import ThemeButton from "./HeaderContents/ThemeButton";
import MainBackGroundImage from "./HeaderContents/HomeImageScreen/MainBackGroundImage";
import MainAnimation from "./HeaderContents/MainAnimation/MainAnimation";
import MainBody from "../MainContent/MainBody";
import ThemeButton from "./HeaderContents/ThemeButton";
import MainImage from "./HeaderContents/MainAnimation/MainImage";
import MainContent from "../MainContent/MainBody";
import NavBar from "../MainContent/Content/NavBar";
import AboutSection from "../MainContent/Content/MainSection/AboutSection/AboutSection";
import NavButton from "../Shared/SecondaryButton";

const presentationStyles = {
  height: "100vh",
};

function Header(props) {
  //MainContent hooks
  const [displayAboutSection, setDisplayAboutSection] = useState(true);
  const [displayProjectSection, setDisplayProjectSection] = useState(false);
  const [displayContactSection, setDisplayContactSection] = useState(false);

  //functions
  function changeAboutSectionDisplay(newDisplay) {
    setDisplayAboutSection(newDisplay);
  }

  function changeProjectSectionDisplay(newDisplay) {
    setDisplayProjectSection(newDisplay);
  }

  function changeContactSectionDisplay(newDisplay) {
    setDisplayContactSection(newDisplay);
  }

  return (
    <header className="main">
      <MainBackGroundImage />
      {props.displayMainAnimation && (
        <MainAnimation
          displayMainAnimation={props.displayMainAnimation}
          displayMainSection={props.displayMainSection}
          initialLoad={props.initialLoad}
          onChange={[props.onChange[0], props.onChange[1], props.onChange[2]]}
        />
      )}
      {props.displayMainSection && (
        <MainBody
          displayAboutSection={displayAboutSection}
          displayProjectSection={displayProjectSection}
          displayContactSection={displayContactSection}
          onChange={[
            props.onChange[0],
            props.onChange[1],
            changeAboutSectionDisplay,
            changeProjectSectionDisplay,
            changeContactSectionDisplay,
          ]}
        />
      )}
    </header>
  );
}

export default Header;
