import React, { useState } from "react";import ProjectCard from "./ProjectCard/ProjectCard";
import TypingComponent from "../../../../Shared/TypingComponent/TypingComponent";
import "./project-section.css";
import SecondaryButton from "../../../../Shared/SecondaryButton";
import Page1 from "./Page1";
import Page2 from "./Page2";

const quickTourneys = {
  heading: "Quick Tourneys Gaming",
  description1: "Website for hosting Call of Duty Warzone tournaments. ",
  description2:
    ["Client wanted a solution that would pull data during a tournament with live updates, ", "and the best determined solution was an api wrapper implementation. ", "This is also what inspired me to write the open source wrapper, ", "as there were no API wrappers in C#."],
  languages: [
    "C#",
    "JavaScript",
    "ASP.NET Core",
    "Bootstrap",
    "MySQL",
    "JQuery",
  ],
  styles: {
    left: "1%"
  }
};

const codWrapperContent = {
  heading: "CallOfDutyApiWrapper",
  description1: "Easy calls to the activision API in C#",
  description2:
    [".NET Standard Class Library wrapper", " for Call of Duty's API.", " I decided to write this", " after I had a freelance project to do with it,", " and didn't see any other work on this in C#.", " Would've saved me a bunch of time!"],
  languages: ["C#"],
  styles: {
    left: "34.1%"
  }
};

const ucContent = {
  heading: "Utah Committee",
  description1:
    "A live website-Razor Pages, C#, SQL, Entity Framework, Bootstrap",
  description2:
    ["I am currently still contributing to this site.", " To minimize complexity,", " Razor Pages and minimal JavaScript was used", " for mostly server side rendered content"],
  languages: [
    "C#",
    "ASP.NET Core",
    "Razor Pages",
    "JavaScript",
    "JQuery",
    "Bootstrap",
    "Entity Framework",
  ],
  styles: {
    right: "1%"
  }
};

const siteContent = {
  heading: "This Site",
  description1:
    "This is my portfolio, and official personal webpage for both freelancing and employment inquiries.",
  description2:
    ["I wanted a way to play with React,", " and demonstrate my abilities to apply it to a project. "],
  languages: [
    "React",
    "CSS3",
    "HTML5",
    "Bootstrap",
    "NES.css",
  ],
  styles: {
    left: "1%"
  }
};

const dbBackup = {
  heading: "Database Backup",
  description1: "Database backup tool written in C# for use on local and azure databases",
  description2:
    ["Written as a utility for utah committee admins,", " this is for backing up both Azure", " and local SQL databases."],
  languages: [
    "C#",
  ],
  styles: {
    right: "34.1%"
  }
};

function ProjectSection() {
  const [projectHoveredContent, setProjectHoveredContent] = useState();
  const [projectIsHovered, setProjectIsHovered] = useState(false);
  const [pageSelected, setPageSelected] = useState(1);

  function quickTourneysMouseEnter(event) {
    console.log("project hovered");
    console.log(event);
    setProjectIsHovered(event);
    setProjectHoveredContent(quickTourneys.description2);
  }

  function codWrapperMouseEnter(event) {
    setProjectIsHovered(event);
    setProjectHoveredContent(codWrapperContent.description2);
  }
  
  function uCMouseEnter(event) {
    setProjectIsHovered(event);
    setProjectHoveredContent(ucContent.description2);
  }

  function siteMouseEnter(event) {
    setProjectIsHovered(event);
    setProjectHoveredContent(siteContent.description2);
  }

  function dbBackupMouseEnter(event) {
    setProjectIsHovered(event);
    setProjectHoveredContent(dbBackup.description2);
  }

  function handlePageClick(event) {
    setPageSelected(event);
  }

  const TypingComponentStyles = {
    fontSize: "70%",
    top: "65%",
    position: "fixed",
    width: "70%",
    left: "15%"
  }

  const pageOneButton1 = {
      buttonText: "1",
      class: "project_section_pagination1",
      styles: {
        opacity: ".5",
        position: "absolute",
        width: "3%",
        textAlign: "center"
      },
  }

  const pageOneButton2 = {
    buttonText: "1",
    class: "project_section_pagination1",
    styles: {
      position: "absolute",
      width: "3%",
      textAlign: "center"
    },
}

const pageTwoButton1 = {
  buttonText: "2",
  class: "project_section_pagination2",
  styles: {
    opacity: ".5",
    position: "absolute",
    width: "3%",
    textAlign: "center"
  },
}

const pageTwoButton2 = {
  buttonText: "2",
  class: "project_section_pagination2",
  styles: {
    position: "absolute",
    width: "3%",
    textAlign: "center"
  },
}

  return (
    <>
    <div className="container-flex layer-top main_border">
        <h4 className="heading bottom-border">_my_work</h4>
      
    <div className="d-flex">
    {pageSelected === 1 ? 
      <Page1 
        quickTourneys={quickTourneys}
        codWrapperContent={codWrapperContent}
        ucContent={ucContent}
        projectIsHovered={projectIsHovered}
        quickTourneysMouseEnter={quickTourneysMouseEnter}
        codWrapperMouseEnter={codWrapperMouseEnter}
        uCMouseEnter={uCMouseEnter}
      /> : 
      <Page2 
        siteContent={siteContent}
        dbBackup={dbBackup}
        projectIsHovered={projectIsHovered}
        siteMouseEnter={siteMouseEnter}
        dbBackupMouseEnter={dbBackupMouseEnter}
      />
    } 
    </div>  
    {projectIsHovered && <TypingComponent 
        classString="main_text_color"
        text1={projectHoveredContent}
        typingContentElementId="project_hovered_typing_component"
        styles={TypingComponentStyles}
      />}
      {pageSelected === 1 ? <SecondaryButton 
        content={pageOneButton1}
        callBacks={[handlePageClick]} 
        targets={[pageSelected]}
        values={[1]}
      /> : <SecondaryButton 
        content={pageOneButton2}
        callBacks={[handlePageClick]} 
        targets={[pageSelected]}
        values={[1]}
      />}
      {pageSelected === 2 ? <SecondaryButton 
        content={pageTwoButton1}
        callBacks={[handlePageClick]} 
        targets={[pageSelected]}
        values={[2]}
      /> : <SecondaryButton 
        content={pageTwoButton2}
        callBacks={[handlePageClick]} 
        targets={[pageSelected]}
        values={[2]}
      />}
      </div>
    </>
  );
}

export default ProjectSection;
