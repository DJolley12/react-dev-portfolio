import React from "react";
import AboutSection from "./AboutSection/AboutSection";
import ContactSection from "./ContactSection/ContactSection";
import ProjectSection from "./ProjectSection/ProjectSection";

function MainSection() {
  return (
    <div className="main_content" id="main_content">
      <AboutSection />
      <ProjectSection />
    </div>
  );
}

export default MainSection;
