import {
  serializeBlockQuote,
  isBlockQuoteElement,
} from "../../../src/serializers/markdown/blockquote";

describe("Markdown BlockQuoteElement serializer & utils", () => {
  test("serializeBlockQuote", async () => {
    const blockQuoteText = serializeBlockQuote({
      type: "block-quote",
      children: [
        {
          text: "Simple example text",
        },
      ],
    });

    expect(blockQuoteText).toEqual(`\n>"Simple example text"\n`);
  });

  test("isBlockQuoteElement", async () => {
    const validBlockQuote = isBlockQuoteElement({
      type: "block-quote",
      children: [
        {
          text: "Simple example text",
        },
      ],
    });
    expect(validBlockQuote).toBe(true);
    const invalidBlockQuote = isBlockQuoteElement({
      type: "header-one",
      align: "left",
      children: [
        {
          text: "Simple example text",
        },
      ],
    });
    expect(invalidBlockQuote).toBe(false);
  });
});
