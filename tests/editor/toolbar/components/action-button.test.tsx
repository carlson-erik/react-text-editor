import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import ActionButton from "../../../../src/editor/toolbar/components/action-button";
import Bold from "../../../../src/editor/toolbar/icons/bold";

describe("Toolbar Action Button component", () => {
  test("Renders Action Button", () => {
    const onClickHandler = jest.fn();
    const onMouseDownHandler = jest.fn();
    const { container } = render(
      <ActionButton onClick={onClickHandler} onMouseDown={onMouseDownHandler}>
        <Bold color="black" />
      </ActionButton>
    );

    expect(container.firstChild).toMatchInlineSnapshot(`
      <span
        class="sc-beyTiQ gUbnCD"
        data-testid="action-button"
      >
        <svg
          class="sc-guDMob kJAtBv"
          fill="black"
          viewBox="-8.5 -7 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 5.455v2.727h1.5c.828 0 1.5-.61 1.5-1.364 0-.753-.672-1.363-1.5-1.363H2zm3.514-1.24C6.413 4.793 7 5.744 7 6.819 7 8.575 5.433 10 3.5 10H0V.91C0 .406.448 0 1 0h2c1.657 0 3 1.221 3 2.727 0 .55-.179 1.06-.486 1.489zM2 1.819v1.818h1c.552 0 1-.407 1-.909s-.448-.909-1-.909H2z"
          />
        </svg>
      </span>
    `);

    fireEvent.mouseDown(screen.getByTestId("action-button"));
    expect(onMouseDownHandler).toHaveBeenCalledTimes(1);
    fireEvent.click(screen.getByTestId("action-button"));
    expect(onClickHandler).toHaveBeenCalledTimes(1);
  });
});
