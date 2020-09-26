import React from "react";

const iconSectionStyles = {
  marginLeft: "7.5vw",
};

function IconSection() {
  return (
    <section
      className="d-flex justify-content-center"
      style={iconSectionStyles}
    >
      <a href="https://github.com/DJolley12">
        <i className="icon_list nes-icon github is-large d-flex justify-content-lg-center flicker"></i>
      </a>
      <i className="icon_list nes-icon linkedin is-large d-flex justify-content-lg-center flicker"></i>
      <i className="icon_list nes-icon gmail is-large d-flex justify-content-lg-center flicker"></i>
    </section>
  );
}

export default IconSection;
