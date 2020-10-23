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
    console.log(element);

    if (codeBadgeCount === 2) {
      codeBadgeCount = 0;
    
      let row = <div className="row">{elements}</div>;
  
      languages.push(row);
      console.log(elements.length);
    } else {
      codeBadgeCount++;
    }
  }

  return <>{languages}</>;
}

export default CodeBadges;
