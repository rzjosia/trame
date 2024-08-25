import "./styles/global.scss";
import { format } from "./features/trame";

const lyricsInputElement = document.querySelector(
  "#lyricsInput",
) as HTMLTextAreaElement;

const lyricsOutputElement = document.querySelector(
  "#lyricsOutput",
) as HTMLTextAreaElement;

const countLineElement = document.querySelector(
  "#countLine",
) as HTMLInputElement;

const lineLengthElement = document.querySelector(
  "#lineLength",
) as HTMLInputElement;

const copyElement = document.querySelector("#copyLyrics") as HTMLButtonElement;

const resetElement = document.querySelector(
  "#resetLyrics",
) as HTMLButtonElement;

const titleElement = document.querySelector("#songTitle") as HTMLInputElement;

const updateLyricsOutput = (e: Event) => {
  e.preventDefault();
  const title = titleElement.value;
  const lyrics = lyricsInputElement.value;
  const countLine = countLineElement.valueAsNumber;
  const lineLength = lineLengthElement.valueAsNumber;
  lyricsOutputElement.value = format(title, lyrics, countLine, lineLength);
};

const elements = [
  titleElement,
  lyricsInputElement,
  countLineElement,
  lineLengthElement,
];

elements.forEach((element) => {
  element.addEventListener("keyup", updateLyricsOutput, false);
  element.addEventListener("change", updateLyricsOutput, false);
});

copyElement.addEventListener(
  "click",
  async (e) => {
    e.preventDefault();
    lyricsOutputElement.select();
    lyricsOutputElement.setSelectionRange(0, 99999);
    await navigator.clipboard.writeText(lyricsOutputElement.value);
  },
  false,
);

resetElement.addEventListener(
  "click",
  (e) => {
    e.preventDefault();
    titleElement.value = "";
    lyricsInputElement.value = "";
    lyricsOutputElement.value = "";
    lyricsInputElement.focus();
  },
  false,
);
