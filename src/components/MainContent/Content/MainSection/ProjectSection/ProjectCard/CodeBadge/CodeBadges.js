import React from "react";

import "./code-badge.css";

// function CodeBadge(props) {
//   const languages = props.content.languages.map((language) => (
//     <a key={props.content.heading + language} href="#" class="nes-badge">
//       <span class="is-dark secondary_button">{language}</span>
//     </a>
//   ));

//   return <>{languages}</>;
// }

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

    console.log("element");
    console.log(element);
    console.log("language" + language);
    console.log("elements");
    console.log(elements.length);

    if (codeBadgeCount === 2 || props.content.languages.length === 1) {
      codeBadgeCount = 0;
      const row = <div className="row">{elements}</div>;
  
      console.log("elements length in if " + elements.length)
      console.log("row ");
      console.log(row);
      languages.push(row);
      elements = [];
    } else {
      codeBadgeCount++;
    }
  }

  console.log("languages length " + languages.length);
  console.log(languages);
  return <>{languages}</>;
}

export default CodeBadges;
