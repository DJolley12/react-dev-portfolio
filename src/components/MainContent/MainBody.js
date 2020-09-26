import React from "react";
import NavBar from "./Content/NavBar";
import MainSection from "./Content/MainSection/MainSection";

function MainBody() {
  return (
    <div className="main" id="main_body">
      <div className="striping_effect">
        <NavBar />
        <MainSection />
      </div>
    </div>
  );
}

export default MainBody;
