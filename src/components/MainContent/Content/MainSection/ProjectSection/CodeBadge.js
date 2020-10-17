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
  let codeBadgeCount = 0;
  for (let index = 0; index < props.content.languages.length; index++) {
    const language = props.content.languages[index];
    console.log(codeBadgeCount)

    let styles;
    if (index !== 0) {
      if (codeBadgeCount === 0) {
        console.log("one");
        styles = {
          left: "5%",
          top: "0%"
        }
        codeBadgeCount++;
      } else if (styles === 1) {
        console.log("two");
        styles = {
          left: "11%",
          top: "0%"
        }
        codeBadgeCount++;
      } else if (styles === 2) {
        console.log("three");
        styles = {
          left: "18%",
          top: "0%"
        }
        codeBadgeCount = 0;
      }
    } else if (index === 0) {
      styles = {
        left: "5%",
        top: "0%"
      }
      codeBadgeCount++;
    } 


    const element = <a key={props.content.heading + language} href="#" class="nes-badge" style={styles}>
                      <span class="is-dark secondary_button">{language}</span>
                    </a>

    languages.push(element);
  }

  return <>{languages}</>;
}

export default CodeBadge;
