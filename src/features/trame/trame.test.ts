import { format, wrapText } from "./trame";

describe("format function", () => {
  it("should return an empty string when both title and lyrics are empty", () => {
    const result = format("", "");
    expect(result).toBe("");
  });

  it("should format the lyrics with a title derived from the first line when title is empty", () => {
    const lyrics = "First line of the lyrics\nSecond line of the lyrics";
    const result = format("", lyrics);
    const expected = `Title: First line of the lyrics\n\n[Introduction]\nFirst line of the lyrics\n\nFirst line of the lyrics\nSecond line of the lyrics\n\n[Conclusion]\n\n`;
    expect(result).toBe(expected);
  });

  it("should retain the provided title and format the lyrics", () => {
    const title = "My Song";
    const lyrics = "First line\nSecond line\nThird line";
    const result = format(title, lyrics);
    const expected = `Title: My Song\n\n[Introduction]\nMy Song\n\nFirst line\nSecond line\n\nThird line\n\n[Conclusion]\n\n`;
    expect(result).toBe(expected);
  });

  it("should wrap text based on the given line length", () => {
    const title = "Wrapped Song";
    const lyrics =
      "This is a very long line that should be wrapped after a certain length";
    const result = format(title, lyrics, { splitLine: 2, lineLength: 20 });
    const expected = `Title: Wrapped Song\n\n[Introduction]\nWrapped Song\n\nThis is a very long\nline that should be\n\nwrapped after a\ncertain length\n\n[Conclusion]\n\n`;
    expect(result).toBe(expected);
  });

  it('should replace numeric verses with "Couplet" and handle sections correctly', () => {
    const title = "Verses";
    const lyrics =
      "1. First verse\n2. Second verse\nRefrain\nThis is the refrain";
    const result = format(title, lyrics);
    const expected = `Title: Verses\n\n[Introduction]\nVerses\n\n[Couplet 1]\nFirst verse\n\n[Couplet 2]\nSecond verse\n\n[Refrain]\nThis is the refrain\n\n[Conclusion]\n\n`;
    expect(result).toBe(expected);
  });

  it("should format lyrics with multiple sections", () => {
    const title = "Song with Sections";
    const lyrics = `Couplet 1\nFirst couplet\nRefrain\nThe refrain\nPont\nThe bridge`;
    const result = format(title, lyrics);
    const expected = `Title: Song with Sections\n\n[Introduction]\nSong with Sections\n\n[Couplet 1]\nFirst couplet\n\n[Refrain]\nThe refrain\n\n[Pont]\nThe bridge\n\n[Conclusion]\n\n`;
    expect(result).toBe(expected);
  });

  it("should correctly handle empty lines and multiple newlines", () => {
    const title = "My Song";
    const lyrics = `First line\n\n\nSecond line\n\nThird line`;
    const result = format(title, lyrics);
    const expected = `Title: My Song\n\n[Introduction]\nMy Song\n\nFirst line\nSecond line\n\nThird line\n\n[Conclusion]\n\n`;
    expect(result).toBe(expected);
  });
});

describe("wrapText", () => {
  it("should split text into chunks of default size", () => {
    const text =
      "This is a long text that needs to be wrapped into chunks of specified size.";
    const result = wrapText(text);
    expect(result).toEqual([
      "This is a long text that needs to",
      "be wrapped into chunks of specified",
      "size.",
    ]);
  });

  it("should return an error when text into chunks of specified size is less than 20", () => {
    const text = "This text will be wrapped into smaller chunks.";
    expect(() => wrapText(text, 1)).toThrow(
      `Chunk size must be at least 20. Given chunk size 1`,
    );
    expect(() => wrapText(text, 5)).toThrow(
      `Chunk size must be at least 20. Given chunk size 5`,
    );
    expect(() => wrapText(text, 10)).toThrow(
      `Chunk size must be at least 20. Given chunk size 10`,
    );
    expect(() => wrapText(text, 15)).toThrow(
      `Chunk size must be at least 20. Given chunk size 15`,
    );
    expect(() => wrapText(text, 19)).toThrow(
      `Chunk size must be at least 20. Given chunk size 19`,
    );
  });

  it("should handle text shorter than chunk size", () => {
    const text = "Short text";
    const result = wrapText(text);
    expect(result).toEqual(["Short text"]);
  });

  it("should handle empty text", () => {
    const text = "";
    const result = wrapText(text);
    expect(result).toEqual([]);
  });

  it("should handle text with trailing spaces", () => {
    const text = "Trailing spaces should be handled properly. ";
    const result = wrapText(text);
    expect(result).toEqual(["Trailing spaces should be handled", "properly."]);
  });
});
