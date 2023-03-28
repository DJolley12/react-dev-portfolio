import React from "react";

function KeyCommand(props) {
  function handleClick() {}
  return (
    <div
      id={props.content.buttonText}
      className={"main_text_color flicker " + props.content.class}
      onClick={handleClick}
      style={props.content.styles}
    >
      {props.content.buttonText}
    </div>
  );
}

export default KeyCommand;
