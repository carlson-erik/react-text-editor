import { render } from "@testing-library/react";
import "jest-styled-components";

import Attachment from "../../../../src/editor/toolbar/icons/attachment";

describe("Attachment Icon component", () => {
  test("Renders Attachment icon with correct color", () => {
    const TEST_COLOR = "red";
    const { container } = render(<Attachment color={TEST_COLOR} />);
    expect(container.firstChild).toHaveAttribute("fill", TEST_COLOR);
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        height: 24px;
        width: 24px;
      }

      <svg
        class="c0"
        fill="red"
        viewBox="-1.5 -1.5 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.433 5.359a.933.933 0 0 1 1.357 0c.375.39.375 1.022 0 1.412L8.26 18.78a4.663 4.663 0 0 1-6.783 0c-1.873-1.95-1.873-5.113 0-7.064L11.65 1.12a2.798 2.798 0 0 1 4.07 0c1.124 1.17 1.124 3.068 0 4.239L6.902 14.54a.933.933 0 0 1-1.356 0 1.028 1.028 0 0 1 0-1.412l8.818-9.183a1.028 1.028 0 0 0 0-1.413.933.933 0 0 0-1.357 0L2.832 13.13c-1.123 1.17-1.123 3.068 0 4.238a2.798 2.798 0 0 0 4.07 0L18.433 5.359z"
        />
      </svg>
    `);
  });
});
