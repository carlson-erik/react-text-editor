import {
  serializeParagraph,
  isParagraphElement,
} from "../../../src/serializers/markdown/paragraph";
import { blockQuote, paragraph } from "./constants";

describe("Markdown ParagraphElement serializer & utils", () => {
  test("serializeParagraph", () => {
    // Assert ParagraphElements serialize and they get a new line character
    expect(serializeParagraph(paragraph)).toEqual(`Simple example text\n`);
    // Assert empty paragraphs don't get a new line character
    expect(
      serializeParagraph({
        type: "paragraph",
        align: "left",
        children: [{ text: "" }],
      })
    ).toEqual("");
    // Assert inline styles work within valid ParagraphElements
    const inlineParagraphText = serializeParagraph({
      type: "paragraph",
      align: "left",
      children: [
        { text: "The most " },
        { text: "amazing", bold: true },
        { text: " story" },
      ],
    });
    expect(inlineParagraphText).toEqual(`The most **amazing** story\n`);
  });

  test("isParagraphElement", () => {
    // Assert a ParagraphElement is a valid ParagraphElement
    const validParagraph = isParagraphElement(paragraph);
    expect(validParagraph).toBe(true);
    // Assert a BlockQuoteElement is an invalid ParagraphElement
    const invalidParagraph = isParagraphElement(blockQuote);
    expect(invalidParagraph).toBe(false);
  });
});
