import {
  BlockQuoteElement,
  HeaderElement,
  LinkInlineElement,
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
};
