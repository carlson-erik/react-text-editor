import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import Input from "../../../../src/editor/toolbar/components/input";

describe("Toolbar Input component", () => {
  test("Renders Text Input with label", () => {
    const labelText = "Example label";
    const onChange = jest.fn();
    render(
      <Input
        id="test-input-id"
        type="text"
        label={labelText}
        value="example text"
        onChange={onChange}
      />
    );

    // Ensure input renders
    const input = screen.getByTestId("input");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "text");

    // Ensure label renders with correct text
    const label = screen.queryByTestId("input-label");
    expect(label).toBeInTheDocument();
    expect(label).toHaveTextContent(labelText);

    // Ensure onChange is fired correctly
    fireEvent.change(input, { target: { value: "new test text" } });
    expect(onChange).toHaveBeenCalled();
  });

  test("Renders Text Input without label", async () => {
    const onChange = jest.fn();
    render(
      <Input
        id="test-input-id"
        type="text"
        value="example text"
        onChange={onChange}
      />
    );

    // Ensure input renders
    const input = screen.getByTestId("input");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "text");

    // Ensure label renders with correct text
    const label = screen.queryByTestId("input-label");
    expect(label).toBeNull();

    // Ensure onChange is fired correctly
    fireEvent.change(input, { target: { value: "new test text" } });
    expect(onChange).toHaveBeenCalled();
  });

  test("Renders Password Input", async () => {
    const onChange = jest.fn();
    render(
      <Input
        id="test-input-id"
        type="password"
        value="example text"
        onChange={onChange}
      />
    );

    // Ensure input renders
    const input = screen.getByTestId("input");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "password");

    // Ensure onChange is fired correctly
    fireEvent.change(input, { target: { value: "new test text" } });
    expect(onChange).toHaveBeenCalled();
  });
});
