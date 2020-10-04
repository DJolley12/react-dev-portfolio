function TypingEffectScript(props) {
  console.log("TypingEffect Props");
  console.log(props);
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
    typingContentElementId,
  } = returnVariables(props);

  (function typeDescriptions() {
    let timeOutNumber = 75;

    if (
      wordNumberForText === descriptions.length &&
      wordNumberForIntro === intros.length
    ) {
      wordNumberForIntro = 0;
      wordNumberForText = 0;

      return;
    }

    if (wordNumberForIntro !== intros.length) {
      currentPhraseSelection = intros[wordNumberForIntro];
      slicedWord = currentPhraseSelection.slice(0, ++index);

      document.getElementById(typingContentElementId).textContent =
        introText + slicedWord;

      if (slicedWord.length === currentPhraseSelection.length) {
        wordNumberForIntro++;
        index = 0;
        timeOutNumber = 200;
        introText += slicedWord;
        document.getElementById(typingContentElementId).textContent = introText;
        if (wordNumberForIntro === intros.length) {
          timeOutNumber = 500;
        }
      }
    } else if (wordNumberForIntro === intros.length) {
      timeOutNumber = 25;
      subtractIndex = introText.length;

      introText = introText.slice(0, --subtractIndex);

      document.getElementById(typingContentElementId).textContent = introText;

      if (introText.length === 0) {
        timeOutNumber = 75;
        currentPhraseSelection = descriptions[wordNumberForText];
        slicedWord = currentPhraseSelection.slice(0, ++index);

        document.getElementById(typingContentElementId).textContent =
          descriptionsText + slicedWord;

        if (slicedWord.length === currentPhraseSelection.length) {
          wordNumberForText++;
          index = 0;
          timeOutNumber = 200;
          descriptionsText += slicedWord;
          document.getElementById(
            typingContentElementId
          ).textContent = descriptionsText;
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
  let typingContentElementId = props.typingContentElementId;
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
    typingContentElementId,
  };
}

export default TypingEffectScript;
