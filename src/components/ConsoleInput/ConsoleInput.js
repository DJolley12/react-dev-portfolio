import React, { useState } from "react";
import "./console-input.css";
import handleInput from "./handleInput";
import HelpMenu from "./HelpMenu/HelpMenu";

function ConsoleInput(props) {

  const [displayHelp, setDisplayHelp] = useState(false);

  function changeDisplayHelp(newDisplay) {
    setDisplayHelp(newDisplay);
  }

  let helpProps = {
    displayHelp, 
    changeDisplayHelp
  }

  handleInput(props, helpProps);
  let placeholder = "C:\\>";
  return (
    <>
      <h4 className="layer-top main_text_color help_menu">Enter Help For Commands</h4>
      {displayHelp && <HelpMenu />}
      <div
        className="layer-top console_input main_text_color"
        id="console_input"
      >
        {placeholder}
      </div>
    </>
  );
}

export default ConsoleInput;
