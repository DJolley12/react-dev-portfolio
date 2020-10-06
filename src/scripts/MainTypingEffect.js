const introductionText = [
  "Hello, ",
  "my name is ",
  "Daniel Jolley, ",
  "and I am a ",
  "Full Stack Developer.",
];
const introDescription = [
  "I make ",
  "websites, ",
  "desktop apps, ",
  "web apps, ",
  "...and ",
  "other stuff! ",
  "Let's talk!",
];

let elementId = "intro_text";

let props = {
  text1: introductionText,
  text2: introDescription,
};
let {
  wordNumberForIntro,
  wordNumberForText,
  intros,
  descriptions,
  currentPhraseSelection,
  introText,
  descriptionsText,
  slicedWord,
  index,
  subtractIndex,
} = returnVariables(props);
function MainTypingEffect() {
  (function typeDescriptions() {
    let timeOutNumber = 50;

    if (
      wordNumberForText === descriptions.length &&
      wordNumberForIntro === intros.length
    ) {
      wordNumberForIntro = 0;
      wordNumberForText = 0;
      if (elementId === "intro_text") {
        document.getElementById("view_my_work_button").style.visibility =
          "visible";
        document.getElementById("view_my_work_button").style.animation =
          "fadeIn 2s";
        document.getElementById("view_my_work_button").style.opacity = "0.7";
        document.getElementById("view_my_work_button").style.animation =
          "Flicker 0.125s infinite linear";
        document.getElementById("main_image").style.visibility = "visible";
        document.getElementById("main_image").style.animation = "fadeIn 3s";
      }
      return;
    }

    if (wordNumberForIntro !== intros.length) {
      currentPhraseSelection = intros[wordNumberForIntro];
      slicedWord = currentPhraseSelection.slice(0, ++index);

      let elementToUpdate = document.getElementById(elementId);

      document.getElementById(elementId).textContent = introText + slicedWord;

      if (slicedWord.length === currentPhraseSelection.length) {
        wordNumberForIntro++;
        index = 0;
        timeOutNumber = 200;
        introText += slicedWord;
        document.getElementById(elementId).textContent = introText;
      }
    } else if (wordNumberForIntro === intros.length) {
      timeOutNumber = 25;
      subtractIndex = introText.length;

      introText = introText.slice(0, --subtractIndex);

      document.getElementById(elementId).textContent = introText;

      if (introText.length === 0) {
        timeOutNumber = 50;
        currentPhraseSelection = descriptions[wordNumberForText];
        slicedWord = currentPhraseSelection.slice(0, ++index);

        document.getElementById(elementId).textContent =
          descriptionsText + slicedWord;

        if (slicedWord.length === currentPhraseSelection.length) {
          wordNumberForText++;
          index = 0;
          timeOutNumber = 200;
          descriptionsText += slicedWord;
          document.getElementById(elementId).textContent = descriptionsText;
        }
      }
    }
    setTimeout(typeDescriptions, timeOutNumber);
  })();
}

function returnVariables(props) {
  let intros = props.text1;
  let descriptions = "";
  if (props.text2 !== undefined) {
    descriptions = props.text2;
  }
  let wordNumberForIntro = 0;
  let wordNumberForText = 0;
  let index = 0;
  let subtractIndex = 0;
  let currentPhraseSelection = "";
  let introText = "";
  let descriptionsText = "";
  let slicedWord = "";
  return {
    wordNumberForIntro,
    wordNumberForText,
    intros,
    descriptions,
    currentPhraseSelection,
    introText,
    descriptionsText,
    slicedWord,
    index,
    subtractIndex,
  };
}

export default MainTypingEffect;
