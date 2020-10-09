import React from "react";

function SecondaryButton(props) {
  function handleClick() {
  }
  return (
    <a
      id={props.content.buttonText}
      className={"secondary_button flicker " + props.content.class}
      onClick={handleClick}
      style={props.content.styles}
    >
      {props.content.buttonText}
    </a>
  );
}

export default SecondaryButton;
