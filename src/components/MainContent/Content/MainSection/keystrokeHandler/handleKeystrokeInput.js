import handleHome from "./handleHome"
import handleAbout from "./handleAbout"
import handleMyWork from "./handleMyWork";
import handleContact from "./handleContact";

function handleKeystrokeInput(props, e) {
    if (e.key === "h") {
        console.log(props);
        console.log(e);
        handleHome(props, e);
      } else if (e.key === "a") {
        handleAbout(props, e);
      } else if (e.key === "m") {
          handleMyWork(props, e);
      } else if (e.key === "c") {
          handleContact(props, e);
      }
}

export default handleKeystrokeInput