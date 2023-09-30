import { render, screen, fireEvent } from "@testing-library/react";

import Dropdown, {
  Option,
} from "../../../../src/editor/toolbar/components/dropdown";

const options: Option[] = [
  {
    label: "Option A",
    value: "option-a",
  },
  {
    label: "Option B",
    value: "option-b",
  },
  {
    label: "Option C",
    value: "option-c",
  },
  {
    label: "Option D",
    value: "option-d",
  },
];
const selectedOption: Option = {
  label: "Option C",
  value: "option-c",
};

describe("Toolbar Dropdown component", () => {
  test("Renders with placeholder text", () => {
    const onChangeMock = jest.fn();
    const placeholder = "test placeholder";

    render(
      <Dropdown
        options={options}
        placeholder={placeholder}
        onChange={onChangeMock}
      />
    );

    const dropdownElement = screen.getByTestId("dropdown");

    // Expect the dropdown element to render
    expect(dropdownElement).toBeInTheDocument();
    // Expect the dropdown to have the placeholder text
    expect(dropdownElement).toHaveTextContent(placeholder);
  });

  test("Renders with placeholder text when disabled.", () => {
    const onChangeMock = jest.fn();
    const placeholder = "test placeholder";

    render(
      <Dropdown
        options={options}
        placeholder={placeholder}
        onChange={onChangeMock}
        disabled
      />
    );

    const dropdownElement = screen.getByTestId("dropdown-disabled");

    // Expect the dropdown element to render
    expect(dropdownElement).toBeInTheDocument();
    // Expect the dropdown to have the placeholder text
    expect(dropdownElement).toHaveTextContent(placeholder);
  });

  test("Renders with selected Option.", () => {
    const onChangeMock = jest.fn();
    const placeholder = "test placeholder";

    render(
      <Dropdown
        options={options}
        selectedOption={selectedOption}
        placeholder={placeholder}
        onChange={onChangeMock}
      />
    );

    const dropdownElement = screen.getByTestId("dropdown");

    // Expect the dropdown element to render
    expect(dropdownElement).toBeInTheDocument();
    // Expect the dropdown to have the correct text
    expect(dropdownElement).toHaveTextContent(selectedOption.label);
  });

  test("On select of Dropdown, Options list shows. On select of item in Options list, expect onChange event to fire.", () => {
    const onChangeMock = jest.fn();
    const placeholder = "test placeholder";

    render(
      <Dropdown
        options={options}
        selectedOption={selectedOption}
        placeholder={placeholder}
        onChange={onChangeMock}
      />
    );

    const dropdownElement = screen.getByTestId("dropdown");
    // Expect the dropdown element to render
    expect(dropdownElement).toBeInTheDocument();

    // Open dropdown menu
    fireEvent.click(dropdownElement);

    const optionsList = screen.getByTestId("options-list");
    // Expect the list to show
    expect(optionsList).toBeInTheDocument();

    const allOptions = screen.getAllByTestId("option");
    // Expect the correct amount of items to show.
    expect(allOptions).toHaveLength(4);

    // Select a new option
    fireEvent.click(allOptions[1]);

    // Expect onChange fired with the correct option passed to it.
    expect(onChangeMock).toHaveBeenCalledWith(options[1]);
  });
});
