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

function CodeBadge(props) {
  const languages = [];
  for (let index = 0; index < props.content.languages.length; index++) {
    const language = props.content.languages[index];

    let styles;
    if (index !== 0) {
      let controlNumber = index / 2;
      if (Math.round(controlNumber) === (index / 2)) {
        styles = {
          left: "5%",
          top: "0%"
        }
      } else {
        styles = {
          left: "8%",
          top: "0%"
        }
      }
    } else {
      styles = {
        left: "5%",
        top: "0%"
      }
    } 


    const element = <a key={props.content.heading + language} href="#" class="nes-badge" style={styles}>
                      <span class="is-dark secondary_button">{language}</span>
                    </a>

    languages.push(element);
  }

  return <>{languages}</>;
}

export default CodeBadge;
