import { render } from "@testing-library/react";
import "jest-styled-components";

import Indent from "../../../../src/editor/toolbar/icons/indent";

describe("Indent Icon component", () => {
  test("Renders Indent icon with correct color", () => {
    const TEST_COLOR = "red";
    const { container } = render(<Indent color={TEST_COLOR} />);
    expect(container.firstChild).toHaveAttribute("fill", TEST_COLOR);
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        height: 24px;
        width: 24px;
      }

      <svg
        class="c0"
        fill="red"
        viewBox="-4.5 -7 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 0h12a1 1 0 0 1 0 2H2a1 1 0 1 1 0-2zm0 8h12a1 1 0 0 1 0 2H2a1 1 0 1 1 0-2zm6-4h6a1 1 0 0 1 0 2H8a1 1 0 1 1 0-2zM4.44 5.857L2.382 7.091a1 1 0 0 1-1.515-.857V3.766a1 1 0 0 1 1.515-.857l2.056 1.234a1 1 0 0 1 0 1.714z"
        />
      </svg>
    `);
  });
});
