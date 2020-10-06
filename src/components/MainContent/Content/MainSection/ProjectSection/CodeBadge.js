import React from "react";

import "./code-badge.css";

function CodeBadge(props) {
  const languages = props.content.languages.map((language) => (
    <a key={props.content.heading + language} href="#" class="nes-badge">
      <span class="is-dark secondary_button">{language}</span>
    </a>
  ));

  return <>{languages}</>;
}

export default CodeBadge;
