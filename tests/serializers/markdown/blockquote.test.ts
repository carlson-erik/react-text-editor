import {
  serializeBlockQuote,
  isBlockQuoteElement,
} from "../../../src/serializers/markdown/blockquote";

describe("Markdown BlockQuoteElement serializer & utils", () => {
  test("serializeBlockQuote", async () => {
    // Assert BlockQuoteElements serialize correctly
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
    // Assert BlockQuoteElement is a valid BlockQuoteElement
    const validBlockQuote = isBlockQuoteElement({
      type: "block-quote",
      children: [
        {
          text: "Simple example text",
        },
      ],
    });
    expect(validBlockQuote).toBe(true);
    // Assert HeaderElement is an invalid BlockQuoteElement
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
