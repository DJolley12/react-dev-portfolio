import React from "react";

function MainButton(props) {
  function handleClick(event) {
    props.changeMainAnimationDisplay(
      (event.target.displayMainAnimation = !props.displayMainAnimation)
    );
    props.changeMainSectionDisplay(
      (event.target.displayMainSection = !props.displayMainSection)
    );
    console.log(event.target.displayMainAnimation);
    console.log(!props.displayMainAnimation);
  }

  return (
    <button
      type="button"
      class="main_button"
      id="view_my_work_button"
      onClick={handleClick}
    >
      {props.text}
    </button>
  );
}

export default MainButton;
