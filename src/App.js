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
  }
  function changeMainSectionDisplay(newDisplay) {
    setDisplayMainSection(newDisplay);
  }

  //Initial load hook
  const [initialLoad, setInitialLoad] = useState(true);

  //function
  function changeInitialLoad(newLoadState) {
    setInitialLoad(newLoadState);
  }

  return (
    <>
      <Header
        displayMainAnimation={displayMainAnimation}
        displayMainSection={displayMainSection}
        initialLoad={initialLoad}
        onChange={[
          changeMainAnimationDisplay,
          changeMainSectionDisplay,
          changeInitialLoad,
        ]}
      />
      {displayMainSection && <Footer />}
    </>
  );
}

export default App;
