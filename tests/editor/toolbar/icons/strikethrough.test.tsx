import { render } from "@testing-library/react";
import "jest-styled-components";

import Strikethrough from "../../../../src/editor/toolbar/icons/strikethrough";

describe("Strikethrough Icon component", () => {
  test("Renders Strikethrough icon with correct color", () => {
    const TEST_COLOR = "red";
    const { container } = render(<Strikethrough color={TEST_COLOR} />);
    expect(container.firstChild).toHaveAttribute("fill", TEST_COLOR);
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        height: 24px;
        width: 24px;
      }

      <svg
        class="c0"
        fill="red"
        viewBox="-7 -5.5 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.657 4.935H1.15a2.997 2.997 0 0 1-.15-.94v-.497A3.498 3.498 0 0 1 4.498 0H6a3 3 0 0 1 3 3 1 1 0 1 1-2 0 1 1 0 0 0-1-1H4.498C3.67 2 3 2.67 3 3.498v.497a1 1 0 0 0 .657.94zm5.186 2.1c.102.301.157.624.157.96v.528a3.528 3.528 0 0 1-3.528 3.528H4a3 3 0 0 1-3-3V9a1 1 0 1 1 2 0v.05a1 1 0 0 0 1 1h1.472C6.316 10.05 7 9.367 7 8.523v-.528a1 1 0 0 0-.72-.96h2.563zM.5 5.51h9a.5.5 0 0 1 0 1h-9a.5.5 0 1 1 0-1z"
        />
      </svg>
    `);
  });
});
