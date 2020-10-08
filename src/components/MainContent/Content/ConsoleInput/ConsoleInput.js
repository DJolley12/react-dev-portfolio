import React, { useState } from "react";
import "./console-input.css";
import handleInput from "./handleInput";

function ConsoleInput(props) {
  handleInput(props);
  let placeholder = "C:\\>";
  const [consoleInputContent, changeConsoleInputContent] = useState("");
  return (
    <div className="layer-top console_input" id="console_input">
      {placeholder}
    </div>
  );
}

export default ConsoleInput;
