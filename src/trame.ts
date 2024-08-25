export function format(
  title: string,
  lyrics: string,
  splitLine = 2,
  lineLength = 35,
) {
  if ("" === title.trim() && "" === lyrics.trim()) {
    return "";
  }

  const verseRegex = /Strophe/gim;
  const numericVerseRegex = /^(\d+)[.-\s]*(.+)/gim;
  const sections = ["Couplet", "Refrain", "Pont", "Pré-refrain"].join("|");
  const sectionRegex = new RegExp(`^(${sections})(\\s*\\d*)\\n`, "gim");
  const sectionMatcher = `\\[(${sections})\\s*\\d*\\]\\n+`;
  const matcher = new RegExp(
    `(${sectionMatcher})?((.+\\n+)(?<!(${sectionMatcher}))){1,${splitLine}}`,
    "gim",
  );

  const formated =
    wrapText(lyrics, lineLength)
      .join("\n")
      .replace(numericVerseRegex, "Couplet $1\n$2\n")
      .replace(verseRegex, "Couplet")
      .replace(sectionRegex, "[$1$2]\n")
      .concat("\n")
      .replace(/\n+/gi, "\n")
      .match(matcher)
      ?.join("\n")
      .trim() ?? "";

  if ("" === title) {
    const firstLineRegex = new RegExp(`^(?!${sectionMatcher}).+`, "mi");
    const firstLineMatch = formated.match(firstLineRegex) || [""];
    title = firstLineMatch[0];
  }

  return `Title: ${title}\n\n[Introduction]\n${title}\n\n${formated}\n\n[Conclusion]\n\n`;
}

function wrapText(text: string, chunkSize = 28): string[] {
  const regex = new RegExp(`.{1,${chunkSize}}(\\s|$)`, "g");
  return (
    text
      .trim()
      .match(regex)
      ?.map((subText) => subText.trim()) || []
  );
}
