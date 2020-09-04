import React from "react";

function MainButton(props) {
  return (
    <button
      type="button"
      class="main_button"
      id="view_my_work_button"
      onmouseover="hoverAudio()"
    >
      {props.text}
    </button>
  );
}

export default MainButton;
