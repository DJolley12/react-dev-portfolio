import React, { useState, useEffect } from "react";
import MainButton from "../../../Shared/MainButton";
import MainImage from "./MainImage";
import RunTypingEffect from "../../../../scripts/typingEffect";

let intro_text_styles = {
  color: "#30c31c",
  font: "bold",
  paddingTop: "20%",
  fontSize: "20px",
  position: "relative",
  marginLeft: "10px",
  marginBottom: "70px",
  top: "50px",
  textAlign: "left",
  backgroundColor: "#000000",
};

let button_styles = {
  backgroundColor: "#112927",
  color: "#30c31c",
};

function returnHeaderText() {
  document.getElementById("intro_text").innerText =
    "I make websites, desktop apps, web apps, ...and other stuff! Let's talk!";
  document.getElementById("view_my_work_button").style.visibility = "visible";
  document.getElementById("main_image").style.visibility = "visible";
}

function MainAnimation(props) {
  useEffect(() => {
    //ternary for putting button and h1 conditionally after first load, store intitial load in state
    props.initialLoad ? RunTypingEffect() : returnHeaderText();
  });
  return (
    <div className="container-fluid">
      <div className="text-left" id="main-animation">
        <span className="align-left">
          <h1
            className="intro_text col-sm-8"
            id="intro_text"
            style={{ intro_text_styles }}
          ></h1>
          <div className="row justify-content-start col-sm-6">
            <MainButton
              text="View My Work"
              displayMainAnimation={props.displayMainAnimation}
              displayMainSection={props.displayMainSection}
              initialLoad={props.initialLoad}
              changeMainAnimationDisplay={props.onChange[0]}
              changeMainSectionDisplay={props.onChange[1]}
              changeInitialLoad={props.onChange[2]}
            />
          </div>
          <div className="row justify-content-center">
            <MainImage />
          </div>
        </span>
      </div>
    </div>
  );
}

export default MainAnimation;
