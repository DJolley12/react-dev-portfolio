function handleInput(props, helpProps) {
  console.log(helpProps);
  document.onkeydown = document.onkeydown = function (e) {
    e = e || window.event;
    console.log(e);
    let consoleInput = document.getElementById("console_input");
    let text = consoleInput.innerText;
    if (e.key === "Backspace" || e.key === "Delete") {
      if (text.substring(text.length - 1, text.length) !== ">") {
        consoleInput.innerText = text.substring(0, text.length - 1);
      }
    } else if (
      e.key === "Alt" ||
      e.key === "Control" ||
      e.key === "CapsLock" ||
      e.key === "Tab" ||
      e.key === "Meta" ||
      e.key === "ContextMenu" ||
      e.key === "Escape" ||
      e.key === "Shift" ||
      e.key === "ArrowDown" ||
      e.key === "ArrowUp" ||
      e.key === "ArrowLeft" ||
      e.key === "ArrowRight" ||
      e.key === "<" ||
      e.key === ">" ||
      e.key === '"' ||
      e.key === "'"
    ) {
    } else if (e.key === "Enter") {
      if (text.substring(4, text.length).trim().toLowerCase() === "home") {
          props.changeHomeMenuDisplay((e.target.displayHomeMenu = true));
          props.changeAboutSectionDisplay((e.target.displayAboutSection = false));
          props.changeProjectSectionDisplay(
            (e.target.displayProjectSection = false)
          );
          props.changeContactSectionDisplay(
            (e.target.displayContactSection = false)
          );
          props.changeConsoleInputDisplay((e.target.displayConsoleInput = false));
          helpProps.changeDisplayHelp((e.target.displayHelp = false));

      } else if (
        text.substring(4, text.length).trim().toLowerCase() === "about"
      ) {
          props.changeHomeMenuDisplay((e.target.displayHomeMenu = false));
          props.changeAboutSectionDisplay((e.target.displayAboutSection = true));
          props.changeProjectSectionDisplay(
            (e.target.displayProjectSection = false)
          );
          props.changeContactSectionDisplay(
            (e.target.displayContactSection = false)
          );
          props.changeConsoleInputDisplay((e.target.displayConsoleInput = false));
          helpProps.changeDisplayHelp((e.target.displayHelp = false));

      } else if (
        text.substring(4, text.length).trim().toLowerCase() === "mywork"
      ) {
          props.changeHomeMenuDisplay((e.target.displayHomeMenu = false));
          props.changeAboutSectionDisplay((e.target.displayAboutSection = false));
          props.changeProjectSectionDisplay(
            (e.target.displayProjectSection = true)
          );
          props.changeContactSectionDisplay(
            (e.target.displayContactSection = false)
          );
          props.changeConsoleInputDisplay((e.target.displayConsoleInput = false));
          helpProps.changeDisplayHelp((e.target.displayHelp = false));

      } else if (
        text.substring(4, text.length).trim().toLowerCase() === "contact"
      ) {
          props.changeHomeMenuDisplay((e.target.displayHomeMenu = false));
          props.changeAboutSectionDisplay((e.target.displayAboutSection = false));
          props.changeProjectSectionDisplay(
            (e.target.displayProjectSection = false)
          );
          props.changeContactSectionDisplay(
            (e.target.displayContactSection = true)
          );
          props.changeConsoleInputDisplay((e.target.displayConsoleInput = false));
          helpProps.changeDisplayHelp((e.target.displayHelp = false));

      } else if (
        text.substring(4, text.length).trim().toLowerCase() === "help"
      ) {
          helpProps.changeDisplayHelp((e.target.displayHelp = true));
          consoleInput.innerText = text.toLowerCase().replace("help", "");

      } else if (text.substring(4, text.length).trim().toLowerCase() === "") {
          props.changeHomeMenuDisplay((e.target.displayHomeMenue = true));
          props.changeConsoleInputDisplay((e.target.displayConsoleInput = false));
          helpProps.changeDisplayHelp((e.target.displayHelp = false));

      } else {
        //handle invalid command
      }
    } else {
        consoleInput.innerText += e.key;
    }
  };
}

export default handleInput;
