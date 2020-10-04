import React from "react";
import SecondaryButton from "../../../../Shared/SecondaryButton";

let aboutDescriptionStyles = {
  paddingLeft: "3%",
};

const stuffILoveContent = {
  buttonText: "_stuff_i_love",
  styles: {
    marginTop: "60vh",
  },
};

function AboutDescription(props) {
  return (
    <>
      <div className="row">
        <div
          className="col-sm-12 main_text_color"
          style={aboutDescriptionStyles}
        >
          {props.content.description}
        </div>
      </div>
      <SecondaryButton content={stuffILoveContent} />
    </>
  );
}

export default AboutDescription;
