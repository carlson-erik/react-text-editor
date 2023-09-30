import { render } from "@testing-library/react";
import "jest-styled-components";

import Unindent from "../../../../src/editor/toolbar/icons/unindent";

describe("Unindent Icon component", () => {
  test("Renders Unindent icon with correct color", () => {
    const TEST_COLOR = "red";
    const { container } = render(<Unindent color={TEST_COLOR} />);
    expect(container.firstChild).toHaveAttribute("fill", TEST_COLOR);
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        height: 24px;
        width: 24px;
      }

      <svg
        class="c0"
        fill="red"
        viewBox="-5 -7 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 0h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2zm0 8h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2zm6-4h6a1 1 0 0 1 0 2H7a1 1 0 1 1 0-2zm-6.44.143l2.057-1.234a1 1 0 0 1 1.515.857v2.468a1 1 0 0 1-1.515.857L.561 5.857a1 1 0 0 1 0-1.714z"
        />
      </svg>
    `);
  });
});
