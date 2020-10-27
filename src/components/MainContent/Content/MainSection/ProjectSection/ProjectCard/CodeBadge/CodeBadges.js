import React from "react";

import "./code-badge.css";

function CodeBadges(props) {
  const languages = [];
  let codeBadgeCount = 0;
  let elements = [];

  for (let index = 0; index < props.content.languages.length; index++) {
    const language = props.content.languages[index];
            
    let element = <a key={props.content.heading + language} href="#" class="col-sm-3 nes-badge">
                      <span class="is-dark secondary_button">{language}</span>
                  </a>

    elements.push(element);

    if (codeBadgeCount === 2 || props.content.languages.length === 1 || (props.content.languages.length - 1) === index) {
      codeBadgeCount = 0;
      const row = <div className="row">{elements}</div>;

      languages.push(row);
      elements = [];
    } else {
      codeBadgeCount++;
    }
  }

  return <>{languages}</>;
}

export default CodeBadges;
