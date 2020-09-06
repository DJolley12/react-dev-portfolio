import React from "react";

function CodeBadge(props) {
  const languages = props.languages.map((language) => (
    <a href="#" class="nes-badge">
      <span class="is-dark secondary_button">{language}</span>
    </a>
  ));

  return <>{languages}</>;
}

export default CodeBadge;
