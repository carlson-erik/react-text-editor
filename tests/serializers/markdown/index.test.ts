import { exportToMarkdown } from "../../../src/serializers/markdown";
import { LIST_PADDING } from "../../../src/serializers/markdown/list";
import {
  blockQuote,
  paragraph,
  headerOne,
  paragraphWithLink,
  simpleBulletedList,
  multiTierOrderedList,
} from "./constants";

describe("Markdown Serializer & Export utils", () => {
  const exportToMarkdownTestCases = [
    {
      nodes: [paragraph, blockQuote],
      expectedValue: `Simple example text\n\n\n>"Simple example text"\n`,
      title: "Paragraph & BlockQuote content",
    },
    {
      nodes: [headerOne, paragraphWithLink],
      expectedValue:
        "# Simple example text\n[Simple example text](https://google.com)\n",
      title: "Header & Paragrah w/ inline link content",
    },
    {
      nodes: [simpleBulletedList, multiTierOrderedList],
      expectedValue: `${LIST_PADDING}- Apple\n${LIST_PADDING}- Pear\n${LIST_PADDING}1. Apple\n${LIST_PADDING}2. Pear\n${LIST_PADDING}${LIST_PADDING}- Toast\n${LIST_PADDING}${LIST_PADDING}- Baget\n${LIST_PADDING}3. Guava`,
      title: "Simple Bulleted & Multi-Tiered Order Lists",
    },
  ];

  exportToMarkdownTestCases.map(({ nodes, title, expectedValue }) =>
    test(`exportToMarkdown: ${title}`, async () => {
      expect(exportToMarkdown(nodes)).toBe(expectedValue);
    })
  );
});
