import React from "react";

function NavBar() {
  return (
    <div
      class="sticky-top"
      style={{
        background: "transparent",
        padding: ".25rem 0",
        // borderTop: "solid 2px #30c31c",
        // borderBottom: "solid 2px #30c31c",
      }}
    >
      <nav>
        <div className="col-sm-2"></div>
        <a className="secondary_button col-sm-2" id="home_nav_button">
          Home
        </a>
        <a className="secondary_button col-sm-2" id="about_nav_button">
          About
        </a>
        <a className="secondary_button col-sm-2" id="portfolio_nav_button">
          Portfolio
        </a>
        <a className="secondary_button col-sm-2" id="contact_nav_button">
          Contact
        </a>
        <div className="col-sm-2"></div>
      </nav>
      {/* <label>
        <input
          type="radio"
          class="nes-radio is-dark"
          name="answer-dark"
          checked
        />
        <span id="home_label" onmouseover="hoverAudio()" onclick="clickAudio()">
          Home
        </span>
      </label>

      <label>
        <input type="radio" class="nes-radio is-dark" name="answer-dark" />
        <span
          id="about_label"
          onmouseover="hoverAudio()"
          onclick="clickAudio()"
        >
          About
        </span>
      </label>
      <label>
        <input type="radio" class="nes-radio is-dark" name="answer-dark" />
        <span
          id="portfolio_label"
          onmouseover="hoverAudio()"
          onclick="clickAudio()"
        >
          Portfolio
        </span>
      </label>
      <label>
        <input type="radio" class="nes-radio is-dark" name="answer-dark" />
        <span
          id="contact_label"
          onmouseover="hoverAudio()"
          onclick="clickAudio()"
        >
          Contact
        </span>
      </label> */}
    </div>
  );
}

export default NavBar;
