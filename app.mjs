function redact(textBody, wordsToRedact, scrambleChar) {
  for (const word of wordsToRedact) {
    textBody = textBody.replaceAll(word, scrambleChar.repeat(word.length));
  }
  return textBody;
}

function getMainText() {
  return document.getElementById("textBody").value;
}

function getWordsToRedact() {
  // should return array
  const csWords = document.getElementById("textToRedact").value;
  return csWords.split(",").map((text) => text.trim());
}

function getScrambleChar() {
  return document.getElementById("scrambleChar").value;
}

function setDisplay(redactedText) {
  // do something with text body
  let display = document.querySelector(".redactr-display");
  if (display) {
    display.innerHTML = redactedText;
  }
}

function startApp() {
  document.getElementById("submitButton").addEventListener("click", (event) => {
    event.preventDefault();
    const redactedTextBody = redact(getMainText(), getWordsToRedact(), getScrambleChar());
    setDisplay(redactedTextBody);
  });
}

// ======= DO NOT EDIT ============== //
export default startApp;
// ======= EEND DO NOT EDIT ========= //