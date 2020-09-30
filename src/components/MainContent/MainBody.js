import React from "react";
import NavBar from "./Content/NavBar";
import MainSection from "./Content/MainSection/MainSection";
import AboutSection from "./Content/MainSection/AboutSection/AboutSection";
import ProjectSection from "./Content/MainSection/ProjectSection/ProjectSection";

function MainBody(props) {
  console.log(props);
  return (
    <div className="main" id="main_body">
      <div className="striping_effect">
        {props.displayAboutSection && <AboutSection />}
        {props.displayProjectSection && <ProjectSection />}
        <NavBar
          displayAboutSection={props.displayAboutSection}
          displayProjectSection={props.displayProjectSection}
          displayContactSection={props.displayContactSection}
          onChange={[props.onChange[0], props.onChange[1], props.onChange[2]]}
        />
      </div>
    </div>
  );
}

export default MainBody;
