import React, {useState} from "react";

function handleAbout(props, e) {
    props.changeHomeMenuDisplay((e.target.displayHomeMenu = false));
    props.changeAboutSectionDisplay((e.target.displayAboutSection = true));
    props.changeProjectSectionDisplay(
      (e.target.displayProjectSection = false)
    );
    props.changeContactSectionDisplay(
      (e.target.displayContactSection = false)
    );
}

export default handleAbout