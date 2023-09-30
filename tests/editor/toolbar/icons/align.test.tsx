import { render } from "@testing-library/react";
import "jest-styled-components";

import Align from "../../../../src/editor/toolbar/icons/align";

describe("Align Icon component", () => {
  test("Renders Left Align icon with correct color", () => {
    const TEST_COLOR = "red";
    const { container } = render(<Align direction="left" color={TEST_COLOR} />);
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
          d="M1 0h6a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2zm0 8h8a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2zm0-4h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2z"
        />
      </svg>
    `);
  });

  test("Renders Center Align icon with correct color", () => {
    const TEST_COLOR = "green";
    const { container } = render(
      <Align direction="center" color={TEST_COLOR} />
    );
    expect(container.firstChild).toHaveAttribute("fill", TEST_COLOR);
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        height: 24px;
        width: 24px;
      }

      <svg
        class="c0"
        fill="green"
        viewBox="-5 -7 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 0h8a1 1 0 0 1 0 2H3a1 1 0 1 1 0-2zm0 8h8a1 1 0 0 1 0 2H3a1 1 0 1 1 0-2zM1 4h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2z"
        />
      </svg>
    `);
  });

  test("Renders Right Align icon with correct color", () => {
    const TEST_COLOR = "blue";
    const { container } = render(
      <Align direction="right" color={TEST_COLOR} />
    );
    expect(container.firstChild).toHaveAttribute("fill", TEST_COLOR);
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        height: 24px;
        width: 24px;
      }

      <svg
        class="c0"
        fill="blue"
        viewBox="-5 -7 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 0h6a1 1 0 0 1 0 2H7a1 1 0 1 1 0-2zM5 8h8a1 1 0 0 1 0 2H5a1 1 0 1 1 0-2zM1 4h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2z"
        />
      </svg>
    `);
  });

  test("Renders Justify Align icon with correct color", () => {
    const TEST_COLOR = "black";
    const { container } = render(
      <Align direction="justify" color={TEST_COLOR} />
    );
    expect(container.firstChild).toHaveAttribute("fill", TEST_COLOR);
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        height: 24px;
        width: 24px;
      }

      <svg
        class="c0"
        fill="black"
        viewBox="-5 -7 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 0h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2zm0 8h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2zm0-4h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2z"
        />
      </svg>
    `);
  });
});
