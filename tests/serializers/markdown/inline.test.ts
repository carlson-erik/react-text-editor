import { LinkInlineElement, TextLeaf } from "../../../src";
import {
  isInlineElement,
  isLinkInlineElement,
  serializeInlineText,
  serializeLinkInlineElement,
} from "../../../src/serializers/markdown/inline";
import { blockQuote, linkInline } from "./constants";

describe("Markdown LinkInlineElement serializer & utils", () => {
  test("isLinkInlineElement", async () => {
    // Assert with a LinkInlineElement
    const validLinkInlineElement = isLinkInlineElement(linkInline);
    expect(validLinkInlineElement).toBe(true);
    // Assert with a TextLeaf
    const invalidTextLeaf = isLinkInlineElement({
      text: "Simple example text",
    });
    expect(invalidTextLeaf).toBe(false);
    // Assert with a BlockQuoteElement
    const invalidElement = isLinkInlineElement(blockQuote);
    expect(invalidElement).toBe(false);
  });
  test("serializeLinkInlineElement", () => {});
});

describe("Markdown InlineElement serializer & utils", () => {
  test("isInlineElement", async () => {
    // Assert with a TextLeaf
    const validTextLeaf = isInlineElement({
      text: "Simple example text",
    });
    expect(validTextLeaf).toBe(true);
    // Assert with a LinkInlineElement
    const validLinkInlineElement = isInlineElement(linkInline);
    expect(validLinkInlineElement).toBe(true);
    // Assert with a BlockQuoteElement
    const invalidElement = isInlineElement(blockQuote);
    expect(invalidElement).toBe(false);
  });

  const serializeInlineTextTestCases = [
    {
      element: {
        text: "Text",
        bold: true,
      } as TextLeaf,
      title: "Bold text",
      expectedValue: "**Text**",
      inlineStyleSupport: true,
    },
    {
      element: {
        text: "Text",
        italics: true,
      } as TextLeaf,
      title: "Italics text",
      expectedValue: "_Text_",
      inlineStyleSupport: true,
    },
    {
      element: {
        text: "Text",
        underline: true,
      } as TextLeaf,
      title: "MARKDOWN NOT SUPPORTED: Underline text",
      expectedValue: "Text",
      inlineStyleSupport: true,
    },
    {
      element: {
        text: "Text",
        strikethrough: true,
      } as TextLeaf,
      title: "NOT SUPPORTED: Strikethrough text",
      expectedValue: "Text",
      inlineStyleSupport: true,
    },
    {
      element: {
        type: "link",
        url: "https://google.com",
        children: [{ text: "Text" }],
      } as LinkInlineElement,
      title: "LinkInlineElement",
      expectedValue: "[Text](https://google.com)",
    },
    {
      element: {
        text: "Text",
        italics: true,
        bold: true,
      } as TextLeaf,
      title: "inlineStyleSupport set to false disables styles",
      expectedValue: "Text",
      inlineStyleSupport: false,
    },
  ];

  serializeInlineTextTestCases.map(
    ({ element, title, expectedValue, inlineStyleSupport }) =>
      test(`serializeInlineText ${title}`, async () => {
        expect(serializeInlineText(element, inlineStyleSupport)).toBe(
          expectedValue
        );
      })
  );
});
