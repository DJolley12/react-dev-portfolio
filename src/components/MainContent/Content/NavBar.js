import React from "react";

function NavBar(props) {
  function handleHomeClick(event) {
    console.log(props);

    props.changeMainAnimationDisplay(
      (event.target.displayMainAnimation = true)
    );
    props.changeMainSectionDisplay((event.target.displayMainSection = false));
  }

  function handleAboutClick(event) {
    console.log("about clicked");
    props.changeAboutSectionDisplay((event.target.displayAboutSection = true));
    props.changeProjectSectionDisplay(
      (event.target.displayProjectSection = false)
    );
    props.changeContactSectionDisplay(
      (event.target.displayContactSection = true)
    );
  }

  function handlePortfolioClick(event) {
    props.changeAboutSectionDisplay((event.target.displayAboutSection = false));
    props.changeProjectSectionDisplay(
      (event.target.displayProjectSection = true)
    );
    props.changeContactSectionDisplay(
      (event.target.displayContactSection = false)
    );
  }

  function handleContactClick(event) {
    props.changeAboutSectionDisplay((event.target.displayAboutSection = false));
    props.changeProjectSectionDisplay(
      (event.target.displayProjectSection = false)
    );
    props.changeContactSectionDisplay(
      (event.target.displayContactSection = true)
    );
  }

  return (
    <div
      className="sticky-top nav_bar"
      style={{
        background: "transparent",
        opacity: ".7",
        padding: ".25rem 0",
        zIndex: "10000",
        // borderTop: "solid 2px #30c31c",
        // borderBottom: "solid 2px #30c31c",
      }}
    >
      <nav className="layer-top">
        <div className="col-sm-2"></div>
        <a
          className="secondary_button flicker  nav_button"
          id="home_nav_button"
          onClick={handleHomeClick}
        >
          Home
        </a>
        <a
          className="secondary_button flicker nav_button"
          id="about_nav_button"
          onClick={handleAboutClick}
        >
          About
        </a>
        <a
          className="secondary_button flicker  nav_button"
          id="portfolio_nav_button"
          onClick={handlePortfolioClick}
        >
          Portfolio
        </a>
        <a
          className="secondary_button flicker  nav_button"
          id="contact_nav_button"
          onClick={handleContactClick}
        >
          Contact
        </a>
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
