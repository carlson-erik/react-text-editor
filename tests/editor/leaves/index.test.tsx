import { render } from "@testing-library/react";
import { RenderLeafProps } from "slate-react";
import "jest-styled-components";

import TextLeaf from "../../../src/editor/leaves/text";

describe("Text Leaf component", () => {
  const testText = "Test Text";
  const textLeafProps: RenderLeafProps = {
    children: testText,
    leaf: {
      text: testText,
      bold: true,
      italics: true,
      underline: true,
      strikethrough: true,
      textcolor: "red",
    },
    text: {
      text: testText,
      bold: true,
      italics: true,
      underline: true,
      strikethrough: true,
      textcolor: "red",
    },
    attributes: {
      "data-slate-leaf": true,
    },
  };
  test("TextLeaf renders correctly", () => {
    const { container } = render(
      <TextLeaf
        leaf={textLeafProps.leaf}
        text={textLeafProps.text}
        attributes={textLeafProps.attributes}
      >
        {textLeafProps.children}
      </TextLeaf>
    );

    expect(container.firstChild).toBeDefined();
    expect(container.firstChild).toHaveTextContent(testText);
    expect(container.firstChild).toHaveStyleRule("font-weight", "bold");
    expect(container.firstChild).toHaveStyleRule("font-style", "italic");
    expect(container.firstChild).toHaveStyleRule(
      "text-decoration",
      "line-through underline"
    );
    expect(container.firstChild).toHaveStyleRule("color", "red");
  });
});
