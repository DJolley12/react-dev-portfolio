import React from "react";
import SecondaryButton from "../../../../Shared/SecondaryButton"
import "./home-menu.css"
import HomeHeading from "./HomeHeading";

const homeCommandButton = {
  buttonText: "H home menu",
  class: "home_command_button",
  styles: {
    position: "absolute",
    top: "20%",
    left: "10%",
  },
};

const aboutCommandButton = {
  buttonText: "A about menu",
  class: "about_command_button",
  styles: {
    position: "absolute",
    top: "35%",
    left: "10%",
  },
};

const myWorkCommandButton = {
  buttonText: "M my work menu",
  class: "my_work_command_button",
  styles: {
    position: "absolute",
    top: "50%",
    left: "10%",
  },
};

const contactCommandButton = {
  buttonText: "C contact menu",
  class: "contact_command_button",
  styles: {
    position: "absolute",
    top: "65%",
    left: "10%",
  },
};

function HomeMenu(props) {
  return(
    <div id="home_menu" className="layer-top main_border">
      <HomeHeading /> 
      <SecondaryButton content={homeCommandButton}/>
      <SecondaryButton content={aboutCommandButton}/>
      <SecondaryButton content={myWorkCommandButton}/>
      <SecondaryButton content={contactCommandButton}/>
      {/*<SecondaryButton />
      <SecondaryButton />
      <SecondaryButton /> */}
    </div>
  );
}

export default HomeMenu;
