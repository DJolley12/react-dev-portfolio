import React from "react";
import IconSection from "./FooterContents/IconSection";

const nesIconStyles = {
  marginLeft: ".75vw",
  marginTop: "-2vh",
};

function Footer() {
  return (
    <footer>
      <div className="container-flex">
        <div className="d-flex justify-content-center">
          <IconSection />
        </div>
        <p
          className="d-flex justify-content-center main_text_color layer-top"
          id="made_by_section"
        >
          Made by Daniel Jolley with{" "}
          <i class="nes-icon is-medium heart" style={nesIconStyles}></i>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
