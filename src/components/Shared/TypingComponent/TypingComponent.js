import React, { useState, useEffect } from "react";
import TypingEffectScript from "./TypingEffectScript";
import "./typing-component.css";

function TypingComponent(props) {
  useEffect(() => TypingEffectScript(props));
  return (
    <>
      <div
        className={props.classString + " typing_effect_cursor"}
        id={props.typingContentElementId}
        style={props.styles}
      >
        {/* {props.content.description} */}
      </div>
    </>
  );
}

export default TypingComponent;
