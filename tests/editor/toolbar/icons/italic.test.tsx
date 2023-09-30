import { render } from "@testing-library/react";
import "jest-styled-components";

import Italic from "../../../../src/editor/toolbar/icons/italic";

describe("Italic Icon component", () => {
  test("Renders Italic icon with correct color", () => {
    const TEST_COLOR = "red";
    const { container } = render(<Italic color={TEST_COLOR} />);
    expect(container.firstChild).toHaveAttribute("fill", TEST_COLOR);
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        height: 24px;
        width: 24px;
      }

      <svg
        class="c0"
        fill="red"
        viewBox="-7.5 -7 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.273 8l1.95-6H3a1 1 0 1 1 0-2h5a1 1 0 1 1 0 2H6.326l-1.95 6H6a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2h1.273z"
        />
      </svg>
    `);
  });
});
