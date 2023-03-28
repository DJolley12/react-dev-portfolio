import React, { useState } from "react";

function handleHome(props, e) {
  console.log(props, e);
  props.changeHomeMenuDisplay((e.target.displayHomeMenu = true));
  props.changeAboutSectionDisplay((e.target.displayAboutSection = false));
  props.changeProjectSectionDisplay((e.target.displayProjectSection = false));
  props.changeContactSectionDisplay((e.target.displayContactSection = false));
}

export default handleHome;
