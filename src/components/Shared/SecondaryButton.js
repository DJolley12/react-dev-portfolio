import React from "react";

function SecondaryButton(props) {
  function handleClick() {
    console.log("stuff i love clicked");
  }
  return (
    <a
      className="secondary_button flicker"
      onClick={handleClick}
      style={props.content.styles}
    >
      {props.content.buttonText}
    </a>
  );
}

export default SecondaryButton;
