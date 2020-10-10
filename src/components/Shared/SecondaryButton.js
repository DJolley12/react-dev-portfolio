import React from "react";

function SecondaryButton(props) {
  console.log(props);
  function handleClick(event) {
    for (let index = 0; index < props.callBacks.length; index++) {
      let targetValue = props.targets[index]
      props.callBacks[index]((event.target.targetValue = props.values[index]));
  
    }
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
