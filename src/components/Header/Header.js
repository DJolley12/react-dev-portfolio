import React from "react";
// import ThemeButton from "./HeaderContents/ThemeButton";
import HomeImageScreen from "./HeaderContents/HomeImageScreen/HomeImageScreen";
import MainAnimation from "./HeaderContents/MainAnimation/MainAnimation";
import ThemeButton from "./HeaderContents/ThemeButton";
import MainImage from "./HeaderContents/MainAnimation/MainImage";

const presentationStyles = {
  height: "100vh",
};

function Header() {
  return (
    <header className="main" id="intro_section">
      <HomeImageScreen />
      <div className="container-fluid">
        <MainAnimation />
      </div>
    </header>
  );
}

export default Header;
