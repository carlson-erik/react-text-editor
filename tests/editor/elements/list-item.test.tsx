import { render } from "@testing-library/react";
import { RenderElementProps } from "slate-react";

import ListItemElement from "../../../src/editor/elements/list-item";

describe("Link Element component", () => {
  const testText = "List Item Text";
  const listItemProps: RenderElementProps = {
    children: testText,
    element: {
      type: "list-item",
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

  test("List Item renders correctly with correct text", () => {
    const { container } = render(
      <ListItemElement
        element={listItemProps.element}
        attributes={listItemProps.attributes}
      >
        {listItemProps.children}
      </ListItemElement>
    );
    expect(container.firstChild).toBeDefined();
    expect(container.firstChild).toMatchInlineSnapshot(`
      <li
        class="sc-beyTiQ"
        data-slate-inline="true"
        data-slate-node="element"
        data-slate-void="true"
        dir="rtl"
      >
        List Item Text
      </li>
    `);
  });
});
