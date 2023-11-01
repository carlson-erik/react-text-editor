import {
  BlockQuoteElement,
  HeaderElement,
  LinkInlineElement,
  ListElement,
  ParagraphElement,
} from "../../../src";

const linkInline: LinkInlineElement = {
  type: "link",
  url: "https://google.com",
  children: [
    {
      text: "Simple example text",
    },
  ],
};

const blockQuote: BlockQuoteElement = {
  type: "block-quote",
  children: [
    {
      text: "Simple example text",
    },
  ],
};

const headerOne: HeaderElement = {
  type: "header-one",
  align: "left",
  children: [
    {
      text: "Simple example text",
    },
  ],
};

const headerTwo: HeaderElement = {
  type: "header-two",
  align: "left",
  children: [
    {
      text: "Simple example text",
    },
  ],
};

const headerThree: HeaderElement = {
  type: "header-three",
  align: "left",
  children: [
    {
      text: "Simple example text",
    },
  ],
};
const headerFour: HeaderElement = {
  type: "header-four",
  align: "left",
  children: [
    {
      text: "Simple example text",
    },
  ],
};

const headerFive: HeaderElement = {
  type: "header-five",
  align: "left",
  children: [
    {
      text: "Simple example text",
    },
  ],
};

const headerSix: HeaderElement = {
  type: "header-six",
  align: "left",
  children: [
    {
      text: "Simple example text",
    },
  ],
};

const paragraph: ParagraphElement = {
  type: "paragraph",
  align: "left",
  children: [
    {
      text: "Simple example text",
    },
  ],
};

const paragraphWithLink: ParagraphElement = {
  type: "paragraph",
  align: "left",
  children: [linkInline],
};

const simpleBulletedList: ListElement = {
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
};

const multiTierOrderedList: ListElement = {
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
};

export {
  headerOne,
  headerTwo,
  headerThree,
  headerFour,
  headerFive,
  headerSix,
  blockQuote,
  linkInline,
  paragraph,
  paragraphWithLink,
  simpleBulletedList,
  multiTierOrderedList,
};
