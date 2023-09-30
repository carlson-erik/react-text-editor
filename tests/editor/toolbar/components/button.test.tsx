import React from "react";
import { render, screen, fireEvent, getByTestId } from "@testing-library/react";
import Button from "../../../../src/editor/toolbar/components/button";

describe("Toolbar Button component", () => {
  test("Renders Primary Button", () => {
    const onClickHandler = jest.fn();
    const { container } = render(
      <Button onClick={onClickHandler} primary data-testid="PrimaryButton">
        Button Text
      </Button>
    );
    expect(container.firstChild).toMatchInlineSnapshot(`
      <a
        class="sc-beyTiQ gYhMkN"
        data-testid="PrimaryButton"
      >
        <button
          class="sc-guDMob sc-dmyDmy bqCiYZ iIoUjO"
        >
          <span
            class="sc-eDLKEg iznXVi"
          >
            Button Text
          </span>
        </button>
      </a>
    `);
    fireEvent.click(screen.getByTestId("PrimaryButton"));
    expect(onClickHandler).toHaveBeenCalledTimes(1);
  });

  test("Renders Secondary Button", () => {
    const onClickHandler = jest.fn();
    const { container } = render(
      <Button onClick={onClickHandler}>Button Text</Button>
    );

    fireEvent.click(getByTestId(container, "ToolbarButton"));
    expect(onClickHandler).toHaveBeenCalledTimes(1);

    expect(container.firstChild).toMatchInlineSnapshot(`
      <a
        class="sc-beyTiQ gYhMkN"
        data-testid="ToolbarButton"
      >
        <button
          class="sc-guDMob sc-hLQTFJ bqCiYZ bSqDjB"
        >
          <span
            class="sc-eDLKEg iznXVi"
          >
            Button Text
          </span>
        </button>
      </a>
    `);
  });
});
