import React from "react";
import SecondaryButton from "../../../../Shared/SecondaryButton";
import TypingComponent from "../../../../Shared/TypingComponent/TypingComponent";

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
        <TypingComponent
          classString="col-sm-12 main_text_color"
          text1={props.text1}
          text2={props.text2}
          typingContentElementId="about_typing_effect"
          blinkingEffectElementId="about_typing_effect_blink"
          styles={aboutDescriptionStyles}
        />
      </div>
      <SecondaryButton content={stuffILoveContent} />
    </>
  );
}

export default AboutDescription;
