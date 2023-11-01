import {
  serializeParagraph,
  isParagraphElement,
} from "../../../src/serializers/markdown/paragraph";
import { blockQuote, paragraph } from "./constants";

describe("Markdown ParagraphElement serializer & utils", () => {
  test("serializeParagraph", () => {
    // Assert paragraphs get a new line character
    expect(serializeParagraph(paragraph)).toEqual(`Simple example text\n`);
    // Assert empty paragraphs don't get a new line character
    expect(
      serializeParagraph({
        type: "paragraph",
        align: "left",
        children: [{ text: "" }],
      })
    ).toEqual("");
    // Assert inline styles work within paragraphs
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
    const validParagraph = isParagraphElement(paragraph);
    expect(validParagraph).toBe(true);
    const invalidParagraph = isParagraphElement(blockQuote);
    expect(invalidParagraph).toBe(false);
  });
});
