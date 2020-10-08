function handleInput(props) {
  document.onkeydown = document.onkeydown = function (e) {
    e = e || window.event;
    console.log(e);
    let consoleInput = document.getElementById("console_input");
    if (e.key === "Backspace" || e.key === "Delete") {
      let text = consoleInput.innerText;
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
      props.changeAboutSectionDisplay((e.target.displayAboutSection = true));
      props.changeProjectSectionDisplay(
        (e.target.displayProjectSection = false)
      );
      props.changeContactSectionDisplay(
        (e.target.displayContactSection = false)
      );
      props.changeConsoleInputDisplay((e.target.displayConsoleInput = false));
    } else {
      consoleInput.innerText += e.key;
    }
  };
}

export default handleInput;
