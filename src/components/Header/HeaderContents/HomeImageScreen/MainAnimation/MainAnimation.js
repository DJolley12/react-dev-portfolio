import React from "react";
import MainButton from "../../../../Shared/MainButton";
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

function MainAnimation() {
  return (
    <div class="text-left">
      <span class="align-left">
        <h1
          class="intro_text col-sm-8"
          id="intro_text"
          style={{ intro_text_styles }}
        ></h1>
        <div class="row justify-content-start col-sm-6">
          <MainButton text="View My Work" />
        </div>
      </span>
    </div>
  );
}

export default MainAnimation;
