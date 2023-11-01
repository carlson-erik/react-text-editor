import {
  serializeParagraph,
  isParagraphElement,
} from "../../../src/serializers/markdown/paragraph";
import { blockQuote, paragraph } from "./constants";

describe("Markdown ParagraphElement serializer & utils", () => {
  test("serializeParagraph", async () => {
    const paragrphText = serializeParagraph(paragraph);
    expect(paragrphText).toEqual(`Simple example text`);
  });

  test("isParagraphElement", async () => {
    const validParagraph = isParagraphElement(paragraph);
    expect(validParagraph).toBe(true);
    const invalidParagraph = isParagraphElement(blockQuote);
    expect(invalidParagraph).toBe(false);
  });
});
