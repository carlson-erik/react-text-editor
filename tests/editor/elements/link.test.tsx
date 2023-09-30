import { render } from "@testing-library/react";
import { RenderElementProps } from "slate-react";

import LinkElement from "../../../src/editor/elements/link";

describe("Link Element component", () => {
  const testURL = "https://google.com";
  const linkProps: RenderElementProps = {
    children: "Link Text",
    element: {
      type: "link",
      url: testURL,
      children: [
        {
          text: "Link Text",
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

  test("Link renders correctly with appropriate url", () => {
    const { container } = render(
      <LinkElement
        element={linkProps.element}
        attributes={linkProps.attributes}
      >
        {linkProps.children}
      </LinkElement>
    );
    expect(container.firstChild).toBeDefined();
    expect(container.firstChild).toMatchInlineSnapshot(`
      <a
        class="sc-beyTiQ gCAoSg"
        data-slate-inline="true"
        data-slate-node="element"
        data-slate-void="true"
        dir="rtl"
        href="https://google.com"
      >
        <span
          contenteditable="false"
          style="font-size: 0px;"
        >
          $
           
        </span>
        Link Text
        <span
          contenteditable="false"
          style="font-size: 0px;"
        >
          $
           
        </span>
      </a>
    `);
    expect(container.firstChild).toHaveAttribute("href", testURL);
  });
});
