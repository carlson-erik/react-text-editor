import { ListElement } from "../../../src";
import {
  LIST_PADDING,
  getListItemText,
  isListElement,
  serializeList,
} from "../../../src/serializers/markdown/list";

describe("Markdown ListElement serializer & utils", () => {
  test("getListItemText", () => {});
  test("isListElement", () => {});

  const serializeListTestCases = [
    {
      element: {
        type: "bulleted-list",
        children: [
          {
            type: "list-item",
            children: [{ text: "Apple" }],
          },
          {
            type: "list-item",
            children: [{ text: "Pear" }],
          },
        ],
      } as ListElement,
      expectedValue: `${LIST_PADDING}- Apple\n${LIST_PADDING}- Pear`,
      title: "(Simple) Bulleted List serializes correctly.",
    },
    {
      element: {
        type: "ordered-list",
        children: [
          {
            type: "list-item",
            children: [{ text: "Apple" }],
          },
          {
            type: "list-item",
            children: [{ text: "Pear" }],
          },
        ],
      } as ListElement,
      expectedValue: `${LIST_PADDING}1. Apple\n${LIST_PADDING}2. Pear`,
      title: "(Simple) Ordered List serializes correctly.",
    },
    {
      element: {
        type: "ordered-list",
        children: [
          {
            type: "list-item",
            children: [{ text: "Apple" }],
          },
          {
            type: "list-item",
            children: [{ text: "Pear" }],
          },
          {
            type: "bulleted-list",
            children: [
              {
                type: "list-item",
                children: [{ text: "Toast" }],
              },
              {
                type: "list-item",
                children: [{ text: "Baget" }],
              },
            ],
          },
          {
            type: "list-item",
            children: [{ text: "Guava" }],
          },
        ],
      } as ListElement,
      expectedValue: `${LIST_PADDING}1. Apple\n${LIST_PADDING}2. Pear\n${LIST_PADDING}${LIST_PADDING}- Toast\n${LIST_PADDING}${LIST_PADDING}- Baget\n${LIST_PADDING}3. Guava`,
      title: "Ordered Lists with Bulleted Sublists serialize correctly.",
    },
    {
      element: {
        type: "bulleted-list",
        children: [
          {
            type: "list-item",
            children: [{ text: "Apple" }],
          },
          {
            type: "list-item",
            children: [{ text: "Pear" }],
          },
          {
            type: "ordered-list",
            children: [
              {
                type: "list-item",
                children: [{ text: "Toast" }],
              },
              {
                type: "list-item",
                children: [{ text: "Baget" }],
              },
            ],
          },
          {
            type: "list-item",
            children: [{ text: "Guava" }],
          },
        ],
      } as ListElement,
      expectedValue: `${LIST_PADDING}- Apple\n${LIST_PADDING}- Pear\n${LIST_PADDING}${LIST_PADDING}1. Toast\n${LIST_PADDING}${LIST_PADDING}2. Baget\n${LIST_PADDING}- Guava`,
      title: "Bulleted Lists with Ordered Sublists serialize correctly.",
    },
    {
      element: {
        type: "ordered-list",
        children: [
          {
            type: "list-item",
            children: [{ text: "Apple" }],
          },
          {
            type: "list-item",
            children: [{ text: "Pear" }],
          },
          {
            type: "bulleted-list",
            children: [
              {
                type: "list-item",
                children: [{ text: "Toast" }],
              },
              {
                type: "list-item",
                children: [
                  { text: "Baget:" },
                  {
                    type: "link",
                    url: "https://google.com",
                    children: [{ text: "Google" }],
                  },
                ],
              },
            ],
          },
          {
            type: "list-item",
            children: [{ text: "Guava" }],
          },
        ],
      } as ListElement,
      expectedValue: `${LIST_PADDING}1. Apple\n${LIST_PADDING}2. Pear\n${LIST_PADDING}${LIST_PADDING}- Toast\n${LIST_PADDING}${LIST_PADDING}- Baget:[Google](https://google.com)\n${LIST_PADDING}3. Guava`,
      title: "List Items with InlineElements serialize correctly.",
    },
  ];
  serializeListTestCases.map(({ element, title, expectedValue }) =>
    test(`serializeList: ${title}`, async () => {
      expect(serializeList(element, 0)).toBe(expectedValue);
    })
  );
});
