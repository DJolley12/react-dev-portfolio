import React, { useState } from "react";

function handleConsoleEnabled(props, e) {
  props.changeHomeMenuDisplay((e.target.displayHomeMenu = false));
  props.changeAboutSectionDisplay((e.target.displayAboutSection = false));
  props.changeProjectSectionDisplay((e.target.displayProjectSection = false));
  props.changeContactSectionDisplay((e.target.displayContactSection = false));
}

export default handleConsoleEnabled;
