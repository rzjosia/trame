import "./styles/global.scss";
import { format } from "./features/trame";

// DOM Elements
const elements = {
  title: document.querySelector("#songTitle") as HTMLInputElement,
  lyricsInput: document.querySelector("#lyricsInput") as HTMLTextAreaElement,
  lyricsOutput: document.querySelector("#lyricsOutput") as HTMLTextAreaElement,
  countLine: document.querySelector("#countLine") as HTMLInputElement,
  lineLength: document.querySelector("#lineLength") as HTMLInputElement,
  copyButton: document.querySelector("#copyLyrics") as HTMLButtonElement,
  resetButton: document.querySelector("#resetLyrics") as HTMLButtonElement,
};

// Event Handlers
const handleLyricsUpdate = (e: Event): void => {
  e.preventDefault();
  const { title, lyricsInput, lyricsOutput, countLine, lineLength } = elements;

  lyricsOutput.value = format(title.value, lyricsInput.value, {
    splitLine: countLine.valueAsNumber,
    lineLength: lineLength.valueAsNumber,
  });
};

const handleCopy = async (e: Event): Promise<void> => {
  e.preventDefault();
  const { lyricsOutput } = elements;

  lyricsOutput.select();
  lyricsOutput.setSelectionRange(0, 99999);
  await navigator.clipboard.writeText(lyricsOutput.value);
};

const handleReset = (e: Event): void => {
  e.preventDefault();
  const { title, lyricsInput, lyricsOutput } = elements;

  title.value = "";
  lyricsInput.value = "";
  lyricsOutput.value = "";
  lyricsInput.focus();
};

// Event Listeners
const inputElements = [
  elements.title,
  elements.lyricsInput,
  elements.countLine,
  elements.lineLength,
];

inputElements.forEach((element) => {
  element.addEventListener("keyup", handleLyricsUpdate);
  element.addEventListener("change", handleLyricsUpdate);
});

elements.copyButton.addEventListener("click", handleCopy);
elements.resetButton.addEventListener("click", handleReset);
