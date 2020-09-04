import React from "react";
import NavBar from "./Content/NavBar";
import MainSection from "./Content/MainSection/MainSection";

function MainContent() {
  return (
    <div className="main">
      <div className="striping_effect">
        <NavBar />
        <MainSection />
      </div>
    </div>
  );
}

export default MainContent;
