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
  const [displayHomeMenu, setDisplayHomeMenu] = useState(true);
  const [displayAboutSection, setDisplayAboutSection] = useState(false);
  const [displayProjectSection, setDisplayProjectSection] = useState(false);
  const [displayContactSection, setDisplayContactSection] = useState(false);

  //functions
  function changeHomeMenuDisplay(newDisplay) {
    setDisplayHomeMenu(newDisplay);
  }

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
          changeMainAnimationDisplay={props.changeMainAnimationDisplay}
          changeMainSectionDisplay={props.changeMainSectionDisplay}
          changeInitialLoad={props.changeInitialLoad}
        />
      )}
      {props.displayMainSection && (
        <>
        <MainBody
          displayHomeMenu={displayHomeMenu}
          displayAboutSection={displayAboutSection}
          displayProjectSection={displayProjectSection}
          displayContactSection={displayContactSection}
          changeMainAnimationDisplay={props.changeMainAnimationDisplay}
          changeMainSectionDisplay={props.changeMainSectionDisplay}
          changeHomeMenuDisplay={changeHomeMenuDisplay}
          changeAboutSectionDisplay={changeAboutSectionDisplay}
          changeProjectSectionDisplay={changeProjectSectionDisplay}
          changeContactSectionDisplay={changeContactSectionDisplay}
        />
        </>
      )}
    </header>
  );
}

export default Header;
