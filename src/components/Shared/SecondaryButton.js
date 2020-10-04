import React from "react";

function SecondaryButton(props) {
  return (
    <a className="secondary_button flicker" style={props.content.styles}>
      {props.content.buttonText}
    </a>
  );
}

export default SecondaryButton;
