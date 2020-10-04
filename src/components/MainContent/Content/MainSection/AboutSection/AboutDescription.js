import React from "react";

function AboutDescription(props) {
  return (
    <div className="row">
      <div className="col-sm-2"></div>
      <div className="col-sm-8 main_text_color">
        {props.content.description}
      </div>
      ;
    </div>
  );
}

export default AboutDescription;
