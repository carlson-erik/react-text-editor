import { render } from "@testing-library/react";
import "jest-styled-components";

import Underline from "../../../../src/editor/toolbar/icons/underline";

describe("Underline Icon component", () => {
  test("Renders Underline icon with correct color", () => {
    const TEST_COLOR = "red";
    const { container } = render(<Underline color={TEST_COLOR} />);
    expect(container.firstChild).toHaveAttribute("fill", TEST_COLOR);
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        height: 24px;
        width: 24px;
      }

      <svg
        class="c0"
        fill="red"
        viewBox="-7 -6.5 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.5 10h7a.5.5 0 1 1 0 1h-7a.5.5 0 1 1 0-1zM7 2a1 1 0 1 1 0-2h2a1 1 0 1 1 0 2v3a4 4 0 1 1-8 0V2a1 1 0 1 1 0-2h2a1 1 0 1 1 0 2v3a2 2 0 1 0 4 0V2z"
        />
      </svg>
    `);
  });
});
