import React from "react";
import "./console-input.css";
import handleInput from "./handleInput";

function ConsoleInput(props) {
  handleInput(props);
  let placeholder = "C:\\>";
  return (
    <>
      <h4 id="help_heading" className="layer-top main_text_color">Enter Help For Commands</h4>
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
