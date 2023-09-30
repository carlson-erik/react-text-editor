import { render } from "@testing-library/react";
import "jest-styled-components";

import ParagraphElement from "../../../src/editor/elements";
import { RenderElementProps } from "slate-react";

describe("Paragraph Element component", () => {
  const testText: string = "Paragraph text";
  const paragraphProps: RenderElementProps = {
    children: testText,
    element: {
      type: "paragraph",
      align: "center",
      children: [
        {
          text: testText,
        },
      ],
    },
    attributes: {
      "data-slate-node": "element",
      "data-slate-inline": true,
      "data-slate-void": true,
      dir: "rtl",
      ref: {
        current: null,
      },
    },
  };

  test("ParagraphElement renders correctly with configured alignment", () => {
    const { container } = render(
      <ParagraphElement
        element={paragraphProps.element}
        attributes={paragraphProps.attributes}
      >
        {paragraphProps.children}
      </ParagraphElement>
    );
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        text-align: center;
        padding: 0 0 0.5rem 0;
      }

      <p
        alignment="center"
        class="c0"
        data-slate-inline="true"
        data-slate-node="element"
        data-slate-void="true"
        dir="rtl"
      >
        Paragraph text
      </p>
    `);
    expect(container.firstChild).toHaveStyleRule("text-align", "center");
  });
});
