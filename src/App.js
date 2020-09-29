import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header.js";
import MainBody from "./components/MainContent/MainBody.js";
import Footer from "./components/Footer/Footer.js";
import MainBackGroundImage from "./components/Header/HeaderContents/HomeImageScreen/MainBackGroundImage";

function App() {
  const [displayMainAnimation, setDisplayMainAnimation] = useState(true);
  const [displayMainSection, setDisplayMainSection] = useState(false);
  const [displayAboutSection, setDisplayAboutSection] = useState(false);

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
          displayMainSection={displayMainSection}
          onChange={[changeMainAnimationDisplay, changeMainSectionDisplay]}
        />
      )}
    </>
  );
}

export default App;
