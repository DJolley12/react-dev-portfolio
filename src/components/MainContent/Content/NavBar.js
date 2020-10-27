import React from "react";

function NavBar(props) {
  function handleHomeClick(event) {
    props.changeHomeMenuDisplay((event.target.displayHomeMenu = true));
    props.changeAboutSectionDisplay((event.target.displayAboutSection = false));
    props.changeProjectSectionDisplay(
      (event.target.displayProjectSection = false)
    );
    props.changeContactSectionDisplay(
      (event.target.displayContactSection = false)
    );
  }

  function handleAboutClick(event) {
    props.changeHomeMenuDisplay((event.target.displayHomeMenu = false));
    props.changeAboutSectionDisplay((event.target.displayAboutSection = true));
    props.changeProjectSectionDisplay(
      (event.target.displayProjectSection = false)
    );
    props.changeContactSectionDisplay(
      (event.target.displayContactSection = false)
    );
  }

  function handlePortfolioClick(event) {
    props.changeHomeMenuDisplay((event.target.displayHomeMenu = false));
    props.changeAboutSectionDisplay((event.target.displayAboutSection = false));
    props.changeProjectSectionDisplay(
      (event.target.displayProjectSection = true)
    );
    props.changeContactSectionDisplay(
      (event.target.displayContactSection = false)
    );
  }

  function handleContactClick(event) {
    props.changeHomeMenuDisplay((event.target.displayHomeMenu = false));
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
      }}
    >
      <nav className="layer-top">
        <div className="col-sm-2"></div>
        <a
          className="secondary_button flicker nav_button"
          id="home_nav_button"
          onClick={handleHomeClick}
        >
          _commands
        </a>
        <a
          className="secondary_button flicker nav_button"
          id="about_nav_button"
          onClick={handleAboutClick}
        >
          _about
        </a>
        <a
          className="secondary_button flicker nav_button"
          id="portfolio_nav_button"
          onClick={handlePortfolioClick}
        >
          _my_work
        </a>
        <a
          className="secondary_button flicker nav_button"
          id="contact_nav_button"
          onClick={handleContactClick}
        >
          _contact
        </a>
      </nav>
    </div>
  );
}

export default NavBar;
