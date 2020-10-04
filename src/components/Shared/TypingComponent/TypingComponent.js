import React, { useState, useEffect } from "react";
import TypingEffectScript from "./TypingEffectScript";
import styles from "./typing-component.module.css";

function TypingComponent(props) {
  console.log(styles);
  console.log("TypingComponent Props");
  console.log(props);
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
