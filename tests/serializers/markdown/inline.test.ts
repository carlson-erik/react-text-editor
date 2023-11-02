import { LinkInlineElement, TextLeaf } from "../../../src";
import {
  isInlineElement,
  isLinkInlineElement,
  serializeInlineText,
} from "../../../src/serializers/markdown/inline";
import { blockQuote, linkInline } from "../constants";

describe("Markdown LinkInlineElement serializer & utils", () => {
  test("isLinkInlineElement", async () => {
    // Assert a LinkInlineElement is a valid LinkInlineElement
    const validLinkInlineElement = isLinkInlineElement(linkInline);
    expect(validLinkInlineElement).toBe(true);
    // Assert a Textleaf is an invalid LinkInlineElement
    const invalidTextLeaf = isLinkInlineElement({
      text: "Simple example text",
    });
    expect(invalidTextLeaf).toBe(false);
    // Assert a BlockQuoteElement is a valid LinkInlineElement
    const invalidElement = isLinkInlineElement(blockQuote);
    expect(invalidElement).toBe(false);
  });
  test("serializeLinkInlineElement", () => {});
});

describe("Markdown InlineElement serializer & utils", () => {
  test("isInlineElement", async () => {
    // Assert a TextLeaf is a valid InlineElement
    const validTextLeaf = isInlineElement({
      text: "Simple example text",
    });
    expect(validTextLeaf).toBe(true);
    // Assert a LinkInlineElement is a valid InlineElement
    const validLinkInlineElement = isInlineElement(linkInline);
    expect(validLinkInlineElement).toBe(true);
    // Assert a BlockQuoteElement is an invalid InlineElement
    const invalidElement = isInlineElement(blockQuote);
    expect(invalidElement).toBe(false);
  });

  const serializeInlineTextTestCases = [
    {
      element: {
        text: "Text",
        bold: true,
      } as TextLeaf,
      expectedValue: "**Text**",
      inlineStyleSupport: true,
      title: "Bold text serialization is supported",
    },
    {
      element: {
        text: "Text",
        italics: true,
      } as TextLeaf,
      expectedValue: "_Text_",
      inlineStyleSupport: true,
      title: "Italics text serialization is supported.",
    },
    {
      element: {
        text: "Text",
        underline: true,
      } as TextLeaf,
      expectedValue: "Text",
      inlineStyleSupport: true,
      title: "Underline text serialization is NOT supported (by Markdown).",
    },
    {
      element: {
        text: "Text",
        strikethrough: true,
      } as TextLeaf,
      expectedValue: "Text",
      inlineStyleSupport: true,
      title: "Strikethrough text serialization is NOT supported (by Markdown).",
    },
    {
      element: {
        type: "link",
        url: "https://google.com",
        children: [{ text: "Text" }],
      } as LinkInlineElement,
      expectedValue: "[Text](https://google.com)",
      title: "LinkInlineElement serialization is supported.",
    },
    {
      element: {
        text: "Text",
        italics: true,
        bold: true,
      } as TextLeaf,
      expectedValue: "Text",
      inlineStyleSupport: false,
      title:
        "inlineStyleSupport set to false disables inline style serialization",
    },
  ];

  serializeInlineTextTestCases.map(
    ({ element, title, expectedValue, inlineStyleSupport }) =>
      test(`serializeInlineText: ${title}`, async () => {
        expect(serializeInlineText(element, inlineStyleSupport)).toBe(
          expectedValue
        );
      })
  );
});
