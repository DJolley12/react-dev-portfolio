import React, { useState } from "react";

function handleMyWork(props, e) {
  props.changeHomeMenuDisplay((e.target.displayHomeMenu = false));
  props.changeAboutSectionDisplay((e.target.displayAboutSection = false));
  props.changeProjectSectionDisplay((e.target.displayProjectSection = true));
  props.changeContactSectionDisplay((e.target.displayContactSection = false));
}

export default handleMyWork;
