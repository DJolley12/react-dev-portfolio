import React from "react";
// import ThemeButton from "./HeaderContents/ThemeButton";
import HomeImageScreen from "./HeaderContents/HomeImageScreen/HomeImageScreen";
import MainAnimation from "./HeaderContents/HomeImageScreen/MainAnimation/MainAnimation";
import ThemeButton from "./HeaderContents/ThemeButton";
const presentationStyles = {
  height: "100vh",
};

function Header() {
  return (
    <header className="main" id="intro_section">
      <HomeImageScreen />
      <div className="container-fluid">
        <ThemeButton />
        <MainAnimation />
      </div>
    </header>
  );
}

export default Header;
