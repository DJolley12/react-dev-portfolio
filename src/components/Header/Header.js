import React, { useState, useEffect } from "react";
// import ThemeButton from "./HeaderContents/ThemeButton";
import MainBackGroundImage from "./HeaderContents/HomeImageScreen/MainBackGroundImage";
import MainAnimation from "./HeaderContents/MainAnimation/MainAnimation";
import ThemeButton from "./HeaderContents/ThemeButton";
import MainImage from "./HeaderContents/MainAnimation/MainImage";
import MainContent from "../MainContent/MainBody";
import NavBar from "../MainContent/Content/NavBar";
import AboutSection from "../MainContent/Content/MainSection/AboutSection/AboutSection";
import NavButton from "../Shared/NavButton";

const presentationStyles = {
  height: "100vh",
};

function Header(props) {
  return (
    <header className="main">
      <MainBackGroundImage />
      <div className="container-fluid">
        <MainAnimation
          displayMainAnimation={props.displayMainAnimation}
          displayMainSection={props.displayMainSection}
          onChange={[props.onChange[0], props.onChange[1]]}
        />
      </div>
    </header>
  );
}

export default Header;
