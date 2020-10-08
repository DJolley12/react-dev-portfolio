function handleInput(props) {
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
      if (text.substring(4, text.length).trim().toLowerCase() === "about") {
        props.changeAboutSectionDisplay((e.target.displayAboutSection = true));
        props.changeProjectSectionDisplay(
          (e.target.displayProjectSection = false)
        );
        props.changeContactSectionDisplay(
          (e.target.displayContactSection = false)
        );
        props.changeConsoleInputDisplay((e.target.displayConsoleInput = false));
      } else if (
        text.substring(4, text.length).trim().toLowerCase() === "mywork"
      ) {
        props.changeAboutSectionDisplay((e.target.displayAboutSection = false));
        props.changeProjectSectionDisplay(
          (e.target.displayProjectSection = true)
        );
        props.changeContactSectionDisplay(
          (e.target.displayContactSection = false)
        );
        props.changeConsoleInputDisplay((e.target.displayConsoleInput = false));
      } else if (
        text.substring(4, text.length).trim().toLowerCase() === "contact"
      ) {
        props.changeAboutSectionDisplay((e.target.displayAboutSection = false));
        props.changeProjectSectionDisplay(
          (e.target.displayProjectSection = false)
        );
        props.changeContactSectionDisplay(
          (e.target.displayContactSection = true)
        );
        props.changeConsoleInputDisplay((e.target.displayConsoleInput = false));
      } else if (text.substring(4, text.length).trim().toLowerCase() === "") {
        props.changeConsoleInputDisplay((e.target.displayConsoleInput = false));
      } else {
        //handle invalid command
      }
    } else {
      consoleInput.innerText += e.key;
    }
  };
}

export default handleInput;
