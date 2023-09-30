import { render } from "@testing-library/react";
import "jest-styled-components";

import Chevron from "../../../../src/editor/toolbar/icons/chevron";

describe("Chevron Icon component", () => {
  test("Renders Chevron Up icon with correct color", () => {
    const TEST_COLOR = "red";
    const { container } = render(<Chevron direction="up" color={TEST_COLOR} />);
    expect(container.firstChild).toHaveAttribute("fill", TEST_COLOR);
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        height: 24px;
        width: 24px;
      }

      <svg
        class="c0"
        fill="red"
        viewBox="-5 -7.5 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.071 2.828l-4.95 4.95A1 1 0 0 1 .707 6.364L6.364.707a1 1 0 0 1 1.414 0l5.657 5.657a1 1 0 0 1-1.414 1.414l-4.95-4.95z"
          stroke="currentColor"
        />
      </svg>
    `);
  });

  test("Renders Chevron Down icon with correct color", () => {
    const TEST_COLOR = "red";
    const { container } = render(
      <Chevron direction="down" color={TEST_COLOR} />
    );
    expect(container.firstChild).toHaveAttribute("fill", TEST_COLOR);
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        height: 24px;
        width: 24px;
      }

      <svg
        class="c0"
        fill="red"
        viewBox="-5 -8 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.071 5.314l4.95-4.95a1 1 0 1 1 1.414 1.414L7.778 7.435a1 1 0 0 1-1.414 0L.707 1.778A1 1 0 1 1 2.121.364l4.95 4.95z"
          stroke="currentColor"
        />
      </svg>
    `);
  });
});
