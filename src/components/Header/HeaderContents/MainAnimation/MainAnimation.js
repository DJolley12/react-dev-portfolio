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

function MainAnimation(props) {
  useEffect(() => RunTypingEffect());
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
              changeMainAnimationDisplay={props.onChange[0]}
              changeMainSectionDisplay={props.onChange[1]}
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
