import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header.js";
import MainBody from "./components/MainContent/MainBody.js";
import Footer from "./components/Footer/Footer.js";
import MainBackGroundImage from "./components/Header/HeaderContents/HomeImageScreen/MainBackGroundImage";

function App() {
  //Main menu hooks
  const [displayMainAnimation, setDisplayMainAnimation] = useState(true);
  const [displayMainSection, setDisplayMainSection] = useState(false);

  //functions
  function changeMainAnimationDisplay(newDisplay) {
    setDisplayMainAnimation(newDisplay);
    console.log("changeMainAnimCalled");
    console.log(newDisplay + "new Display");
    console.log(displayMainAnimation + "display Main Anim");
  }
  function changeMainSectionDisplay(newDisplay) {
    setDisplayMainSection(newDisplay);
    console.log("changeMainSectionCalled");
  }

  //MainContent hooks
  const [displayAboutSection, setDisplayAboutSection] = useState(true);
  const [displayProjectSection, setDisplayProjectSection] = useState(false);
  const [displayContactSection, setDisplayContactSection] = useState(false);

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
    <>
      {displayMainAnimation && (
        <Header
          displayMainAnimation={displayMainAnimation}
          displayMainSection={displayMainSection}
          onChange={[changeMainAnimationDisplay, changeMainSectionDisplay]}
        />
      )}
      {displayMainSection && (
        <MainBody
          displayAboutSection={displayAboutSection}
          displayProjectSection={displayProjectSection}
          displayContactSection={displayContactSection}
          onChange={[
            changeAboutSectionDisplay,
            changeProjectSectionDisplay,
            changeContactSectionDisplay,
          ]}
        />
      )}
    </>
  );
}

export default App;
