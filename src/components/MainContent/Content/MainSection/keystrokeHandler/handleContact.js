import React, { useState } from "react";

function handleContact(props, e) {
  props.changeHomeMenuDisplay((e.target.displayHomeMenu = false));
  props.changeAboutSectionDisplay((e.target.displayAboutSection = false));
  props.changeProjectSectionDisplay((e.target.displayProjectSection = false));
  props.changeContactSectionDisplay((e.target.displayContactSection = true));
}

export default handleContact;
