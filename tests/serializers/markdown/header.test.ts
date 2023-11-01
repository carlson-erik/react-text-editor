import { BlockQuoteElement, HeaderElement } from "../../../src";
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
} from "./constants";

describe("Markdown HeaderElement serializer & utils", () => {
  const serializeHeaderTestCases = [
    {
      element: headerOne,
      title: "Header One element",
      expectedValue: "# Simple example text",
    },
    {
      element: headerTwo,
      title: "Header Two element",
      expectedValue: "## Simple example text",
    },
    {
      element: headerThree,
      title: "Header Three element",
      expectedValue: "### Simple example text",
    },
    {
      element: headerFour,
      title: "Header Four element",
      expectedValue: "#### Simple example text",
    },
    {
      element: headerFive,
      title: "Header Five element",
      expectedValue: "##### Simple example text",
    },
    {
      element: headerSix,
      title: "Header Six element",
      expectedValue: "###### Simple example text",
    },
  ];

  serializeHeaderTestCases.map(({ element, title, expectedValue }) =>
    test(`serializeHeader ${title}`, async () => {
      expect(serializeHeader(element)).toBe(expectedValue);
    })
  );

  const isHeaderElementTestCases = [
    { element: headerOne, title: "Header One element", expectedValue: true },
    { element: headerTwo, title: "Header Two element", expectedValue: true },
    {
      element: headerThree,
      title: "Header Three element",
      expectedValue: true,
    },
    { element: blockQuote, title: "Block Quote element", expectedValue: false },
    { element: headerFour, title: "Header Four element", expectedValue: true },
    { element: headerFive, title: "Header Five element", expectedValue: true },
    { element: headerSix, title: "Header Six element", expectedValue: true },
  ];

  isHeaderElementTestCases.map(({ element, title, expectedValue }) =>
    test(`isHeaderElement ${title}`, async () => {
      expect(isHeaderElement(element)).toBe(expectedValue);
    })
  );
});
