import React from "react";
import NavBar from "./Content/NavBar";
import MainSection from "./Content/MainSection/MainSection";
import AboutSection from "./Content/MainSection/AboutSection/AboutSection";

function MainBody(props) {
  return (
    <div className="main" id="main_body">
      <div className="striping_effect">
        <AboutSection />
        <NavBar />
      </div>
    </div>
  );
}

export default MainBody;
