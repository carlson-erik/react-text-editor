import {
  serializeBlockQuote,
  isBlockQuoteElement,
} from "../../../src/serializers/markdown/blockquote";

describe("Markdown BlockQuoteElement serializer & utils", () => {
  // Assert BlockQuoteElements serialize correctly
  test("serializeBlockQuote", async () => {
    expect(
      serializeBlockQuote({
        type: "block-quote",
        children: [
          {
            text: "Simple example text",
          },
        ],
      })
    ).toEqual(`\n>"Simple example text"\n`);
    // Assert inline styles aren't supported for BlockQuotes
    expect(
      serializeBlockQuote({
        type: "block-quote",
        children: [
          {
            text: "Simple example text",
            bold: true,
          },
        ],
      })
    ).toEqual(`\n>"Simple example text"\n`);
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
