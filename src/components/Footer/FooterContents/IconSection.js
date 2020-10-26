import React from "react";

const iconSectionStyles = {
  margin: "auto",
  width: "50%",
  zIndex: "9999",
  paddingLeft: "5%",
  top: "104%",
};

function IconSection() {
  return (
    <section
      className="d-flex justify-content-center layer-top"
      style={iconSectionStyles}
    >
      <a
        href="https://github.com/DJolley12"
        className="d-flex justify-content-lg-center"
      >
        <i className="icon_list nes-icon github is-large flicker"></i>
      </a>
      <a
          href="https://www.linkedin.com/in/daniel-jolley-06947b1b5/"
          className="d-flex justify-content-lg-center"       
      >
        <i className="icon_list nes-icon linkedin is-large flicker"></i>
      </a>
      <a
      href="mailto:dcjolley12@gmail.com"
        className="d-flex justify-content-lg-center"
      >
        <i className="icon_list nes-icon gmail is-large flicker"></i>
      </a>
    </section>
  );
}

export default IconSection;
