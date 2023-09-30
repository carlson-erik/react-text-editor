import { render } from "@testing-library/react";
import "jest-styled-components";

import Redo from "../../../../src/editor/toolbar/icons/redo";

describe("Redo Icon component", () => {
  test("Renders Redo icon with correct color", () => {
    const TEST_COLOR = "red";
    const { container } = render(<Redo color={TEST_COLOR} />);
    expect(container.firstChild).toHaveAttribute("fill", TEST_COLOR);
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        height: 24px;
        width: 24px;
      }

      <svg
        class="c0"
        fill="red"
        viewBox="-1 -2 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.347 7.24l.847-1.266a.984.984 0 0 1 1.375-.259c.456.31.58.93.277 1.383L19.65 10.38a.984.984 0 0 1-1.375.259L14.97 8.393a1.002 1.002 0 0 1-.277-1.382.984.984 0 0 1 1.375-.26l1.344.915C16.428 4.386 13.42 2 9.863 2c-4.357 0-7.89 3.582-7.89 8s3.533 8 7.89 8c.545 0 .987.448.987 1s-.442 1-.987 1C4.416 20 0 15.523 0 10S4.416 0 9.863 0c4.504 0 8.302 3.06 9.484 7.24z"
        />
      </svg>
    `);
  });
});
