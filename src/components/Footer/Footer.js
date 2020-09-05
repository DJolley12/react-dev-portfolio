import React from "react";
import IconSection from "./FooterContents/IconSection";

function Footer() {
  return (
    <footer>
      <div className="container-flex">
        <div className="d-flex justify-content-center">
          <IconSection />
        </div>
        <p
          className="d-flex justify-content-center main_text_color"
          id="made_by_section"
        >
          Made by Daniel Jolley with{" "}
          <i
            class="nes-icon is-medium heart"
            style={{ paddingLeft: "8vw" }}
          ></i>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
