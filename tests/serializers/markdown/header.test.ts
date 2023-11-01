import { HeaderElement } from "../../../src";
import {
  serializeHeader,
  isHeaderElement,
} from "../../../src/serializers/markdown/header";
import {
  headerOne,
  headerTwo,
  headerThree,
  headerFour,
  headerFive,
  headerSix,
  blockQuote,
} from "../constants";

describe("Markdown HeaderElement serializer & utils", () => {
  const serializeHeaderTestCases = [
    {
      element: headerOne,
      expectedValue: "# Simple example text",
      title: "Header One element serializes correctly",
    },
    {
      element: headerTwo,
      expectedValue: "## Simple example text",
      title: "Header Two element serializes correctly",
    },
    {
      element: headerThree,
      expectedValue: "### Simple example text",
      title: "Header Three element serializes correctly",
    },
    {
      element: headerFour,
      expectedValue: "#### Simple example text",
      title: "Header Four element serializes correctly",
    },
    {
      element: headerFive,
      expectedValue: "##### Simple example text",
      title: "Header Five element serializes correctly",
    },
    {
      element: headerSix,
      expectedValue: "###### Simple example text",
      title: "Header Six element serializes correctly",
    },
    {
      element: {
        type: "header-one",
        align: "left",
        children: [
          { text: "The most " },
          { text: "amazing", bold: true },
          { text: " story" },
        ],
      } as HeaderElement,
      title: "Inline elements aren't supported for Header elements",
      expectedValue: "# The most amazing story",
    },
  ];

  serializeHeaderTestCases.map(({ element, title, expectedValue }) =>
    test(`serializeHeader: ${title}`, async () => {
      expect(serializeHeader(element)).toBe(expectedValue);
    })
  );

  const isHeaderElementTestCases = [
    {
      element: headerOne,
      expectedValue: true,
      title: "Header One element is a valid HeaderElement",
    },
    {
      element: headerTwo,
      expectedValue: true,
      title: "Header Two element is a valid HeaderElement",
    },
    {
      element: headerThree,
      expectedValue: true,
      title: "Header Three element is a valid HeaderElement",
    },
    {
      element: blockQuote,
      expectedValue: false,
      title: "Block Quote element is an invalid HeaderElement",
    },
    {
      element: headerFour,
      expectedValue: true,
      title: "Header Four element  is a valid HeaderElement",
    },
    {
      element: headerFive,
      expectedValue: true,
      title: "Header Five element  is a valid HeaderElement",
    },
    {
      element: headerSix,
      expectedValue: true,
      title: "Header Six element  is a valid HeaderElement",
    },
  ];

  isHeaderElementTestCases.map(({ element, title, expectedValue }) =>
    test(`isHeaderElement: ${title}`, async () => {
      expect(isHeaderElement(element)).toBe(expectedValue);
    })
  );
});
