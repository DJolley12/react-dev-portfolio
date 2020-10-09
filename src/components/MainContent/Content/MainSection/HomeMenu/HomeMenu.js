import React from "react";
import SecondaryButton from "../../../../Shared/SecondaryButton"
import "./home-menu.css"

const homeCommandButton = {
  buttonText: "H home menu",
  class: "home_command_button",
  styles: {
    position: "absolute",
    top: "45vh",
    left: "1vw",
  },
};

function HomeMenu(props) {
  return(
    <div id="home_menu" className="layer-top main_border">
      <SecondaryButton content={homeCommandButton}/>
      {/* <SecondaryButton />
      <SecondaryButton />
      <SecondaryButton />
      <SecondaryButton />
      <SecondaryButton />
      <SecondaryButton /> */}
    </div>
  );
}

export default HomeMenu;
