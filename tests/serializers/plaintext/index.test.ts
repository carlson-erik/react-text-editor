import {
  blockQuote,
  headerOne,
  headerTwo,
  multiTierOrderedList,
  paragraphWithLink,
  simpleBulletedList,
} from "../constants";
import { exportToPlaintext } from "../../../src/serializers/plaintext";

const LIST_PADDING = "\t";

describe("Plaintext Serializer & Export utils", () => {
  const exportToPlaintextTestCases = [
    {
      nodes: [headerOne, paragraphWithLink],
      expectedValue: `Simple example text\nSimple example text\n`,
      title: "Header & Paragraph with inline Link content",
    },
    {
      nodes: [headerTwo, blockQuote],
      expectedValue: `Simple example text\n\n"Simple example text"\n\n`,
      title: "Header & Paragraph with inline Link content",
    },
    {
      nodes: [simpleBulletedList, multiTierOrderedList],
      expectedValue: `${LIST_PADDING}- Apple\n${LIST_PADDING}- Pear\n${LIST_PADDING}1. Apple\n${LIST_PADDING}2. Pear\n${LIST_PADDING}${LIST_PADDING}- Toast\n${LIST_PADDING}${LIST_PADDING}- Baget\n${LIST_PADDING}3. Guava\n`,
      title: "Simple Bulleted & Multi-Tiered Order Lists",
    },
  ];

  exportToPlaintextTestCases.map(({ nodes, title, expectedValue }) =>
    test(`exportToPlaintext: ${title}`, async () => {
      expect(exportToPlaintext(nodes)).toBe(expectedValue);
    })
  );
});
